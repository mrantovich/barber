const burger = document.querySelector('.burger');
burger.addEventListener('click', addActive);
const headerBox = document.querySelector('.header__box');

const wholeHTML = document.querySelector('html');
const wholeBody = document.querySelector('body');


function addActive() {
	this.classList.toggle('_active');
	headerBox.classList.toggle('_active');
	wholeHTML.classList.toggle('_lock');
	wholeBody.classList.toggle('_lock');
};

function removeActive() {
	burger.classList.remove('_active');
	headerBox.classList.remove('_active');
	wholeHTML.classList.remove('_lock');
	wholeBody.classList.remove('_lock');
}

const navBarLinkHistory = document.querySelector('.menu__link-history');
navBarLinkHistory.addEventListener('click', doScrollHistory);
const historyArea = document.getElementById('history');

const navBarLinkService = document.querySelector('.menu__link-service');
navBarLinkService.addEventListener('click', doScrollService);
const serviceArea = document.getElementById('service');

const navBarLinkGallery = document.querySelector('.menu__link-gallery');
navBarLinkGallery.addEventListener('click', doScrollGallery);
const galleryArea = document.getElementById('gallery');

function doScrollHistory() {
	removeActive();
	historyArea.scrollIntoView({
		behavior: 'smooth',
	});
};

function doScrollService() {
	removeActive();
	serviceArea.scrollIntoView({
		behavior: 'smooth',
	});
};

function doScrollGallery() {
	removeActive();
	galleryArea.scrollIntoView({
		behavior: 'smooth',
	});
};
