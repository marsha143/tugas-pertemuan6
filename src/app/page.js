import KartuProdi from "@/components/KartuProdi";
import PengumumanKampus from "@/components/PengumumanKampus";

export default function ProgramStudi() {
  const daftarProdi = [
    {
      id: 1,
      namaProdi: 'Rekayasa Perangkat Lunak',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Frontend Developer, Software Tester, UI Engineer'
    },
    {
      id: 2,
      namaProdi: 'Teknologi Rekayasa Otomasi',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Automation Technician, IoT Developer, Robotics Operator'
    },
    {
      id: 3,
      namaProdi: 'Manajemen Bisnis Digital',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Digital Strategist, E-commerce Specialist, Business Analyst'
    }
  ];

  const daftarPengumuman = [
    {
      id: 1,
      judul: 'Jadwal Ujian Tengah Semester telah diterbitkan',
      tanggal: '12 November 2026',
      kategori: 'Penting',
      ringkasan: 'Periksa jadwal dan ruang ujian melalui portal akademik sebelum hari pelaksanaan.'
    },
    {
      id: 2,
      judul: 'Pengisian KRS semester genap dibuka',
      tanggal: '18 November 2026',
      kategori: 'Akademik',
      ringkasan: 'Berkonsultasilah dengan dosen wali sebelum mengunci rencana studi.'
    },
    {
      id: 3,
      judul: 'Pendaftaran Pekan Kreativitas Mahasiswa',
      tanggal: '22 November 2026',
      kategori: 'Kemahasiswaan',
      ringkasan: 'Bentuk tim dan kirim ide kegiatan melalui sekretariat kemahasiswaan.'
    }
  ];

  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 20px' }}>
      <section style={{
        background: 'linear-gradient(120deg, #164e63)',
        color: 'white',
        padding: '38px',
        borderRadius: '20px',
        marginBottom: '36px'
      }}>
        <p style={{ margin: '0 0 10px', color: '#99f6e4', fontWeight: 700, letterSpacing: '1px' }}>
          PORTAL AKADEMIK POLITEKNIK TAKUMI
        </p>
        <h1 style={{ margin: '0 0 12px', fontSize: '32px' }}>
          Temukan Jalur Belajarmu
        </h1>
        <p style={{ margin: 0, maxWidth: '620px', lineHeight: 1.7, color: '#ecfeff' }}>
          Program terapan, pengalaman kampus, dan informasi akademik dalam satu tempat.
        </p>
      </section>

      <section aria-labelledby="prodi-title" style={{ marginBottom: '40px' }}>
        <h2 id="prodi-title" style={{ color: '#0f172a', marginBottom: '16px' }}>
          Pilihan Program Studi
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '18px'
        }}>
          {daftarProdi.map((item) => (
            <KartuProdi
              key={item.id}
              namaProdi={item.namaProdi}
              jenjang={item.jenjang}
              akreditasi={item.akreditasi}
              prospekKarir={item.prospekKarir}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="pengumuman-title" style={{
        backgroundColor: '#f8fafc',
        border: '1px solid #dbe4e8',
        borderRadius: '20px',
        padding: '24px'
      }}>
        <p style={{ margin: '0 0 6px', color: '#164F63', fontWeight: 700, fontSize: '13px', letterSpacing: '1px' }}>
          INFO TERBARU
        </p>
        <h2 id="pengumuman-title" style={{ margin: '0 0 16px', color: '#0f172a' }}>
          Pengumuman Kampus
        </h2>
        <div style={{ display: 'grid', gap: '12px' }}>
          {daftarPengumuman.map((item) => (
            <PengumumanKampus
              key={item.id}
              judul={item.judul}
              tanggal={item.tanggal}
              kategori={item.kategori}
              ringkasan={item.ringkasan}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
