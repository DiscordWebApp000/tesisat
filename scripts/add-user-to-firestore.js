// Firestore database'e admin kullanıcısı ekleme scripti
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, collection } = require('firebase/firestore');

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

async function addAdminUserToFirestore() {
  try {
    console.log('🔄 Firestore database\'e admin kullanıcısı ekleniyor...');
    
    // Admin kullanıcı bilgileri
    const adminUser = {
      uid: 'admin_user_001',
      email: 'admin@tesisat.com',
      displayName: 'Tesisat Admin',
      role: 'admin',
      permissions: ['read', 'write', 'delete', 'admin'],
      isActive: true,
      createdAt: new Date().toISOString(),
      lastLogin: null,
      profile: {
        phone: '+90 532 555 0123',
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
    
    // Users collection'ına ekle
    const userRef = doc(db, 'users', adminUser.uid);
    await setDoc(userRef, adminUser);
    
    console.log('✅ Admin kullanıcısı Firestore\'a başarıyla eklendi!');
    console.log('📧 Email:', adminUser.email);
    console.log('🆔 UID:', adminUser.uid);
    console.log('👤 Role:', adminUser.role);
    console.log('📅 Oluşturulma Tarihi:', adminUser.createdAt);
    
    // Admins collection'ına da ekle
    const adminRef = doc(db, 'admins', adminUser.uid);
    await setDoc(adminRef, {
      uid: adminUser.uid,
      email: adminUser.email,
      displayName: adminUser.displayName,
      role: adminUser.role,
      permissions: adminUser.permissions,
      isActive: adminUser.isActive,
      createdAt: adminUser.createdAt,
      lastLogin: adminUser.lastLogin
    });
    
    console.log('✅ Admin kullanıcısı admins collection\'ına da eklendi!');
    
    // Test kullanıcısı da ekle
    const testUser = {
      uid: 'test_user_001',
      email: 'test@tesisat.com',
      displayName: 'Test User',
      role: 'user',
      permissions: ['read'],
      isActive: true,
      createdAt: new Date().toISOString(),
      lastLogin: null,
      profile: {
        phone: '+90 555 123 4567',
        position: 'Test Kullanıcısı',
        department: 'Test',
        avatar: null
      },
      settings: {
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: false,
        language: 'tr',
        timezone: 'Europe/Istanbul'
      }
    };
    
    const testUserRef = doc(db, 'users', testUser.uid);
    await setDoc(testUserRef, testUser);
    
    console.log('✅ Test kullanıcısı da Firestore\'a eklendi!');
    
    console.log('\n🎉 Tüm kullanıcılar başarıyla eklendi!');
    console.log('📝 Kullanıcı bilgileri:');
    console.log('   👑 Admin: admin@tesisat.com');
    console.log('   👤 Test: test@tesisat.com');
    
    return { success: true };
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    return { success: false, error: error.message };
  }
}

// Script'i çalıştır
addAdminUserToFirestore()
  .then((result) => {
    if (result.success) {
      console.log('\n🏁 Script başarıyla tamamlandı!');
      console.log('🌐 Şimdi uygulamada giriş yapabilirsiniz:');
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
