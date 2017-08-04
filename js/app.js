$(function() {
	words = ['incrementar', 'organizar', 'analizar'];
	wp = 0;

	var explode = function(){
  		if (wp == 3){
  			wp = 0;
  		}
  		$('#word').text(words[wp]);
  		wp++;
		setTimeout(explode,3000);
	};
	setTimeout(explode, 3000);


});


