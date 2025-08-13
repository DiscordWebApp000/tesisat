// Firebase'de direkt admin kullanıcısı ekleme scripti
const { initializeApp } = require('firebase/app');
const { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} = require('firebase/auth');

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
const auth = getAuth(app);

async function createAdminUser() {
  try {
    console.log('🔄 Firebase\'de admin kullanıcısı oluşturuluyor...');
    
    const email = 'admin@tesisat.com';
    const password = 'admin123456';
    
    // Kullanıcıyı oluştur
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Kullanıcı profilini güncelle
    await updateProfile(user, {
      displayName: 'Tesisat Admin'
    });
    
    console.log('✅ Admin kullanıcısı başarıyla oluşturuldu!');
    console.log('📧 Email:', user.email);
    console.log('🆔 UID:', user.uid);
    console.log('👤 Display Name:', user.displayName);
    console.log('🔐 Şifre:', password);
    
    console.log('\n🎉 Kullanıcı hazır!');
    console.log('📝 Giriş bilgileri:');
    console.log('   Email: admin@tesisat.com');
    console.log('   Şifre: admin123456');
    
    return { success: true, user };
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    
    if (error.code === 'auth/email-already-in-use') {
      console.log('ℹ️  Bu email adresi zaten kullanımda');
      console.log('🔄 Mevcut kullanıcı ile giriş yapılmaya çalışılıyor...');
      
      try {
        // Mevcut kullanıcı ile giriş yap
        const userCredential = await signInWithEmailAndPassword(auth, 'admin@tesisat.com', 'admin123456');
        const user = userCredential.user;
        
        console.log('✅ Mevcut kullanıcı ile giriş yapıldı');
        console.log('📧 Email:', user.email);
        console.log('🆔 UID:', user.uid);
        
        return { success: true, user, existing: true };
        
      } catch (loginError) {
        console.error('❌ Giriş hatası:', loginError.message);
        console.log('💡 Şifre yanlış olabilir, Firebase Console\'dan kontrol edin');
        return { success: false, error: loginError.message };
      }
    }
    
    return { success: false, error: error.message };
  }
}

// Script'i çalıştır
createAdminUser()
  .then((result) => {
    if (result.success) {
      console.log('\n🏁 Script başarıyla tamamlandı!');
      if (result.existing) {
        console.log('ℹ️  Kullanıcı zaten mevcut');
      }
    } else {
      console.log('\n💥 Script başarısız oldu');
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Kritik hata:', error);
    process.exit(1);
  });
