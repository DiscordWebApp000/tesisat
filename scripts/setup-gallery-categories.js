// Galeri kategorileri ve örnek resimler için Firestore setup scripti
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

async function setupGalleryCategories() {
  try {
    console.log('🔄 Galeri kategorileri ve örnek resimler oluşturuluyor...');
    
    // Kategoriler
    const categories = [
      {
        id: 'su-tesisati',
        name: 'Kanalizasyon',
        description: 'Kanalizasyon işleri ve örnekler',
        icon: '💧',
        color: 'blue',
        order: 1,
        isActive: true,
        createdAt: new Date().toISOString()
      },
      {
        id: 'kalorifer-tesisati',
        name: 'Kalorifer Tesisatı',
        description: 'Kalorifer ve ısıtma sistemleri',
        icon: '👷🏼',
        color: 'red',
        order: 2,
        isActive: true,
        createdAt: new Date().toISOString()
      },
      {
        id: 'banyo-mutfak',
        name: 'Banyo & Mutfak',
        description: 'Banyo ve mutfak tesisat işleri',
        icon: '🚿',
        color: 'green',
        order: 3,
        isActive: true,
        createdAt: new Date().toISOString()
      },
      {
        id: 'kanalizasyon',
        name: 'Kanalizasyon',
        description: 'Kanalizasyon ve drenaj sistemleri',
        icon: '🏗️',
        color: 'gray',
        order: 4,
        isActive: true,
        createdAt: new Date().toISOString()
      },
      {
        id: 'dogalgaz',
        name: 'Doğalgaz Tesisatı',
        description: 'Doğalgaz tesisat işleri',
        icon: '⚡',
        color: 'yellow',
        order: 5,
        isActive: true,
        createdAt: new Date().toISOString()
      }
    ];

    // Kategorileri Firestore'a ekle
    for (const category of categories) {
      const categoryRef = doc(db, 'gallery_categories', category.id);
      await setDoc(categoryRef, category);
      console.log(`✅ Kategori eklendi: ${category.name}`);
    }

    // Örnek galeri resimleri
    const galleryItems = [
      {
        id: 'item_001',
        title: 'Modern Kanalizasyon',
        description: 'Yeni bina Kanalizasyon kurulumu',
        categoryId: 'su-tesisati',
        imageUrl: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/200/150',
        tags: ['su', 'yeni kurulum', 'modern'],
        isActive: true,
        isFeatured: true,
        order: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'item_002',
        title: 'Kalorifer Sistemi',
        description: 'Merkezi ısıtma sistemi kurulumu',
        categoryId: 'kalorifer-tesisati',
        imageUrl: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/200/150',
        tags: ['kalorifer', 'ısıtma', 'merkezi sistem'],
        isActive: true,
        isFeatured: true,
        order: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'item_003',
        title: 'Lüks Banyo Tesisatı',
        description: 'Özel tasarım banyo tesisatı',
        categoryId: 'banyo-mutfak',
        imageUrl: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/200/150',
        tags: ['banyo', 'lüks', 'özel tasarım'],
        isActive: true,
        isFeatured: false,
        order: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'item_004',
        title: 'Kanalizasyon Drenajı',
        description: 'Endüstriyel drenaj sistemi',
        categoryId: 'kanalizasyon',
        imageUrl: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/200/150',
        tags: ['kanalizasyon', 'drenaj', 'endüstriyel'],
        isActive: true,
        isFeatured: false,
        order: 4,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 'item_005',
        title: 'Doğalgaz Ana Hattı',
        description: 'Ana doğalgaz hattı kurulumu',
        categoryId: 'doğalgaz',
        imageUrl: '/api/placeholder/400/300',
        thumbnailUrl: '/api/placeholder/200/150',
        tags: ['doğalgaz', 'ana hat', 'kurulum'],
        isActive: true,
        isFeatured: true,
        order: 5,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    // Galeri resimlerini Firestore'a ekle
    for (const item of galleryItems) {
      const itemRef = doc(db, 'gallery_items', item.id);
      await setDoc(itemRef, item);
      console.log(`✅ Galeri resmi eklendi: ${item.title}`);
    }

    console.log('\n🎉 Galeri kategorileri ve örnek resimler başarıyla oluşturuldu!');
    console.log('\n📊 Oluşturulan Yapı:');
    console.log('   📁 gallery_categories: 5 kategori');
    console.log('   🖼️  gallery_items: 5 örnek resim');
    
    console.log('\n🔧 Sonraki Adımlar:');
    console.log('   1. Admin panelinde galeri yönetimi aktif');
    console.log('   2. Kategorileri düzenleyebilirsiniz');
    console.log('   3. Yeni resimler ekleyebilirsiniz');
    console.log('   4. Kategorilere göre filtreleme yapabilirsiniz');
    
    return { success: true };
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    return { success: false, error: error.message };
  }
}

// Script'i çalıştır
setupGalleryCategories()
  .then((result) => {
    if (result.success) {
      console.log('\n🏁 Script başarıyla tamamlandı!');
    } else {
      console.log('\n💥 Script başarısız oldu');
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Kritik hata:', error);
    process.exit(1);
  });
