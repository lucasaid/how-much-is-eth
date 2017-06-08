
function checkSomeSweetEth() {
  $.ajax( "https://coinmarketcap-nexuist.rhcloud.com/api/eth" )
  .done(function(data) {
    var total = data.price.aud;
    $(".totesTotal").text('$' + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
  });

  $.ajax( "https://api.giphy.com/v1/gifs/random?tag=money&rating=pg-13&api_key=dc6zaTOxFJmzC" )
  .done(function(data) {
    $(".totesEth").css('backgroundImage',"url('"+data.data.image_url+"')")
  });

}
$(document).ready(function () {
  checkSomeSweetEth();
  var timer = setInterval(checkSomeSweetEth(), 300000)
});
