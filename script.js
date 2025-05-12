// Basit bir örnek: Tarif gönderme formunu kontrol et
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#tarifForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Tarifiniz başarıyla gönderildi! Teşekkürler.');
            form.reset();
        });
    }
});
