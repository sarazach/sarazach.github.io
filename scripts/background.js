function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:
preload([
    'images/unc1.jpg',
    'images/unc2.jpg',
    'images/unc3.jpg',
    'images/unc4.jpg',
    'images/unc5.jpg',
    'images/unc6.jpg'
]);
/*
  Cycle through a series of background images
*/
function cycle(){
  
  var images = [
    'images/unc1.jpg',
    'images/unc2.jpg',
    'images/unc3.jpg',
    'images/unc4.jpg',
    'images/unc5.jpg',
    'images/unc6.jpg'
]);
  ];
  var i = 0;
  
  setInterval(function(){
      $('.bgImageContainer').css('background-image', function() {
          if (i >= images.length) {
              i=0;
          }
          return 'url(' + images[i++] + ')'; 
      });
  }, 6000);

}
cycle();


var timerId = countdown(new Date(2015, 2, 22, 17),
    function(ts){
      $('.countdown-timer').html($.parseHTML(ts.toHTML("strong")));  
    },
    countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);