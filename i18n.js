// UI-only translations. Stored transaction categories and people retain their Indonesian keys.
const RUANGKAS_EN = {
  "Catatan arus uang suami istri yang tenang dan jelas.": "A clear, calm view of your family's money.",
  "Aku siap bantu.": "I'm here to help.",
  "Keuangan keluarga bulan ini": "Family finances this month",
  "Keuangan keluarga semua bulan": "Family finances, all months",
  "Semua": "All", "Saldo tersisa": "Remaining balance", "Pemasukan": "Income",
  "Pengeluaran": "Expenses", "Sedekah": "Charity", "Saran keuangan": "Money tips",
  "Terpakai dari total target": "Used from total budget", "PERLU DICEK": "NEEDS ATTENTION",
  "Ringkasan pengeluaran": "Expense overview", "Lihat laporan": "View report",
  "pengeluaran": "expenses", "Transaksi terbaru": "Recent transactions", "Lihat semua": "View all",
  "Tambah transaksi": "Add transaction", "Menghubungkan Supabase...": "Connecting to Supabase...",
  "Nama transaksi": "Transaction name", "Nominal": "Amount", "Dicatat oleh": "Recorded by",
  "Suami": "Husband", "Istri": "Wife", "Bersama": "Together", "Kategori": "Category",
  "Tanggal": "Date", "Catatan": "Notes", "Simpan": "Save", "Bersihkan": "Clear",
  "Ekspor CSV": "Export CSV", "Kontribusi suami": "Husband's contribution",
  "Kontribusi istri": "Wife's contribution", "Kategori terbesar": "Top category",
  "Target per kategori": "Budget by category", "Analisis pengeluaran": "Expense analysis",
  "Grafik pengeluaran": "Expense chart", "Pilih kategori": "Select a category",
  "Klik kategori untuk lihat detail.": "Tap a category for details.",
  "Filter per kategori pengeluaran": "Filter expense categories",
  "Komposisi pengeluaran": "Expense breakdown", "Riwayat transaksi": "Transaction history",
  "Dashboard": "Home", "Beranda": "Home", "Laporan": "Reports", "Profil": "Profile",
  "Akun RuangKas": "RuangKas account", "Ruang keuangan keluarga": "Family finance space",
  "Ruang keluarga": "Family space", "Catatan bersama suami dan istri": "Shared records for husband and wife",
  "Penyimpanan data": "Data storage", "Status koneksi saat ini": "Current connection status",
  "Memeriksa...": "Checking...", "Lokal": "Local", "Pengaturan": "Settings", "Bahasa": "Language",
  "Pilih bahasa aplikasi": "Choose app language", "Privasi nominal": "Amount privacy",
  "Sembunyikan angka di seluruh aplikasi": "Hide figures throughout the app",
  "Tampilkan": "Show", "Sembunyikan": "Hide", "Sembunyikan saldo": "Hide amounts",
  "Tampilkan saldo": "Show amounts", "Buka saran keuangan": "Open money tips",
  "Jenis transaksi": "Transaction type", "Filter transaksi": "Transaction filters",
  "Insight singkat": "Quick insights",
  "Ringkasan keluarga": "Family overview", "Ringkasan laporan": "Report preview",
  "Navigasi utama mobile": "Mobile navigation", "Hapus transaksi": "Delete transaction",
  "Tabungan": "Savings", "tabungan": "savings", "Belum ada data": "No data yet",
  "Total kategori": "Category total", "Porsi pengeluaran": "Share of expenses",
  "Jumlah transaksi": "Transactions", "Rata-rata": "Average",
  "Tanpa target": "No budget", "belum ada target": "no budget yet",
  "Gaji": "Salary", "Usaha": "Business", "Bonus": "Bonus", "Investasi": "Investment",
  "Hadiah": "Gifts", "Makan & Minum": "Food & Drinks", "Rumah Tangga": "Household",
  "Transportasi": "Transport", "Kendaraan Mobil": "Car", "Kendaraan Honda": "Motorbike",
  "Tagihan & Internet": "Bills & Internet", "Cicilan": "Installments", "Orang Tua": "Parents",
  "Anak": "Children", "Kesehatan": "Health", "Hiburan": "Entertainment",
  "Pakaian": "Clothing", "Lainnya": "Other",
  "Contoh: Gaji, usaha, sedekah Jumat": "Example: salary, business, Friday charity",
  "Opsional": "Optional", "Target": "Budget", "Menyimpan...": "Saving...",
  "Januari": "January", "Februari": "February", "Maret": "March", "April": "April",
  "Mei": "May", "Juni": "June", "Juli": "July", "Agustus": "August",
  "September": "September", "Oktober": "October", "November": "November", "Desember": "December",
  "Tersimpan di Supabase": "Saved to Supabase", "Tersimpan lokal sementara": "Saved locally for now",
  "Mode lokal: cek tabel atau RLS Supabase": "Local mode: check Supabase table or RLS",
  "Gagal simpan: cek policy Supabase": "Save failed: check Supabase policy",
  "Gagal hapus: cek policy Supabase": "Delete failed: check Supabase policy",
  "Klik untuk lihat detailnya.": "Tap to see details.",
  "Belum ada pengeluaran bulan ini.": "No expenses this month yet.",
  "Belum ada transaksi bulan ini.": "No transactions this month yet.",
  "Belum ada transaksi untuk filter ini.": "No transactions match this filter.",
  "Belum ada pengeluaran yang tercatat.": "No expenses recorded yet.",
  "Belum ada transaksi di kategori ini.": "No transactions in this category yet.",
  "Isi target per kategori di bawah": "Set category budgets below",
  "Isi target tiap kategori untuk mulai memantau": "Set a budget for each category to start tracking",
  "Ada yang perlu dibenahi.": "Let's fix something.",
  "Yuk, cek batas aman.": "Check your safe limit.",
  "Hebat, tabungan aman!": "Great, savings are on track!",
  "Catat pemasukan dan pengeluaran pertama agar Kasi bisa memberi saran yang sesuai.": "Record your first income and expense so Kasi can give useful tips.",
  "Arus kas masih aman. Buat target kategori agar batas belanja bisa dipantau otomatis.": "Cash flow is healthy. Set category budgets to track spending limits.",
  "Semua target aman. Pertahankan pengeluaran harian dan tabungan": "All budgets are on track. Keep daily spending steady and savings at",
  "bulan ini.": "this month.", "per hari.": "per day.", "dari total": "of total",
  "transaksi": "transactions", "target": "budget", "dari": "of"
};

const RUANGKAS_PATTERNS = [
  [/^Keuangan keluarga (.+)$/u, "Family finances: $1"],
  [/^Kurangi (.+) minimal (.+) agar kembali sesuai target\.$/u, "Reduce $1 by at least $2 to return to budget."],
  [/^Batas aman (.+) sampai akhir bulan sekitar (.+) per hari\.$/u, "Safe daily limit for $1 until month end: about $2."],
  [/^Tahan pengeluaran berikutnya\. Arus kas perlu dikurangi (.+) agar kembali seimbang\.$/u, "Pause new spending. Reduce expenses by $1 to balance cash flow."],
  [/^Sisihkan lagi (.+) untuk mencapai tabungan 20% bulan ini\.$/u, "Set aside another $1 to reach 20% savings this month."],
  [/^(.+) mengambil (\d+)% pengeluaran\. Periksa transaksi terbesarnya sebelum belanja lagi\.$/u, "$1 accounts for $2% of spending. Review its largest transactions before spending again."],
  [/^Semua target aman\. Pertahankan pengeluaran harian dan tabungan (\d+)% bulan ini\.$/u, "All budgets are on track. Keep daily spending steady and savings at $1% this month."],
  [/^(\d+) transaksi$/u, "$1 transactions"],
  [/^(.+) dari target (.+)$/u, "$1 of budget $2"],
  [/^dari (.+)$/u, "of $1"],
  [/^(\d+)% dari total$/u, "$1% of total"],
  [/^target (.+)$/u, "budget $1"]
];

const ruangKasTextCache = new WeakMap();
const ruangKasAttrCache = new WeakMap();

function translateRuangKasText(source, lang) {
  if (lang !== "en") return source;
  if (RUANGKAS_EN[source]) return RUANGKAS_EN[source];
  for (const [pattern, replacement] of RUANGKAS_PATTERNS) {
    if (pattern.test(source)) {
      let translated = source.replace(pattern, replacement);
      for (const category of [...Object.keys(RUANGKAS_EN)].sort((a, b) => b.length - a.length)) {
        if (!/^[A-ZÀ-Ž]/u.test(category) || !translated.includes(category)) continue;
        const escaped = category.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        translated = translated.replace(new RegExp(`(?<!\\p{L})${escaped}(?!\\p{L})`, "gu"), RUANGKAS_EN[category]);
      }
      return translated;
    }
  }
  return source;
}

function localizeRuangKas(root, lang) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script,style,.item-main strong,.drill-item-left strong,.home-latest-copy strong,.item-main span,.drill-item-left span,.home-latest-copy span")) continue;
    const current = node.nodeValue;
    const cached = ruangKasTextCache.get(node);
    const original = cached && current === cached.last ? cached.original : current;
    const leading = original.match(/^\s*/u)[0];
    const trailing = original.match(/\s*$/u)[0];
    const source = original.trim();
    const output = source ? leading + translateRuangKasText(source, lang) + trailing : original;
    if (current !== output) node.nodeValue = output;
    ruangKasTextCache.set(node, { original, last: output });
  }
  for (const element of root.querySelectorAll("[placeholder],[aria-label],[title]")) {
    let stored = ruangKasAttrCache.get(element) || {};
    for (const attribute of ["placeholder", "aria-label", "title"]) {
      if (!element.hasAttribute(attribute)) continue;
      const current = element.getAttribute(attribute);
      const previous = stored[attribute];
      const original = previous && current === previous.last ? previous.original : current;
      const output = translateRuangKasText(original, lang);
      if (current !== output) element.setAttribute(attribute, output);
      stored[attribute] = { original, last: output };
    }
    ruangKasAttrCache.set(element, stored);
  }
}
