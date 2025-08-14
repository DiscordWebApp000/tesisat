// Sadece admin kullanıcısı oluşturma scripti
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const bcrypt = require('bcryptjs');

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyDV_r_YapEUxaTMQ85WUiWYNpkKo7dOGD0",
  authDomain: "tesisat-10ec0.firebaseapp.com",
  projectId: "tesisat-10ec0",
  storageBucket: "tesisat-10ec0.firebasestorage.app",
  messagingSenderId: "912218300596",
  appId: "1:912218300596:web:467746618891c6783fb7e1"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createAdminOnly() {
  try {
    console.log('🔄 Sadece admin kullanıcısı oluşturuluyor...');
    
    const plainPassword = 'admin123456';
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(plainPassword, salt);

    // Admin kullanıcı bilgileri
    const adminUser = {
      uid: 'admin_001',
      email: 'admin@tesisat.com',
      displayName: 'Tesisat Admin',
      role: 'admin',
      permissions: ['read', 'write', 'delete', 'admin'],
      isActive: true,
      createdAt: new Date().toISOString(),
      lastLogin: null,
      passwordHash,
      passwordUpdatedAt: new Date().toISOString(),
      profile: {
        phone: '+90 532 789 91 82',
        position: 'Site Yöneticisi',
        department: 'IT',
        avatar: null
      },
      settings: {
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        language: 'tr',
        timezone: 'Europe/Istanbul'
      }
    };
    
    // Sadece admins collection'ına ekle (overwrite)
    const adminRef = doc(db, 'admins', adminUser.uid);
    await setDoc(adminRef, adminUser, { merge: false });
    
    console.log('✅ Admin kullanıcısı başarıyla oluşturuldu!');
    console.log('📧 Email:', adminUser.email);
    console.log('🆔 UID:', adminUser.uid);
    console.log('👤 Role:', adminUser.role);
    console.log('📅 Oluşturulma Tarihi:', adminUser.createdAt);
    
    console.log('\n🎉 Admin kullanıcısı hazır!');
    console.log('📝 Giriş bilgileri:');
    console.log('   Email: admin@tesisat.com');
    console.log('   Şifre: admin123456');
    
    return { success: true, user: adminUser };
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    return { success: false, error: error.message };
  }
}

// Script'i çalıştır
createAdminOnly()
  .then((result) => {
    if (result.success) {
      console.log('\n🏁 Script başarıyla tamamlandı!');
      console.log('🌐 Şimdi admin panelinde giriş yapabilirsiniz:');
      console.log('   http://localhost:3001/admin/login');
    } else {
      console.log('\n💥 Script başarısız oldu');
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Kritik hata:', error);
    process.exit(1);
  });
