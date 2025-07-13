# Kişisel Web Sitem

Modern, animasyonlu ve responsive bir kişisel CV/portfolio web sitesi. React, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Glassmorphism ve gradient efektleri
- **Smooth Animasyonlar**: Framer Motion ile akıcı animasyonlar
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Dark Theme**: Göz yormayan koyu tema
- **Interactive Elements**: Hover efektleri ve geçişler
- **Contact Form**: İletişim formu
- **Project Showcase**: Proje portföyü
- **Skills Visualization**: Yetenek seviyeleri
- **Timeline**: Deneyim timeline'ı

## 🛠️ Teknolojiler

- **React 18** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **Lucide React** - Modern ikonlar
- **Vite** - Hızlı build tool

## 🎨 Özelleştirme

### Kişisel Bilgiler
`src/components/` klasöründeki bileşenleri düzenleyerek kişisel bilgilerinizi güncelleyin:

- **Hero.tsx**: İsim, unvan ve açıklama
- **About.tsx**: Kişisel bilgiler ve hakkımda metni
- **Skills.tsx**: Yetenekler ve seviyeleri
- **Experience.tsx**: İş deneyimi ve eğitim
- **Projects.tsx**: Proje portföyü
- **Contact.tsx**: İletişim bilgileri

### Renkler ve Tema
`tailwind.config.js` dosyasında renk paletini özelleştirebilirsiniz:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... diğer tonlar
  }
}
```

### Animasyonlar
Framer Motion animasyonlarını `src/components/` dosyalarında düzenleyebilirsiniz.

## 📱 Responsive Tasarım

Site aşağıdaki breakpoint'lerde optimize edilmiştir:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Netlify
1. Netlify hesabınıza giriş yapın
2. "New site from Git" seçin
3. Repository'nizi bağlayın
4. Build komutunu `npm run build` olarak ayarlayın
5. Deploy edin

### Vercel
1. Vercel hesabınıza giriş yapın
2. "New Project" seçin
3. Repository'nizi import edin
4. Otomatik olarak deploy edilecektir

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
