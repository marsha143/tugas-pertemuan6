import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Link from 'next/link';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portal Akademik | Politeknik Takumi",
  description: "Informasi program studi dan pengumuman akademik Politeknik Takumi.",
};

export default function RootLayout({ children }) {
return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif' }}>
        <header style={{ background: '#164F63', color: 'white', padding: '14px 28px', display: 'flex', justifyContent: 'space-between' }}>
          <strong>🏛️ SIAKAD POLITEKNIK TAKUMI</strong>
          <nav style={{ display: 'flex', gap: '18px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Beranda</Link>
            <Link href="/mahasiswa" style={{ color: 'white', textDecoration: 'none' }}>Direktori Mahasiswa</Link>
                    <Link href="/matakuliah" style={{ color: 'white', textDecoration: 'none' }}>
            Mata Kuliah
        </Link>
            <Link href="/dokumen/2026/kurikulum" style={{ color: 'white', textDecoration: 'none' }}>Arsip Dokumen</Link>
            <Link href="/dashboard" style={{ color: '#fde047', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard KRS</Link>
          </nav>
        </header>

        <div style={{ padding: '24px', maxWidth: '960px', margin: '0 auto' }}>
          {children}
        </div>
        <footer style={{ background: '#164e63', color: '#cbd5e1', textAlign: 'center', padding: '20px 24px', fontSize: '14px' }}>
          © 2026 Politeknik Takumi · Portal Informasi Akademik
        </footer>
      </body>
    </html>
  );

}
