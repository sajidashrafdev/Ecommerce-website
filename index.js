const BuyNowBtns = document.getElementsByClassName('hero-btn');
for (let i = 0; i < BuyNowBtns.length; i++) {
    BuyNowBtns[i].addEventListener('click', function() {
        window.location.href = 'form-page.html';
    });
}
