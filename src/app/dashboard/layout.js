import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <div style={{ display: 'flex', gap: '24px', minHeight: '65vh' }}>
            {/* Sidebar Khusus Area Dashboard */}
            <aside style={{ width: '220px', background: '#eff6ff', padding: '20px', borderRadius: '10px', border: '1px solid #bfdbfe' }}>
                <h3 style={{ marginTop: 0, color: '#1e3a8a' }}>📌 Menu Akademik</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
                    <li><Link href="/dashboard">🏠 Ringkasan Studi</Link></li>
                    <li><Link href="/dashboard/krs">📝 Pengisian KRS</Link></li>
                    <li><Link href="/dashboard/transkrip">📊 Transkrip Nilai</Link></li>
                </ul>
            </aside>

            {/* Area Konten Dinamis milik Dashboard */}
            <section style={{ flex: 1, background: 'white', padding: '24px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
                {children}
            </section>
        </div>
    );
}