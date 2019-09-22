$(document).ready(function() {
	$('#carouselImagensHeader .carousel-item').each(function(index) {
	    $('#carouselImagensHeader .carousel-item').eq(index).css('background-image', 'url(./assets/images/topo_'+index+'.jpg)');
	});

	var listaCores = ['#945EA4', '#24B5BC', '#F59B20', '#85BD41', '#D84C7B'];
	var cardCor = 0;
	$('.accordion .card').each(function(indexCard) {
		$('.accordion .card').eq(indexCard).css('background-color', listaCores[cardCor]);
		$('#modalDetalhes_'+indexCard+' .modal-content').css('background-color', listaCores[cardCor]);
		$('#modalDetalhes_'+indexCard+' .modal-body h5').css('border-bottom', '3px solid'+listaCores[cardCor]);
		cardCor++;
		if (cardCor >= listaCores.length)
			cardCor = 0;
	})
});

$(document).on('click', '.carousel-item a', function() {
    $('html, body').animate({
        scrollTop: $("#conteudo").offset().top
    }, 1000);
});

$(document).on('click', '.accordion a', function() {
	if($(this).find('i').hasClass('fa-plus')) {
		$(this).find('i').removeClass('fa-plus');
		$(this).find('i').addClass('fa-minus');
	} else {
		$(this).find('i').removeClass('fa-minus');
		$(this).find('i').addClass('fa-plus');
	}
});