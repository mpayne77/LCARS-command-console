
let viewportWrapper = LCARS.create({type: 'wrapper', id: 'viewportWrapper', children: [
  {type: 'row', id: 'headerRow', children: [
    {type: 'elbow', id: 'headerElbow', version: 'horizontal', direction: 'top-left', color: 'bg-orange-4'},
    {type: 'bar', id: 'headerBar', color: 'bg-orange-4'},
    {type: 'title', id: 'headerTitle', text: 'COMMAND CONSOLE', color: 'bg-orange-3'},
    {type: 'cap', id: 'headerCap', version: 'round-right', color: 'bg-orange-4'}
  ]},
  {type: 'row', id: 'contentRow', children: [
    {type: 'column', id: 'buttonCol', children: [
      {type: 'button', id: 'button1', label: 'ENVIRONMENTAL', color: 'bg-orange-2'},
      {type: 'button', id: 'button2', label: 'DUTY\nROSTER', color: 'bg-blue-3'},
      {type: 'button', id: 'button3', label: 'HAILING\nFREQUENCIES', color: 'bg-blue-4'},
      {type: 'button', id: 'button4', label: 'ASTROHERPETOLOGY', color: 'bg-green-4'},
      //{type: 'button', id: 'button5', text: 'button5', color: 'bg-green-4'},
      //{type: 'button', id: 'button6', text: 'button6', color: 'bg-green-4'},
    ]},
    {type: 'wrapper', id: 'wxWrapper'},
    {type: 'column', id: 'calCol', children: [
      {type: 'title', id: 'calTitle', text: 'DUTY ROSTER', color: 'bg-orange-3', size: 'small'},
      {type: 'wrapper', id: 'calWrapper'},
    ]},
    
    

  ]},
  {type: 'row', id: 'footerRow', children: [
    {type: 'elbow', id: 'footerElbow', version: 'horizontal', direction: 'bottom-left', color: 'bg-orange-4', label: 'LCARS\nACCESS'},
    {type: 'bar', id: 'footerBar', color: 'bg-orange-4'},
    {type: 'title', id: 'footerTitle', text: 'NCC 8170-P', size: 'small', color: 'bg-orange-3'},
    {type: 'bar', id: 'footerBar2', version: 'round-right', color: 'bg-orange-4'}
  ]},

]});

let wxHTML = `<a class="weatherwidget-io" href="https://forecast7.com/en/44d99n93d36/golden-valley/?unit=us" data-label_1="GOLDEN VALLEY" data-label_2="WEATHER" data-icons="Climacons Animated" data-theme="dark" >GOLDEN VALLEY WEATHER</a>
<script>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>`

let calHTML = `<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23000000&amp;ctz=America%2FChicago&amp;src=bXBheW5lNzdAZ21haWwuY29t&amp;src=cTE2N3U2bmhvajlvZjhoMzUzc3RtdmNzaXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OTF0cTVldWpqc2g4cGhybjZjaTB0MmRkcXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Z2FsbHl3YXNAZ21haWwuY29t&amp;color=%233F51B5&amp;color=%23009688&amp;color=%234285F4&amp;color=%237CB342&amp;showTitle=0&amp;showNav=0&amp;mode=AGENDA&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=0" 
style="border-width:0" width="350" height="500" frameborder="0" scrolling="no"></iframe>`


$(document).ready(function() {

  $('body').append((viewportWrapper).dom);
  $('#calWrapper').html(calHTML);
  $('#wxWrapper').html(wxHTML);

  $('#button1').click(function(){button1click()});
  $('#button3').click(function(){button3click()});
  $('#button4').click(function(){button4click()});
  $('#footerElbow').click(function(){footerClick()});

});

function button1click() {
  window.location = 'http://192.168.1.36/LCARS-command-console/environmental/';
}

function button3click() {
  window.location = 'http://192.168.1.36/LCARS-command-console/communications/';
}

function button4click() {
  window.location = 'http://192.168.1.36/astroherpetology/';
}

function footerClick() {
  window.location = 'http://192.168.1.36/LCARS-command-console/command-console/';
}



