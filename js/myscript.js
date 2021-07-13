var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');

var menuTrigger = document.getElementById('menuTrigger');
var headerMenu = document.getElementById('headerMenu');

menuTrigger.onclick = function() {
    $('#headerMenu').slideToggle(500);
};

$('#headerMenu a').click(function() {
    if (headerMenu.style.display == 'block') {
        $('#headerMenu').slideUp(500);
    }
});


button.onclick = function() {
    modal.style.display = 'block';
    setTimeout(opacity1, 100);
};

close.onclick = function() {
    content.style.opacity = '0';
    setTimeout(none, 1000);
};

function opacity1() {
    content.style.opacity = '1';
}

function none() {
    modal.style.display = 'none';
}
