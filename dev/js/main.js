$(document).ready(function() {
	$('.gallery__slider-inner').slick({
		dots: true,
	});
	$('.calendar__item-top').click(function(event) {
		$(this).parents('.calendar__list-item').toggleClass('active');
		google.maps.event.trigger(map2, 'resize');
		google.maps.event.trigger(map3, 'resize');
		google.maps.event.trigger(map4, 'resize');
		google.maps.event.trigger(map5, 'resize');
	});
});