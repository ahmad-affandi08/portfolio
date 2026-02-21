# 📄 Product Requirements Document (PRD)
# Website Portfolio Modern — Ahmad Affandi

**Versi:** 1.0
**Tanggal:** 19 Februari 2026
**Status:** Draft
**Tech Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + ReactBits

---

## 1. Ringkasan Eksekutif

Website portfolio pribadi yang modern, interaktif, dan berkesan tinggi untuk menampilkan identitas profesional, keahlian teknis, proyek-proyek terbaik, dan informasi kontak. Seluruh komponen UI menggunakan library **[ReactBits](https://reactbits.dev/)** — koleksi komponen React yang dianimasikan, interaktif, dan sepenuhnya dapat dikustomisasi — untuk menciptakan pengalaman visual yang memukau dan tak terlupakan.

---

## 2. Tujuan Produk

| Tujuan | Deskripsi |
|--------|-----------|
| **Branding Pribadi** | Membangun citra profesional yang kuat dan berkesan di mata rekruter, klien, dan komunitas developer |
| **Showcase Karya** | Menampilkan proyek-proyek terbaik dengan presentasi visual yang menarik |
| **Kemudahan Kontak** | Memudahkan calon klien/rekruter untuk menghubungi dan berkolaborasi |
| **Diferensiasi** | Tampil beda dari portfolio konvensional melalui animasi dan interaksi yang kaya |

---

## 3. Target Pengguna

- **Rekruter & HR Tech** — mencari kandidat developer berbakat
- **Klien Potensial** — individu/perusahaan yang membutuhkan jasa pengembangan web/aplikasi
- **Sesama Developer** — komunitas yang ingin berkolaborasi atau belajar
- **Perusahaan Startup & Agensi Digital** — yang mencari mitra teknis

---

## 4. Arsitektur & Tech Stack

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (font, metadata)
│   │   ├── page.tsx            # Halaman utama (single-page)
│   │   └── globals.css         # Global styles + Tailwind
│   ├── components/
│   │   ├── sections/           # Seksi-seksi halaman utama
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/                 # Komponen ReactBits yang dikustomisasi
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── NavBar.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/             # Komponen reusable
│   ├── lib/
│   │   └── data.ts             # Data statis (proyek, skill, pengalaman)
│   └── types/
│       └── index.ts            # TypeScript interfaces
```

**Dependensi Utama:**
- `next` v16, `react` v19, `typescript` v5
- `tailwindcss` v4
- `framer-motion` (digunakan oleh ReactBits)
- `@tabler/icons-react` atau `lucide-react` (ikon)

---

## 5. Desain & Estetika

### 5.1 Tema Visual
- **Mode:** Dark mode sebagai default (dengan opsi light mode)
- **Palet Warna:**
  - Background utama: `#0a0a0f` (hitam keunguan dalam)
  - Aksen primer: `#6c63ff` (ungu elektrik)
  - Aksen sekunder: `#00d4ff` (cyan neon)
  - Teks utama: `#f0f0f5`
  - Teks sekunder: `#8888aa`
- **Tipografi:**
  - Heading: `Bricolage Grotesque` (bold, ekspresif)
  - Body: `Inter` atau `Figtree` (bersih, mudah dibaca)
  - Kode: `JetBrains Mono`

### 5.2 Prinsip Desain
- **Glassmorphism** pada card dan navbar
- **Gradient mesh** sebagai background dinamis
- **Micro-animations** pada setiap interaksi hover/scroll
- **Smooth scroll** antar seksi
- **Responsive** — mobile-first design

---

## 6. Struktur Halaman & Komponen ReactBits

Website ini adalah **Single Page Application (SPA)** dengan navigasi smooth scroll ke setiap seksi.

---

### 6.1 Navigasi (NavBar)

**Komponen ReactBits yang digunakan:**
- [`NavBar`](https://reactbits.dev/components/nav-bar) — navigasi floating dengan efek blur/glassmorphism

**Fitur:**
- Logo / nama di kiri
- Menu link (Home, About, Skills, Projects, Experience, Contact) di tengah/kanan
- Tombol CTA "Hire Me" dengan efek hover
- Sticky navbar dengan efek backdrop blur saat scroll
- Indikator seksi aktif
- Hamburger menu untuk mobile

---

### 6.2 Seksi Hero

**Komponen ReactBits yang digunakan:**
- [`Aurora`](https://reactbits.dev/backgrounds/aurora) atau [`Particles`](https://reactbits.dev/backgrounds/particles) — background animasi
- [`SplitText`](https://reactbits.dev/text-animations/split-text) — animasi teks nama masuk per karakter
- [`BlurText`](https://reactbits.dev/text-animations/blur-text) — animasi tagline muncul dengan blur
- [`RotatingText`](https://reactbits.dev/text-animations/rotating-text) — rotasi peran (Full Stack Developer / UI Engineer / Open Source Enthusiast)
- [`GradientText`](https://reactbits.dev/text-animations/gradient-text) — teks nama dengan gradient warna
- [`MagneticButton`](https://reactbits.dev/components/magnetic-button) — tombol CTA "Download CV" & "View Projects"

**Konten:**
```
[Greeting] Halo, saya 👋
[Nama]     Ahmad Affandi
[Peran]    Full Stack Developer | UI Engineer | ...
[Bio]      Satu kalimat deskripsi singkat yang powerful
[CTA]      [Download CV]  [Lihat Proyek]
[Scroll]   Indikator scroll ke bawah (animated arrow)
```

---

### 6.3 Seksi About

**Komponen ReactBits yang digunakan:**
- [`FadeContent`](https://reactbits.dev/animations/fade-content) — animasi masuk saat scroll
- [`TiltCard`](https://reactbits.dev/components/tilt-card) — card foto profil dengan efek tilt 3D
- [`CountUp`](https://reactbits.dev/components/count-up) — animasi angka statistik (tahun pengalaman, proyek selesai, klien puas)

**Konten:**
- Foto profil dengan efek tilt interaktif
- Paragraf bio singkat (2–3 paragraf)
- Statistik: Tahun Pengalaman, Proyek Selesai, Klien Puas, Kontribusi Open Source
- Tombol "Download CV"

---

### 6.4 Seksi Skills / Keahlian

**Komponen ReactBits yang digunakan:**
- [`InfiniteScroll`](https://reactbits.dev/components/infinite-scroll) atau [`Marquee`](https://reactbits.dev/components/marquee) — logo teknologi bergerak otomatis
- [`GlassCard`](https://reactbits.dev/components/glass-card) atau card kustom — kartu kategori skill
- [`AnimatedList`](https://reactbits.dev/components/animated-list) — daftar skill dengan animasi masuk bertahap

**Kategori Skill:**
| Kategori | Teknologi |
|----------|-----------|
| **Frontend** | React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3 |
| **Backend** | Node.js, Express, NestJS, REST API, GraphQL |
| **Database** | PostgreSQL, MySQL, MongoDB, Redis |
| **DevOps & Tools** | Docker, Git, CI/CD, Linux, Vercel, AWS |
| **Mobile** | React Native (opsional) |

**Layout:** Tab atau grid kategori dengan logo teknologi + nama + level keahlian

---

### 6.5 Seksi Projects / Portofolio

**Komponen ReactBits yang digunakan:**
- [`MasonryGrid`](https://reactbits.dev/components/masonry) atau grid kustom — layout proyek
- [`SpotlightCard`](https://reactbits.dev/components/spotlight-card) — card proyek dengan efek spotlight saat hover
- [`ImageTrail`](https://reactbits.dev/components/image-trail) — efek preview gambar mengikuti kursor (opsional)
- [`Modal`](https://reactbits.dev/components/modal) atau `Drawer` — detail proyek saat diklik
- [`Badge`](https://reactbits.dev/components/badge) — tag teknologi yang digunakan

**Fitur:**
- Filter proyek berdasarkan kategori (Web App, Mobile, Open Source, dll.)
- Card proyek menampilkan: thumbnail, judul, deskripsi singkat, tech stack, link GitHub & Live Demo
- Animasi hover yang kaya pada setiap card

**Data Proyek (Contoh Struktur):**
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  techStack: string[];
  category: 'web' | 'mobile' | 'open-source' | 'other';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

---

### 6.6 Seksi Experience / Pengalaman

**Komponen ReactBits yang digunakan:**
- [`Timeline`](https://reactbits.dev/components/timeline) — timeline pengalaman kerja dan pendidikan
- [`FadeContent`](https://reactbits.dev/animations/fade-content) — animasi masuk saat scroll

**Konten:**
- Timeline vertikal dengan dua kolom (Pengalaman Kerja | Pendidikan)
- Setiap item: Posisi/Gelar, Perusahaan/Institusi, Periode, Deskripsi singkat

---

### 6.7 Seksi Contact / Kontak

**Komponen ReactBits yang digunakan:**
- [`GlassCard`](https://reactbits.dev/components/glass-card) — container form kontak
- [`AnimatedInput`](https://reactbits.dev/components/animated-input) — input dengan animasi label
- [`MagneticButton`](https://reactbits.dev/components/magnetic-button) — tombol kirim pesan
- [`Confetti`](https://reactbits.dev/components/confetti) — efek konfeti setelah pesan berhasil dikirim

**Konten:**
- Judul seksi + deskripsi ajakan
- Form: Nama, Email, Subjek, Pesan
- Validasi form (client-side)
- Integrasi email (Resend / EmailJS / Nodemailer)
- Link sosial media: GitHub, LinkedIn, Twitter/X, Instagram
- Informasi kontak: Email, Lokasi

---

### 6.8 Footer

**Konten:**
- Nama & tagline singkat
- Link navigasi cepat
- Link sosial media
- Copyright & tahun
- Tombol "Back to Top" dengan smooth scroll

---

## 7. Fitur & Fungsionalitas

### 7.1 Fitur Wajib (Must Have)
- [x] Navigasi smooth scroll antar seksi
- [x] Animasi masuk (entrance animation) saat elemen masuk viewport
- [x] Responsif di semua ukuran layar (mobile, tablet, desktop)
- [x] Dark mode default
- [x] Form kontak fungsional dengan validasi
- [x] Loading state dan feedback interaksi
- [x] SEO-friendly (meta tags, Open Graph, sitemap)
- [x] Performance optimal (Lighthouse score > 90)

### 7.2 Fitur Tambahan (Nice to Have)
- [ ] Light/Dark mode toggle
- [ ] Animasi cursor kustom
- [ ] Efek parallax pada background
- [ ] Blog/artikel sederhana
- [ ] Halaman detail proyek (`/projects/[slug]`)
- [ ] Animasi page transition
- [ ] PWA support
- [ ] Analytics (Google Analytics / Vercel Analytics)

---

## 8. Komponen ReactBits — Daftar Lengkap

| Seksi | Komponen ReactBits | URL Referensi |
|-------|-------------------|---------------|
| Background | Aurora / Particles | `reactbits.dev/backgrounds/aurora` |
| Hero - Teks | SplitText | `reactbits.dev/text-animations/split-text` |
| Hero - Teks | BlurText | `reactbits.dev/text-animations/blur-text` |
| Hero - Teks | RotatingText | `reactbits.dev/text-animations/rotating-text` |
| Hero - Teks | GradientText | `reactbits.dev/text-animations/gradient-text` |
| Hero - Tombol | MagneticButton | `reactbits.dev/components/magnetic-button` |
| Navigasi | NavBar | `reactbits.dev/components/nav-bar` |
| About | TiltCard | `reactbits.dev/components/tilt-card` |
| About | CountUp | `reactbits.dev/components/count-up` |
| Skills | Marquee / InfiniteScroll | `reactbits.dev/components/marquee` |
| Projects | SpotlightCard | `reactbits.dev/components/spotlight-card` |
| Projects | MasonryGrid | `reactbits.dev/components/masonry` |
| Experience | Timeline | `reactbits.dev/components/timeline` |
| Contact | MagneticButton | `reactbits.dev/components/magnetic-button` |
| Contact | Confetti | `reactbits.dev/components/confetti` |
| Global | FadeContent | `reactbits.dev/animations/fade-content` |

---

## 9. Spesifikasi Teknis

### 9.1 Performance
- **Lighthouse Score Target:** Performance > 90, Accessibility > 95, SEO > 95
- Gunakan `next/image` untuk optimasi gambar otomatis
- Lazy loading pada komponen berat (animasi, gambar)
- Font loading dengan `next/font`
- Code splitting otomatis via Next.js

### 9.2 SEO
- Meta title & description unik per halaman
- Open Graph tags untuk sharing di sosial media
- Structured data (JSON-LD) untuk personal profile
- Sitemap otomatis (`next-sitemap`)
- Canonical URL

### 9.3 Aksesibilitas
- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<article>`)
- ARIA labels pada elemen interaktif
- Keyboard navigation support
- Contrast ratio memenuhi WCAG 2.1 AA
- `prefers-reduced-motion` untuk menonaktifkan animasi bagi pengguna yang membutuhkan

### 9.4 Responsivitas
| Breakpoint | Lebar | Keterangan |
|------------|-------|------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px – 1024px | 2 kolom, navigasi adaptif |
| Desktop | > 1024px | Full layout, semua fitur aktif |
| Wide | > 1440px | Max-width container |

---

## 10. Alur Pengembangan

### Phase 1 — Setup & Fondasi (Hari 1–2)
- [ ] Setup proyek Next.js + TypeScript + Tailwind v4
- [ ] Install dependensi ReactBits & Framer Motion
- [ ] Konfigurasi font (Bricolage Grotesque + Inter)
- [ ] Setup design tokens (warna, spacing, tipografi)
- [ ] Buat struktur folder & file data statis

### Phase 2 — Komponen Dasar (Hari 3–5)
- [ ] NavBar dengan ReactBits NavBar component
- [ ] HeroSection dengan animasi teks & background
- [ ] Footer
- [ ] Layout responsif dasar

### Phase 3 — Seksi Konten (Hari 6–10)
- [ ] AboutSection + statistik CountUp
- [ ] SkillsSection + Marquee teknologi
- [ ] ProjectsSection + SpotlightCard + filter
- [ ] ExperienceSection + Timeline
- [ ] ContactSection + form + validasi

### Phase 4 — Polish & Optimasi (Hari 11–14)
- [ ] Animasi scroll (FadeContent, entrance animations)
- [ ] Responsivitas penuh di semua breakpoint
- [ ] SEO meta tags & Open Graph
- [ ] Performance audit & optimasi
- [ ] Testing cross-browser
- [ ] Deploy ke Vercel

---

## 11. Kriteria Penerimaan (Acceptance Criteria)

- ✅ Semua seksi tampil dengan benar di mobile, tablet, dan desktop
- ✅ Semua animasi ReactBits berjalan mulus (60fps)
- ✅ Form kontak berhasil mengirim email
- ✅ Lighthouse score: Performance ≥ 90, SEO ≥ 95
- ✅ Tidak ada error di console browser
- ✅ Waktu load pertama (FCP) < 2 detik
- ✅ Semua link eksternal (GitHub, Live Demo) berfungsi
- ✅ Tampilan konsisten di Chrome, Firefox, Safari, Edge

---

## 12. Referensi & Inspirasi

- **ReactBits Documentation:** https://reactbits.dev/
- **Framer Motion:** https://www.framer.com/motion/
- **Next.js App Router:** https://nextjs.org/docs/app
- **Tailwind CSS v4:** https://tailwindcss.com/docs

---

*Dokumen ini akan diperbarui seiring perkembangan proyek.*
