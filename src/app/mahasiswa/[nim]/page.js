import Link from 'next/link';

const databaseMahasiswa = {
    '2025001': { nama: 'Aulia Rahman', prodi: 'Teknologi Informasi', semester: 3, ipk: 3.85, dosenWali: 'Reza Ilyasa, M.Kom.' },
    '2025002': { nama: 'Budi Santoso', prodi: 'Teknologi Informasi', semester: 3, ipk: 3.72, dosenWali: 'Reza Ilyasa, M.Kom.' },
    '2025003': { nama: 'Citra Kirana', prodi: 'Mekatronika', semester: 3, ipk: 3.91, dosenWali: 'Ir. Hendra Wijaya, M.T.' },
};

export default async function DetailMahasiswa({ params }) {
    // 1. Tangkap nilai parameter [nim] dari URL
    const { nim } = await params;

    // 2. Cari data mahasiswa di objek database berdasarkan NIM
    const profil = databaseMahasiswa[nim];

    // 3. Jika NIM tidak terdaftar di database, tampilkan pesan
    if (!profil) {
        return (
            <div style={{ padding: '20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
                <h2 style={{ color: '#dc2626' }}>Data NIM "{nim}" Tidak Ditemukan!</h2>
                <Link href="/mahasiswa">← Kembali ke Direktori Mahasiswa</Link>
            </div>
        );
    }

    return (
        <div style={{ border: '2px solid #1e3a8a', borderRadius: '12px', padding: '24px', maxWidth: '500px' }}>
            <span style={{ background: '#dbeafe', color: '#1e3a8a', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                KARTU TANDA MAHASISWA DIGITAL
            </span>
            <h2 style={{ marginTop: '12px', marginBottom: '4px' }}>{profil.nama}</h2>
            <p style={{ color: '#64748b', marginTop: 0 }}>NIM: <strong>{nim}</strong></p>
            <hr />
            <p><strong>Program Studi:</strong> {profil.prodi}</p>
            <p><strong>Semester Aktif:</strong> Semester {profil.semester}</p>
            <p><strong>Indeks Prestasi (IPK):</strong> {profil.ipk}</p>
            <p><strong>Dosen Wali:</strong> {profil.dosenWali}</p>
            <br />
            <Link href="/mahasiswa" style={{ color: '#2563eb' }}>← Kembali ke Daftar</Link>
        </div>
    );
}