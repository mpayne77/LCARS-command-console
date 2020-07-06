
let viewportWrapper = LCARS.create({type: 'wrapper', id: 'viewportWrapper', children: [
  {type: 'row', id: 'headerRow', children: [
    {type: 'elbow', id: 'headerElbow', version: 'horizontal', direction: 'top-left', color: 'bg-orange-4'},
    {type: 'bar', id: 'headerBar', color: 'bg-orange-4'},
    {type: 'title', id: 'headerTitle', text: 'ENVIRONMENTAL', color: 'bg-orange-3'},
    {type: 'cap', id: 'headerCap', version: 'round-right', color: 'bg-orange-4'}
  ]},
  {type: 'row', id: 'contentRow', children: [
    {type: 'column', id: 'buttonCol', children: [
      {type: 'button', id: 'button1', label: 'FORECAST', color: 'bg-orange-2'},
      {type: 'button', id: 'button2', label: 'RADAR', color: 'bg-blue-3'},
      {type: 'button', id: 'button3', label: 'AVIATION', color: 'bg-blue-4'},
      {type: 'button', id: 'button4', label: 'HOME', color: 'bg-green-4'},

    ]},
    {type: 'wrapper', id: 'contentWrapper'},
    // {type: 'column', id: 'calCol', children: [
    //   {type: 'title', id: 'calTitle', text: 'DUTY ROSTER', color: 'bg-orange-3', size: 'small'},
    //   {type: 'wrapper', id: 'calWrapper'},
    // ]},
    
    

  ]},
  {type: 'row', id: 'footerRow', children: [
    {type: 'elbow', id: 'footerElbow', version: 'horizontal', direction: 'bottom-left', color: 'bg-orange-4'},
    {type: 'bar', id: 'footerBar', color: 'bg-orange-4'},
    {type: 'title', id: 'footerTitle', text: 'NCC 8170-P', size: 'small', color: 'bg-orange-3'},
    {type: 'bar', id: 'footerBar2', version: 'round-right', color: 'bg-orange-4'}
  ]},

]});

// let forecastHTML = `<div id="cont_c38ad94fd99bff2e3ed8be3df3318271"><script type="text/javascript" async src="https://www.theweather.com/wid_loader/c38ad94fd99bff2e3ed8be3df3318271"></script></div>`

let forecastHTML = `<iframe src="https://www.meteoblue.com/en/weather/widget/three/golden-valley_united-states-of-america_5028163?geoloc=fixed&nocurrent=0&noforecast=0&days=7&tempunit=FAHRENHEIT&windunit=KNOT&layout=dark"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 805px; height: 525px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/week/golden-valley_united-states-of-america_5028163?utm_source=weather_widget&utm_medium=linkus&utm_content=three&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>`

let radarHTML = `<iframe width="790" height="515" src="https://embed.windy.com/embed2.html?lat=44.801&lon=-93.246&detailLat=44.530&detailLon=-93.005&width=730&height=500&zoom=7&level=surface&overlay=radar&product=radar&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>`


$(document).ready(function() {

  $('body').append((viewportWrapper).dom);
  // $('#calWrapper').html(calHTML)
  // $('#wxWrapper').html(wxHTML)

  $('#button1').click(function(){button1click()});
  $('#button2').click(function(){button2click()});
  $('#button3').click(function(){button3click()});
  $('#button4').click(function(){button4click()});

  button1click();

});

function eraseContent() {
  LCARS.delete('contentWrapper');
  LCARS.active.contentRow.set('children', [{type: 'wrapper', id: 'contentWrapper'}]);
  LCARS.active.button1.set('state', null);
  LCARS.active.button2.set('state', null);
  LCARS.active.button3.set('state', null);
  LCARS.active.button4.set('state', null);

}

function button1click() {
  eraseContent();
  const beep = document.getElementById('beep2');
  beep.play();
  LCARS.active.button1.set('state', 'red-dark-light');
  LCARS.active.contentWrapper.set('children', forecastHTML);
}

function button2click() {
  eraseContent();
  const beep = document.getElementById('beep2');
  beep.play();
  LCARS.active.button2.set('state', 'red-dark-light');
  LCARS.active.contentWrapper.set('children', radarHTML);
}

function button3click() {
  eraseContent();
  const beep = document.getElementById('beep2');
  beep.play();
}

function button4click() {
  const beep = document.getElementById('beep2');
  beep.play();
  window.location = 'http://192.168.1.36/LCARS-command-console/command-console/';
}




