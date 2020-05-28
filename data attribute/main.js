$(document).ready(function(){

  $("div").data("greeting", 5);
  $("div").attr("greeting", 3);

  var pory = $("div").data('greeting');
  var jax = $("div").attr('greeting');

  console.log(pory);
  console.log(jax);

  $('div').click(
    function(){
      // alert(pory+2);
      // alert(jax+2);
      $('div').html(pory+2);
    }
  );

});
