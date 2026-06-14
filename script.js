// 1. Fungsi untuk mengatur tombol "Lanjut" pindah halaman
function pindahLayer(nomorLayer) {
    const layerAktif = document.querySelector('.layer.active');
    if (layerAktif) {
        layerAktif.classList.remove('active');
    }

    const layerTujuan = document.getElementById(`layer-${nomorLayer}`);
    if (layerTujuan) {
        layerTujuan.classList.add('active');
    }
}

// 2. Fungsi untuk tombol akhir agar otomatis membuka WhatsApp kamu
function kembaliKeWA() {
    // ⚠️ SILAKAN GANTI nomor di bawah ini dengan nomor WhatsApp kamu sendiri!
    // Gunakan kode negara 62 (sebagai pengganti angka 0 di depan).
    const nomorWA = "628123456789"; 
    
    // Pesan otomatis yang akan langsung muncul di kolom chat dia
    const pesan = encodeURIComponent("Aku sudah selesai membaca semuanya...");
    
    // Perintah untuk membuka WhatsApp secara otomatis
    window.location.href = `https://wa.me/${nomorWA}?text=${pesan}`;
}