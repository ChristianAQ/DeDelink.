//$(function(){alert("ok");});

var nav=document.getElementById('nav');
var menu=document.getElementById('enlaces');
var abrir=document.getElementById('open');
var botones=document.getElementsByClassName('btn-header');
let cerrado=true;

function navbar(){
    var desplazamientoActual=window.pageYOffset;
    if(desplazamientoActual<=300){
        nav.classList.remove('nav2');
        nav.className=('nav1');
        nav.style.transition='0.5s';
        menu.style.top = '80px';
        abrir.style.color='#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className=('nav2');
        nav.style.transition='0.5s';
        menu.style.top = '50px';
        abrir.style.color='#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width="70vw";
        cerrado=false;
    }else{
        menu.style.width="0%";
        menu.style.overflow='hidden';
        cerrado=true;
    }
}

window.addEventListener('load',function(){
    navbar();
});
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    navbar();
});

window.addEventListener('resize',function(){
    if(screen.width>=700){
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click',function(){
    apertura();
});

