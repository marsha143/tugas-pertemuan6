export default async function HalamanArsipDokumen({ params }) {
    const { slug } = await params; // slug berisi Array dari semua potongan URL!

    return (
        <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
            <h2>📁 Penjelajah Arsip Dokumen Kampus (Catch-All Route)</h2>

            {/* Menampilkan Breadcrumb otomatis dari Array slug */}
            <p style={{ background: '#e2e8f0', padding: '10px', borderRadius: '6px', fontFamily: 'monospace' }}>
                Lokasi Folder: Beranda / Dokumen / <strong>{slug.join(' / ')}</strong>
            </p>

            <h3>Rincian Segmen URL yang Tertangkap Jaring [...slug]:</h3>
            <ol>
                {slug.map((potonganUrl, index) => (
                    <li key={index}>
                        Level ke-{index + 1}: <strong>{potonganUrl}</strong>
                    </li>
                ))}
            </ol>
        </div>
    );
}