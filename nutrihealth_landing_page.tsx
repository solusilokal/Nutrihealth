import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Star,
  Quote,
  Leaf,
  Activity,
  HeartPulse,
  Scale,
  Apple,
  ChevronDown,
  Info,
  CalendarHeart,
  History,
  HelpCircle,
  Stethoscope,
  Camera,
  ChevronLeft,
  ChevronRight,
  Video
} from 'lucide-react';

const pageData = {
  name: "Nutrihealth",
  phone: "6289529605601", // Ganti dengan nomor WhatsApp aktif
  address: "Jl. G. Obos No. 10, Menteng, Jekan Raya, Palangka Raya, Kalimantan Tengah",
  title: "Konselor Gizi Profesional & Terpercaya",
  description: "Wujudkan tubuh sehat ideal, kelola kondisi medis, dan perbaiki pola makan Anda bersama ahli gizi bersertifikat. Solusi nutrisi personal untuk kualitas hidup yang lebih baik.",
  profileImg: "./logo-nutrihealth.png", 
  heroImg: "./Gemini_Generated_Image_7kruip7kruip7kru.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    maps: "https://www.google.com/maps?q=Palangka+Raya,+Kalimantan+Tengah", 
    facebook: "https://facebook.com/", 
    tiktok: "https://tiktok.com/@solusilokal.id" 
  },
  locationHighlights: [
    { text: "Klinik Palangka Raya", icon: MapPin },
    { text: "Online via Zoom", icon: Video },
    { text: "Senin - Sabtu: 09.00 - 17.00 WIB", icon: Clock }
  ],
  about: "Nutrihealth didirikan dengan visi untuk memasyarakatkan gaya hidup sehat melalui pendekatan nutrisi yang berbasis sains (Evidence-Based). Kami percaya bahwa setiap individu memiliki kebutuhan gizi yang unik. Oleh karena itu, tim dietisien dan nutrisionis kami berdedikasi untuk memberikan panduan yang praktis, realistis, dan berkelanjutan untuk Anda.",
  history: [
    { year: "2018", title: "Awal Berdiri", desc: "Berawal dari klinik kecil untuk edukasi gizi masyarakat sekitar." },
    { year: "2020", title: "Layanan Tele-Nutrition", desc: "Merespons pandemi dengan membuka layanan konsultasi gizi online." },
    { year: "2023", title: "Ekspansi Nutrihealth", desc: "Kini melayani >5000 klien dari seluruh Indonesia dengan puluhan ahli gizi." }
  ],
  catalog: [
    { 
      id: "weight-management",
      name: "Weight Management", 
      icon: "Scale", 
      price: "Rp 250.000",
      desc: "Program penurunan atau penaikan berat badan sehat tanpa diet menyiksa. Termasuk meal plan 7 hari.",
      features: ["Konsultasi 45 Menit", "Penilaian Status Gizi", "Meal Plan 1 Minggu"]
    },
    { 
      id: "clinical-nutrition",
      name: "Gizi Klinis & Medis", 
      icon: "HeartPulse", 
      price: "Rp 350.000",
      desc: "Terapi diet untuk kondisi medis khusus (Diabetes, Hipertensi, Asam Urat, Kolesterol, GERD, dll).",
      features: ["Konsultasi 60 Menit", "Analisis Hasil Lab", "Panduan Diet Spesifik"]
    },
    { 
      id: "sports-nutrition",
      name: "Sports Nutrition", 
      icon: "Activity", 
      price: "Rp 300.000",
      desc: "Maksimalkan performa olahraga dan pembentukan massa otot dengan strategi nutrisi yang tepat.",
      features: ["Konsultasi 45 Menit", "Timing Nutrisi", "Suplementasi (opsional)"]
    },
    { 
      id: "maternal-child",
      name: "Gizi Ibu & Anak", 
      icon: "Apple", 
      price: "Rp 275.000",
      desc: "Pendampingan gizi masa kehamilan, menyusui, hingga penanganan GTM dan stunting pada anak.",
      features: ["Konsultasi 45 Menit", "Pemantauan Tumbuh Kembang", "Ide Resep MPASI"]
    }
  ],
  faqs: [
    { q: "Apakah konsultasi dilakukan secara online atau offline?", a: "Kami menyediakan kedua opsi. Anda bisa datang ke klinik kami di Jakarta Selatan, atau memilih sesi online via Zoom/Google Meet yang bisa diakses dari mana saja." },
    { q: "Apakah harga di atas sudah termasuk resep makanan?", a: "Ya, setiap paket konsultasi sudah termasuk panduan makan (Meal Plan) yang disesuaikan dengan kondisi dan tujuan Anda." },
    { q: "Berapa lama durasi satu sesi konsultasi?", a: "Rata-rata satu sesi berlangsung antara 45 hingga 60 menit tergantung kerumitan kasus dan paket yang dipilih." },
    { q: "Apakah saya perlu membawa hasil lab?", a: "Untuk paket Gizi Klinis & Medis, kami sangat menyarankan Anda membawa hasil pemeriksaan laboratorium terbaru agar diagnosis dan rekomendasi diet lebih akurat." }
  ],
  testimonials: [
    { name: "Sari Indah", rating: 5, text: "Berat badan turun 5kg dalam sebulan tanpa rasa lapar. Ahli gizinya sangat ramah dan memberikan menu yang bahan-bahannya mudah dicari di pasar." },
    { name: "Bapak Herman", rating: 5, text: "Gula darah saya mulai terkontrol berkat panduan diet diabetes dari Nutrihealth. Penjelasannya sangat mudah dipahami oleh orang awam." },
    { name: "Andi Pratama", rating: 4, text: "Konsultasi sports nutrition-nya juara! Massa otot naik dan energi saat gym jauh lebih stabil. Recommended untuk yang suka workout." }
  ],
  galleryPhotos: [
    "./galeri-1.webp",
    "./galeri-2.webp",
    "./galeri-3.webp",
    "./galeri-4.webp",
    "./galeri-5.webp"
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const serviceType = formData.get('serviceType');
    const type = formData.get('type'); // online/offline
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20mendaftar%20konsultasi%20untuk%20layanan%20*${serviceType}*%20secara%20*${type}*%20pada%20tanggal%20*${date}*.%0A%0AKeluhan/Tujuan:%20${notes}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`
  };

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Scale': return <Scale size={24} className="text-[#136b63]" />;
      case 'HeartPulse': return <HeartPulse size={24} className="text-[#136b63]" />;
      case 'Activity': return <Activity size={24} className="text-[#136b63]" />;
      case 'Apple': return <Apple size={24} className="text-[#136b63]" />;
      default: return <Check size={24} className="text-[#136b63]" />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #f1fcf4; /* Latar belakang hijau sangat pucat */
          color: #063c37; /* Teks hijau gelap */
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#0c594c]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#0c594c]/40 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-[#0c594c]/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0 bg-[#e6f7ec]">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#063c37] via-[#0c594c]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-2 bg-white shadow-2xl border-2 border-[#7fc664]/60 overflow-hidden flex items-center justify-center mb-6">
              <img 
                src={pageData.profileImg} 
                alt="Logo Nutrihealth" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "./logo-nutrihealth.png";
                }}
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#a8e398] font-medium text-sm mb-4">
              {pageData.title}
            </p>
            <p className="text-white/80 font-light text-[13px] leading-relaxed mb-8 max-w-[95%]">
              {pageData.description}
            </p>

            {}
            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#7fc664]/20 backdrop-blur-md border border-[#7fc664]/30 hover:bg-[#7fc664]/30 transition-all text-white shadow-sm text-sm font-medium">
                  <Instagram size={18} /> Instagram
                </a>
                <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#7fc664]/20 backdrop-blur-md border border-[#7fc664]/30 hover:bg-[#7fc664]/30 transition-all text-white shadow-sm text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium w-full">
                <MapPin size={18} /> Lihat Lokasi Praktik
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#7fc664] text-[#063c37] rounded-2xl font-bold text-[14px] tracking-wide hover:bg-[#68a74e] transition-all shadow-[0_4px_14px_rgba(127,198,100,0.4)]"
            >
              Jadwalkan Konsultasi
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {}
        <section className="py-6 px-6 bg-[#063c37] shadow-inner">
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
            {pageData.locationHighlights.map((loc, idx) => {
              const Icon = loc.icon || MapPin;
              return (
                <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#0c594c]/50 rounded-full border border-[#136b63]/50 text-[11px] text-[#e6f7ec] font-medium">
                  <Icon size={14} className="text-[#7fc664]" />
                  {loc.text || `${loc.time} - ${loc.place}`}
                </span>
              );
            })}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Info className="text-[#136b63]" size={24} />
            <h2 className="text-2xl font-extrabold text-[#063c37] tracking-tight">Tentang Kami</h2>
          </div>
          <p className="text-slate-600 text-[14px] leading-relaxed text-justify px-2">
            {pageData.about}
          </p>
        </section>

        {}
        <section className="py-12 px-6 bg-[#f1fcf4] rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
          <div className="mb-8 text-center flex flex-col gap-2">
            <div className="flex justify-center items-center gap-2">
              <Stethoscope className="text-[#136b63]" size={26} />
              <h2 className="text-2xl font-extrabold text-[#063c37] tracking-tight">Katalog Layanan</h2>
            </div>
            <p className="text-slate-500 text-sm">Pilih program yang sesuai dengan tujuan kesehatan Anda.</p>
          </div>

          <div className="flex flex-col gap-5">
            {pageData.catalog.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-[#c4eec0] hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f1fcf4] rounded-bl-full -z-0 opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="bg-[#e6f7ec] p-3 rounded-2xl text-[#136b63]">
                      {renderIcon(item.icon)}
                    </div>
                    <span className="bg-[#136b63] text-white text-[12px] font-bold px-3 py-1.5 rounded-full">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#063c37] mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-[13px] leading-relaxed mb-4">{item.desc}</p>
                  
                  <ul className="flex flex-col gap-2">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                        <Check size={14} className="text-[#7fc664]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => {
                      document.querySelector(`select[name="serviceType"]`).value = item.name;
                      scrollToForm();
                    }}
                    className="w-full mt-5 py-3 border-2 border-[#c4eec0] text-[#136b63] font-bold text-sm rounded-xl hover:bg-[#e6f7ec] transition-colors"
                  >
                    Pilih Layanan Ini
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="pt-12 pb-14 bg-white rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] -mt-6 relative z-10">
          <div className="px-6 mb-8 flex flex-col gap-1 items-center">
            <div className="flex items-center gap-2">
              <Camera className="text-[#136b63]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#063c37] tracking-tight">Galeri Foto</h2>
            </div>
            <p className="text-slate-500 text-xs text-center">Momen dan aktivitas seputar kesehatan & nutrisi.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.galleryPhotos.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.galleryPhotos, idx)}
                className="snap-center shrink-0 w-[240px] aspect-[4/5] rounded-[1.5rem] overflow-hidden cursor-pointer relative group border border-[#c4eec0] shadow-sm bg-[#f1fcf4]"
              >
                <img 
                  src={img} 
                  alt={"Galeri " + (idx + 1)} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063c37]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-10 px-6 bg-[#0c594c] text-white">
          <div className="mb-8 flex flex-col gap-1 items-center">
            <div className="flex items-center gap-2">
              <Quote className="text-[#7fc664]" size={24} />
              <h2 className="text-2xl font-extrabold tracking-tight">Kisah Sukses Klien</h2>
            </div>
            <p className="text-[#a8e398] text-xs text-center">Transformasi kesehatan bersama Nutrihealth</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#136b63]/40 p-6 rounded-3xl border border-[#136b63] flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#7fc664] text-[#7fc664]" />
                  ))}
                </div>
                <p className="text-[#e6f7ec] text-[13px] leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#136b63] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#063c37] flex items-center justify-center text-[#7fc664] font-bold text-sm border border-[#136b63]">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[14px] font-bold text-[#e6f7ec]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="py-12 px-6 bg-white">
          <div className="mb-8 flex flex-col gap-1 items-center">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#136b63]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#063c37] tracking-tight">FAQ</h2>
            </div>
            <p className="text-slate-500 text-xs">Pertanyaan yang sering diajukan</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 text-left"
                >
                  <span className="font-bold text-[#063c37] text-[13px] pr-4">{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-[#136b63] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 py-4 border-t border-slate-100' : 'max-h-0'}`}>
                  <p className="text-slate-600 text-[13px] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="booking-form" className="py-12 px-6 bg-[#f1fcf4]">
          <div className="bg-white border border-[#c4eec0] rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e6f7ec] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#e6f7ec] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-[#063c37] mb-2">Mulai Konsultasi</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Isi form di bawah ini dan admin kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi jadwal.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Cth: Budi Santoso"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7fc664] focus:ring-1 focus:ring-[#7fc664] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Pilih Layanan</label>
                <select 
                  name="serviceType" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fc664] focus:ring-1 focus:ring-[#7fc664] transition-all appearance-none"
                >
                  <option value="">Pilih paket program...</option>
                  {pageData.catalog.map((item) => (
                    <option key={item.id} value={item.name}>{item.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Metode</label>
                  <select 
                    name="type" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7fc664] focus:ring-1 focus:ring-[#7fc664] transition-all appearance-none"
                  >
                    <option value="Online (Zoom)">Online</option>
                    <option value="Offline (Klinik)">Offline Klinik</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Rencana Tanggal</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7fc664] focus:ring-1 focus:ring-[#7fc664] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Keluhan / Tujuan Singkat</label>
                <textarea 
                  name="notes" 
                  rows="3"
                  placeholder="Cth: Ingin turun berat badan 5kg, ada riwayat maag..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7fc664] focus:ring-1 focus:ring-[#7fc664] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#136b63] text-white font-bold text-[14px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0c594c] transition-colors shadow-md border border-[#063c37]"
              >
                Kirim via WhatsApp
                <MessageCircle size={20} />
              </button>
            </form>
          </div>
        </section>

        {}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-[#c4eec0] flex items-center justify-center mb-4 p-2 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#063c37] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[11px] mt-8 mb-2">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[11px] tracking-wide font-medium hover:text-[#136b63] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0c594c] backdrop-blur-xl border border-[#136b63]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(6,60,55,0.4)] hover:bg-[#063c37] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#e6f7ec]">Daftar Konsultasi</span>
            <div className="bg-[#7fc664] text-[#063c37] p-2 rounded-xl">
              <CalendarHeart size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#063c37]/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Lightbox View" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#063c37]/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan Profil Ini</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#f1fcf4] border border-[#c4eec0] rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <div className="w-[72px] h-[72px] rounded-full border border-white shadow-sm mb-4 bg-white p-2 overflow-hidden flex items-center justify-center">
                <img src={pageData.profileImg} alt="Profile" className="w-full h-full object-contain" />
              </div>
              <h4 className="text-[#063c37] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-[#136b63]" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(shareLinks.twitter, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(shareLinks.facebook, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(shareLinks.whatsapp, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}