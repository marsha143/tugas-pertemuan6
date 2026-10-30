
import Link from 'next/link';

const databaseMatakuliah = {
    'TI101': {
        nama: 'Pemrograman Web',
        prodi: 'Teknologi Informasi',
        semester: 3,
        sks: 3,
        dosen: 'Mohammad Roffi Suhendry, M.Kom.',
        deskripsi: 'Mempelajari pengembangan aplikasi web menggunakan HTML, CSS, JavaScript, dan Next.js.'
    },
    'TI102': {
        nama: 'Basis Data II',
        prodi: 'Teknologi Informasi',
        semester: 3,
        sks: 3,
        dosen: 'Mohammad Roffi Suhendry, M.Kom.',
        deskripsi: 'Mempelajari pengelolaan database, query SQL, relasi tabel, dan pengolahan data.'
    },
    'TI103': {
        nama: 'Rekayasa Perangkat Lunak',
        prodi: 'Teknologi Informasi',
        semester: 3,
        sks: 3,
        dosen: 'Reza Ilyasa, M.Kom.',
        deskripsi: 'Mempelajari proses analisis, perancangan, pengembangan, dan pengujian perangkat lunak.'
    },
    'TI104': {
        nama: 'UI/UX Design',
        prodi: 'Teknologi Informasi',
        semester: 3,
        sks: 2,
        dosen: 'Reza Ilyasa, M.Kom.',
        deskripsi: 'Mempelajari desain antarmuka dan pengalaman pengguna dalam aplikasi.'
    },
};

export default async function DetailMatakuliah({ params }) {
    // 1. Tangkap nilai parameter [kode] dari URL
    const { kode } = await params;

    // 2. Cari data mata kuliah berdasarkan kode
    const matkul = databaseMatakuliah[kode];

    // 3. Jika kode tidak terdaftar, tampilkan pesan
    if (!matkul) {
        return (
            <div style={{
                padding: '20px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px'
            }}>
                <h2 style={{ color: '#dc2626' }}>
                    Data Mata Kuliah "{kode}" Tidak Ditemukan!
                </h2>
                <Link href="/matakuliah">
                    ← Kembali ke Daftar Mata Kuliah
                </Link>
            </div>
        );
    }

    return (
        <div style={{
            border: '2px solid #164F63',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '500px'
        }}>
            <span style={{
                background: '#cffafe',
                color: '#164F63',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold'
            }}>
                INFORMASI MATA KULIAH
            </span>

            <h2 style={{ marginTop: '12px', marginBottom: '4px' }}>
                {matkul.nama}
            </h2>

            <p style={{ color: '#64748b', marginTop: 0 }}>
                Kode Mata Kuliah: <strong>{kode}</strong>
            </p>

            <hr />

            <p><strong>Program Studi:</strong> {matkul.prodi}</p>
            <p><strong>Semester:</strong> Semester {matkul.semester}</p>
            <p><strong>Jumlah SKS:</strong> {matkul.sks} SKS</p>
            <p><strong>Dosen Pengampu:</strong> {matkul.dosen}</p>

            <p><strong>Deskripsi:</strong></p>
            <p>{matkul.deskripsi}</p>

            <br />

            <Link href="/matakuliah" style={{ color: '#2563eb' }}>
                ← Kembali ke Daftar Mata Kuliah
            </Link>
        </div>
    );
}
