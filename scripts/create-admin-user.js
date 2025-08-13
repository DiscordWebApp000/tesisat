// Firebase Admin SDK ile kullanıcı oluşturma scripti
// Bu scripti çalıştırmadan önce Firebase Admin SDK kurulumu yapılmalı

const admin = require('firebase-admin');

// Firebase Admin SDK servis hesabı anahtarı
// Firebase Console > Project Settings > Service Accounts > Generate New Private Key
const serviceAccount = require('./firebase-service-account.json');

// Firebase Admin SDK'yı başlat
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tesisat-10ec0-default-rtdb.firebaseio.com'
});

async function createAdminUser() {
  try {
    console.log('🔄 Admin kullanıcısı oluşturuluyor...');
    
    // Admin kullanıcısı bilgileri
    const adminUser = {
      email: 'admin@tesisat.com',
      password: 'admin123456',
      displayName: 'Tesisat Admin',
      emailVerified: true
    };

    // Kullanıcıyı oluştur
    const userRecord = await admin.auth().createUser({
      email: adminUser.email,
      password: adminUser.password,
      displayName: adminUser.displayName,
      emailVerified: adminUser.emailVerified
    });

    console.log('✅ Admin kullanıcısı başarıyla oluşturuldu!');
    console.log('📧 Email:', userRecord.email);
    console.log('🆔 UID:', userRecord.uid);
    console.log('👤 Display Name:', userRecord.displayName);
    console.log('🔐 Şifre:', adminUser.password);
    
    // Kullanıcıya admin rolü ver (custom claims)
    await admin.auth().setCustomUserClaims(userRecord.uid, {
      admin: true,
      role: 'admin'
    });
    
    console.log('👑 Admin rolü verildi');
    
    // Firestore'da admin bilgilerini sakla
    const db = admin.firestore();
    await db.collection('admins').doc(userRecord.uid).set({
      email: adminUser.email,
      displayName: adminUser.displayName,
      role: 'admin',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      lastLogin: null
    });
    
    console.log('💾 Firestore\'da admin bilgileri saklandı');
    
    console.log('\n🎉 Admin kullanıcısı hazır!');
    console.log('📝 Giriş bilgileri:');
    console.log('   Email: admin@tesisat.com');
    console.log('   Şifre: admin123456');
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    
    if (error.code === 'auth/email-already-exists') {
      console.log('ℹ️  Bu email adresi zaten kullanımda');
      console.log('🔄 Mevcut kullanıcıyı admin yapmaya çalışılıyor...');
      
      try {
        // Mevcut kullanıcıyı bul
        const userRecord = await admin.auth().getUserByEmail('admin@tesisat.com');
        
        // Admin rolü ver
        await admin.auth().setCustomUserClaims(userRecord.uid, {
          admin: true,
          role: 'admin'
        });
        
        console.log('✅ Mevcut kullanıcı admin yapıldı');
        
      } catch (updateError) {
        console.error('❌ Rol güncelleme hatası:', updateError.message);
      }
    }
  }
}

// Script'i çalıştır
createAdminUser()
  .then(() => {
    console.log('\n🏁 Script tamamlandı');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Kritik hata:', error);
    process.exit(1);
  });
