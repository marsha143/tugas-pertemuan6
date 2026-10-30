import Link from 'next/link';

export default function HalamanTidakDitemukan() {
    return (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h1 style={{ fontSize: '48px', color: '#dc2626', marginBottom: '8px' }}>404</h1>
            <h2>Waduh! Ruangan yang Kamu Cari Tidak Ada di Kampus Ini</h2>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
                Periksa kembali alamat URL yang kamu ketik atau kembali ke halaman utama.
            </p>
            <Link
                href="/"
                style={{ background: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}
            >
                ⬅️ Kembali ke Beranda Kampus
            </Link>
        </div>
    );
}