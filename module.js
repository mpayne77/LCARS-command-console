let viewportWrapper = LCARS.create({type: 'wrapper', id: 'viewportWrapper', children: [
  {type: 'button', id: 'topFrameButton1', label: 'Button 1', color: 'bg-red-1'},
  {type: 'row', id: 'topFrameRow', children: [
    {type: 'elbow', id: 'topFrameElbow', label: 'Elbow 1', color: 'bg-green-1'},
    {type: 'bar', id: 'topFrameBar1', color: 'bg-orange-1'},
    {type: 'bar', id: 'topFrameBar2', color: 'bg-orange-1'},
    {type: 'bar', id: 'topFrameBar3', color: 'bg-orange-1'},  
  ]},
  {type: 'wrapper', id: 'iframeWrapper'}
  
]});

let weatherWidget = `
  <a class="weatherwidget-io" href="https://forecast7.com/en/44d99n93d36/golden-valley/?unit=us" data-label_1="GOLDEN VALLEY" data-label_2="WEATHER" data-icons="Climacons Animated" data-days="5" data-theme="dark" >GOLDEN VALLEY WEATHER</a>
  <script>
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
  </script>
`;

$(document).ready(function() {
  $('body').append((viewportWrapper).dom);
  // $('#iframeWrapper').html('<iframe style="max-width:100%;" allow="autoplay" width="800" height="400" src="https://mprnews.org/listen" frameborder="0"></iframe>')
  // $('#iframeWrapper').html('<iframe height="500" width="60%" src="https://www.iheart.com/live/twin-cities-news-talk-1213/" allow="autoplay" frameborder="0"></iframe>')
  $('#iframeWrapper').html(weatherWidget)
  $('#weatherWidget').css('height', '40vh');

  // LCARS.helper.viewportScale($('#viewportWrapper'), {width:1920, height:1080, max:true});
  // window.addEventListener("resize", function() {
  //   LCARS.helper.viewportScale($('#viewportWrapper'), {width:1920, height:1080, max:true}); 

});





