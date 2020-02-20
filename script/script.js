$(document).ready(function(){ 
	var sliderWidth = $('#slider ul li').width();
	var sliderCount = $('#slider ul li').length;
	var sliderTotal = sliderWidth * sliderCount;

	var sliderHeight = $('#slider ul li').height();

	$('#slider ul').css({width : sliderTotal, marginLeft : - sliderWidth});
	$('#slider').css({width : sliderWidth , height:sliderHeight});

	$('.prev').click(function(){
		$('#slider ul').animate({left : + sliderWidth}, 500, function(){$('#slider ul li:last-child').prependTo('#slider ul');
		$('#slider ul').css('left', '');
		 });
	});

	$('.next').click(function(){
		$('#slider ul').animate({left : - sliderWidth}, 500, function(){$('#slider ul li:first-child').appendTo('#slider ul');
		$('#slider ul').css('left', '');
		 }); 
	});

});