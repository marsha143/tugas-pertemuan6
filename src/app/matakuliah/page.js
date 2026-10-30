
import Link from 'next/link';
import { databaseMatakuliah } from '@/data/matakuliah';

export default function DaftarMatakuliah() {
    return (
        <main style={{
            maxWidth: '1100px',
            margin: '40px auto',
            padding: '0 24px'
        }}>
            <div style={{ marginBottom: '28px' }}>
                <span style={{
                    color: '#24768a',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    letterSpacing: '1px'
                }}>
                    AKADEMIK / MATA KULIAH
                </span>

                <h1 style={{
                    fontSize: '30px',
                    color: '#164F63',
                    margin: '10px 0'
                }}>
                    Daftar Mata Kuliah
                </h1>

                <p style={{ color: '#64748b', margin: 0 }}>
                    Pilih mata kuliah untuk melihat informasi lengkapnya.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '18px'
            }}>
                {Object.entries(databaseMatakuliah).map(([kode, matkul]) => (
                    <article key={kode} style={{
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        padding: '22px',
                        borderRadius: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        boxShadow: '0 3px 10px rgba(0,0,0,0.04)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span style={{ fontSize: '30px' }}>
                                📚
                            </span>

                            <span style={{
                                background: '#e0f2f1',
                                color: '#164F63',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: 'bold'
                            }}>
                                {kode}
                            </span>
                        </div>

                        <div>
                            <h3 style={{
                                color: '#164F63',
                                fontSize: '19px',
                                margin: '0 0 10px'
                            }}>
                                {matkul.nama}
                            </h3>

                            <p style={{
                                color: '#64748b',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                margin: 0
                            }}>
                                {matkul.deskripsi}
                            </p>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap'
                        }}>
                            <span style={{
                                background: '#f1f5f9',
                                color: '#475569',
                                padding: '6px 10px',
                                borderRadius: '6px',
                                fontSize: '12px'
                            }}>
                                {matkul.sks} SKS
                            </span>

                            <span style={{
                                background: '#f1f5f9',
                                color: '#475569',
                                padding: '6px 10px',
                                borderRadius: '6px',
                                fontSize: '12px'
                            }}>
                                Semester {matkul.semester}
                            </span>
                        </div>

                        <Link href={`/matakuliah/${kode}`} style={{
                            background: '#164F63',
                            color: 'white',
                            textDecoration: 'none',
                            textAlign: 'center',
                            padding: '11px',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            marginTop: 'auto'
                        }}>
                            Lihat Detail →
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
