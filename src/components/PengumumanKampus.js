const warnaKategori = {
  Penting: { background: '#fee2e2', color: '#b91c1c' },
  Akademik: { background: '#dbeafe', color: '#1d4ed8' },
  Kemahasiswaan: { background: '#fef3c7', color: '#a16207' }
};

export default function PengumumanKampus({ judul, tanggal, kategori, ringkasan }) {
  return (
    <article style={{
      backgroundColor: 'white',
      border: '1px solid #e2e8f0',
      borderLeft: '4px solid #164F63',
      borderRadius: '12px',
      padding: '16px 18px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <time style={{ color: '#64748b', fontSize: '13px' }}>{tanggal}</time>
        <span style={{
          ...warnaKategori[kategori],
          padding: '5px 10px',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 700
        }}>
          {kategori}
        </span>
      </div>
      <h3 style={{ margin: '10px 0 6px', color: '#0f172a', fontSize: '17px' }}>
        {judul}
      </h3>
      <p style={{ margin: 0, color: '#475569', lineHeight: 1.6, fontSize: '14px' }}>
        {ringkasan}
      </p>
    </article>
  );
}
