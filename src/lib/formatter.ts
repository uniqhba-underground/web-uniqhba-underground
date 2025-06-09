export function formatDateID(dateStr: string): string {
  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const bulan = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const date = new Date(dateStr);
  const namaHari = hari[date.getDay()];
  const tanggal = date.getDate();
  const namaBulan = bulan[date.getMonth()];
  const tahun = date.getFullYear();

  return `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;
}