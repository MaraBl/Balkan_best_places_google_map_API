
//mustache

var templateListItem = document.getElementById('template-list-item').innerHTML;
Mustache.parse(templateListItem);

var listItems='';

for(var i = 0; i < carouselData.length; i++){
  listItems += Mustache.render(templateListItem, carouselData[i]);
}

var results = document.getElementById('results');

results.insertAdjacentHTML('beforeend', listItems);


//fickity

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

//google maps

window.initMap = function() {
  var marker = [];
  
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 5, center: carouselData[0].coords});
  
  for(var i = 0; i < carouselData.length; i++){
    marker.push(new google.maps.Marker({
    position: carouselData[i].coords,
    map: map,
    id: i
    }));    
    marker[i].addListener('click', function(){
      flkty.select(this.id);
    });
  }
  flkty.on( 'change', function( index ) {
    map.panTo(carouselData[index].coords);
    map.setZoom(9);
  });
}