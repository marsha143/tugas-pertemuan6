
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
                maxWidth: '700px',
                margin: '40px auto',
                padding: '32px',
                background: '#fff',
                border: '1px solid #fecaca',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
                <div style={{ fontSize: '48px' }}>📚</div>
                <h2 style={{ color: '#dc2626' }}>
                    Mata Kuliah Tidak Ditemukan
                </h2>
                <p style={{ color: '#64748b' }}>
                    Kode mata kuliah "{kode}" tidak tersedia dalam database.
                </p>
                <Link href="/matakuliah" style={{
                    display: 'inline-block',
                    marginTop: '16px',
                    padding: '11px 20px',
                    background: '#164F63',
                    color: 'white',
                    borderRadius: '8px',
                    textDecoration: 'none'
                }}>
                    ← Kembali ke Daftar
                </Link>
            </div>
        );
    }

    return (
        <div style={{
            maxWidth: '950px',
            margin: '35px auto',
            padding: '0 20px'
        }}>

            <div style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                fontSize: '13px',
                color: '#64748b',
                marginBottom: '22px'
            }}>
                <Link href="/" style={{
                    color: '#164F63',
                    textDecoration: 'none'
                }}>
                    Beranda
                </Link>
                <span>/</span>
                <Link href="/matakuliah" style={{
                    color: '#164F63',
                    textDecoration: 'none'
                }}>
                    Mata Kuliah
                </Link>
                <span>/</span>
                <span>{kode}</span>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, #164F63, #24768a)',
                borderRadius: '18px',
                padding: '32px',
                color: 'white',
                marginBottom: '24px',
                boxShadow: '0 8px 25px rgba(22,79,99,0.15)'
            }}>
                <div style={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    letterSpacing: '1.5px',
                    opacity: 0.8
                }}>
                    INFORMASI AKADEMIK
                </div>

                <h1 style={{
                    fontSize: '30px',
                    margin: '12px 0',
                    fontWeight: 'bold'
                }}>
                    {matkul.nama}
                </h1>

                <p style={{
                    margin: 0,
                    color: '#dceef2',
                    fontSize: '14px'
                }}>
                    Detail informasi mata kuliah Program Studi {matkul.prodi}
                </p>

                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '22px',
                    flexWrap: 'wrap'
                }}>
                    <span style={{
                        background: 'rgba(255,255,255,0.18)',
                        padding: '7px 14px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 'bold'
                    }}>
                        KODE: {kode}
                    </span>

                    <span style={{
                        background: 'rgba(255,255,255,0.18)',
                        padding: '7px 14px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 'bold'
                    }}>
                        {matkul.sks} SKS
                    </span>
                </div>
            </div>

            {/* Informasi Utama */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '18px',
                marginBottom: '24px'
            }}>
                {[
                    {
                        icon: '🎓',
                        label: 'Program Studi',
                        value: matkul.prodi
                    },
                    {
                        icon: '📅',
                        label: 'Semester',
                        value: `Semester ${matkul.semester}`
                    },
                    {
                        icon: '📖',
                        label: 'Jumlah SKS',
                        value: `${matkul.sks} SKS`
                    }
                ].map((item, index) => (
                    <div key={index} style={{
                        background: 'white',
                        padding: '22px',
                        borderRadius: '14px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 3px 12px rgba(0,0,0,0.03)'
                    }}>
                        <div style={{ fontSize: '25px' }}>
                            {item.icon}
                        </div>
                        <p style={{
                            color: '#64748b',
                            fontSize: '13px',
                            margin: '12px 0 5px'
                        }}>
                            {item.label}
                        </p>
                        <strong style={{
                            color: '#164F63',
                            fontSize: '16px'
                        }}>
                            {item.value}
                        </strong>
                    </div>
                ))}
            </div>

            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '24px',
                marginBottom: '20px'
            }}>
                <h3 style={{
                    color: '#164F63',
                    marginTop: 0,
                    fontSize: '18px'
                }}>
                    👨‍🏫 Dosen Pengampu
                </h3>

                <p style={{
                    color: '#334155',
                    marginBottom: 0
                }}>
                    {matkul.dosen}
                </p>
            </div>

            <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '24px',
                marginBottom: '25px'
            }}>
                <h3 style={{
                    color: '#164F63',
                    marginTop: 0,
                    fontSize: '18px'
                }}>
                    📝 Deskripsi Mata Kuliah
                </h3>

                <p style={{
                    color: '#64748b',
                    lineHeight: '1.8',
                    marginBottom: 0
                }}>
                    {matkul.deskripsi}
                </p>
            </div>

            <div style={{ marginBottom: '35px' }}>
                <Link href="/matakuliah" style={{
                    display: 'inline-block',
                    background: '#164F63',
                    color: 'white',
                    padding: '12px 22px',
                    borderRadius: '9px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    ← Kembali ke Daftar Mata Kuliah
                </Link>
            </div>

        </div>
    );
}
