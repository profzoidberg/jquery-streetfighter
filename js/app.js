$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu div').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu div').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu div').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu div').hide();
		$('.ryu-ready').show();
	})
	$(document).keydown(function(e){
		if (e.keyCode === 88) {
			$('.ryu div').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e){
		if (e.keyCode === 88) {
			$('.ryu div').hide();
			$('.ryu-still').show();
		}
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}