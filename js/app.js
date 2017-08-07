var parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

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

	var params = parseQueryString();

  if(params['send']){
    $('#modalMail').modal();
  }

});
