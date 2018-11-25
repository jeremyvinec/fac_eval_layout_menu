let nav = document.getElementById('hamburger'),
    body = document.getElementById('nav');

nav.addEventListener('click', function(e){
    body.className = body.className? '' : 'display';
    e.preventDefault();
});