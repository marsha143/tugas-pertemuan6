import Link from 'next/link';
import { databaseMatakuliah } from '@/data/matakuliah';

export default function DaftarMatakuliah() {
    return (
        <main>
            <h1>Daftar Mata Kuliah</h1>
            <p>Pilih mata kuliah untuk melihat informasi lengkapnya.</p>
            <div style={{ display: 'grid', gap: '12px' }}>
                {Object.entries(databaseMatakuliah).map(([kode, matkul]) => (
                    <article key={kode} style={{ border: '1px solid #cbd5e1', padding: '16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                        <div>
                            <strong>{matkul.nama}</strong><br />
                            <span style={{ color: '#64748b' }}>{kode} · {matkul.sks} SKS · Semester {matkul.semester}</span>
                        </div>
                        <Link href={`/matakuliah/${kode}`} style={{ color: '#1e40af' }}>Lihat detail →</Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
