document.querySelector('.logooo').addEventListener("transitionend", korak1);
document.querySelector('.video1').addEventListener("transitionend", korak2);
document.querySelector('.vs').addEventListener("transitionend", korak3);
document.querySelector('.black').addEventListener("transitionend", korak20);
document.querySelector('.slika1').addEventListener("transitionend", korak30);
document.querySelector('.black1').addEventListener("transitionend", korak40);
document.querySelector('.slika2').addEventListener("transitionend", korak50);
document.querySelector('.black2').addEventListener("transitionend", korak60);

function korak0 () {
	var x=document.querySelector('.logooo').classList.add('width99')
}

function korak1 () {
	document.querySelector('.video1').classList.add('flex')
	document.querySelector('.video1').classList.add('dispFlex')
}

function korak2() {
	document.querySelector('.vs').classList.add('top30')
}

function korak3() {
	document.querySelector('video').play();
}

function korak10 () {
	document.querySelector('.video1').classList.add('none');
	document.querySelector('.logooo').classList.add('none');
	document.querySelector('.black').classList.add('width0');
}

function korak20() {
	document.querySelector('.back h2').classList.add('flex') 
	document.querySelector('.back h2').classList.add('bounce') 
	document.querySelector('.slika1').classList.add('slwidt1')
}

function korak30() {
	document.querySelector('.black1').classList.add('width0')
}

function korak40() {
	document.querySelector('.slika2').classList.add('width33')
}

function korak50() {
	document.querySelector('.black2').classList.add('width0')
}

function korak60() {
	document.querySelector('.back').classList.add('width100')
}
