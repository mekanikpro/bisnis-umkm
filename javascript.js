// Fungsi untuk menampilkan pesan setelah form dikirim
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih telah menghubungi kami!');
});
