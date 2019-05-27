
var elem = document.querySelector('.main-carousel');

var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  fullscreen: true,
  hash: true,
  on: {
    ready: function() {
      console.log('Flickity ready');
    }
  }
});


var restartButton = document.querySelector('.restartButton');

restartButton.addEventListener( 'click', function() {
  flkty.select( 0 );
});

var progressBar = document.querySelector('.progress-bar');

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});