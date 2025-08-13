import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

export interface AdminSession {
  email: string;
  uid: string;
  displayName?: string;
}

const SESSION_KEY = 'admin_session';
const AUTH_EVENT = 'admin-auth-changed';

function readSessionFromStorage(): AdminSession | null {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(SESSION_KEY) : null;
    return raw ? (JSON.parse(raw) as AdminSession) : null;
  } catch {
    return null;
  }
}

export const useAuth = () => {
  const [user, setUser] = useState<AdminSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // İlk yüklemede session oku
    setUser(readSessionFromStorage());
    setLoading(false);

    // Custom auth event dinle
    const handleAuthChange = () => {
      setUser(readSessionFromStorage());
    };

    // Storage event (diğer tablar için)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === SESSION_KEY) {
        setUser(readSessionFromStorage());
      }
    };

    // Focus olduğunda session tazele
    const handleFocus = () => {
      setUser(readSessionFromStorage());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener(AUTH_EVENT, handleAuthChange as EventListener);
      window.addEventListener('storage', handleStorage);
      window.addEventListener('focus', handleFocus);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(AUTH_EVENT, handleAuthChange as EventListener);
        window.removeEventListener('storage', handleStorage);
        window.removeEventListener('focus', handleFocus);
      }
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const q = query(collection(db, 'admins'), where('email', '==', email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        return { success: false, error: 'Bu e-posta ile kayıtlı admin bulunamadı' };
      }

      const adminDoc = snapshot.docs[0];
      const data = adminDoc.data() as { email: string; passwordHash: string; displayName?: string };

      if (!data.passwordHash) {
        return { success: false, error: 'Admin için parola yapılandırması bulunamadı' };
      }

      const isValid = await bcrypt.compare(password, data.passwordHash);
      if (!isValid) {
        return { success: false, error: 'Şifre hatalı' };
      }

      const session: AdminSession = {
        email: data.email,
        uid: adminDoc.id,
        displayName: data.displayName || 'Admin',
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        window.dispatchEvent(new Event(AUTH_EVENT));
      }

      setUser(session);
      return { success: true, user: session };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Giriş yapılırken bir hata oluştu';
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(SESSION_KEY);
        window.dispatchEvent(new Event(AUTH_EVENT));
      }
      setUser(null);
      return { success: true };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Çıkış yapılırken bir hata oluştu';
      return { success: false, error: errorMessage };
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      if (!user) {
        throw new Error('Aktif admin oturumu bulunamadı');
      }

      const adminDocRef = doc(db, 'admins', user.uid);
      const q = query(collection(db, 'admins'), where('email', '==', user.email));
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        throw new Error('Admin bulunamadı');
      }
      const adminDoc = snapshot.docs[0];
      const data = adminDoc.data() as { email: string; passwordHash: string; displayName?: string };

      const isValid = await bcrypt.compare(currentPassword, data.passwordHash);
      if (!isValid) {
        return { success: false, error: 'Mevcut şifre hatalı' };
      }

      const salt = await bcrypt.genSalt(10);
      const newHash = await bcrypt.hash(newPassword, salt);
      await updateDoc(adminDocRef, {
        passwordHash: newHash,
        passwordUpdatedAt: new Date().toISOString(),
      });

      return { success: true };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Şifre güncellenirken bir hata oluştu';
      return { success: false, error: errorMessage };
    }
  };

  return {
    user,
    loading,
    login,
    logout,
    changePassword,
  };
};
