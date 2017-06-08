var lastPrice = 0;
var updown = true;
function checkSomeSweetEth() {
  $.ajax( "https://coinmarketcap-nexuist.rhcloud.com/api/eth" )
  .done(function(data) {
    var total = data.price.aud;
    if(lastPrice < parseFloat(total, 10)) {
      updown = true;
    } else {
      updown = false;
    }
    lastPrice = parseFloat(total, 10)
    $(".totesTotal").text('$' + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    if(updown){
      $(".totesTotal").css('color',"#82ff6e")
    } else {
      $(".totesTotal").css('color',"#ff9999")
    }

    var randTag = Math.floor((Math.random() * 4));
    var tagsGood = ["money","swag","rich","lambo"];
    var tagsBad = ["cry","sad","poor","homeless"];
    var tag = updown ? tagsGood[randTag] : tagsBad[randTag];
    $.ajax( "https://api.giphy.com/v1/gifs/random?tag="+tag+"&rating=pg-13&api_key=dc6zaTOxFJmzC" )
    .done(function(data) {
      $(".totesEth").css('backgroundImage',"url('"+data.data.image_url+"')")
    });
  });
}
$(document).ready(function () {
  checkSomeSweetEth();
  var timer = setInterval(function() { checkSomeSweetEth() }, 300000)
});
