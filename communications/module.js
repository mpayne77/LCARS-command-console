
let viewportWrapper = LCARS.create({type: 'wrapper', id: 'viewportWrapper', children: [
  {type: 'row', id: 'headerRow', children: [
    {type: 'bar', id: 'headerBar', color: 'bg-orange-4'},
    {type: 'title', id: 'headerTitle', text: 'SUBSPACE COMMUNICATIONS', color: 'bg-orange-3'},
    {type: 'cap', version: 'round-right', color: 'bg-orange-4'}
  ]},
  {type: 'row', id: 'contentRow', children: [
    {type: 'column', id: 'selectionCol', children: [
      {type: 'title', id: 'selectionLabel', size: 'half', color: 'bg-orange-2', text: 'HAILING FREQUENCIES'},
      {type: 'row', id: 'chan1row', children: [
        {type: 'button', id: 'chan1cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan1title', size: 'half', text: 'AM 1130'},
        {type: 'button', id: 'chan1bar', text: 'KTLK news/talk', color: 'bg-green-3'},
      ]},
      {type: 'row', id: 'chan2row', children: [
        {type: 'button', id: 'chan2cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan2title',  size: 'half', text: 'FM 91.1'},
        {type: 'button', id: 'chan2bar',  text: 'MPR news/talk', color: 'bg-green-3'},
      ]},
      {type: 'row', id: 'chan3row', children: [
        {type: 'button', id: 'chan3cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan3title',  size: 'half', text: 'FM 99.5'},
        {type: 'button', id: 'chan3bar',  text: 'MPR Classical', color: 'bg-green-3'},
      ]},
      {type: 'row', id: 'chan4row', children: [
        {type: 'button', id: 'chan4cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan4title',  size: 'half', text: 'AM 1500'},
        {type: 'button', id: 'chan4bar',  text: 'ESPN Sports/talk', color: 'bg-green-3'},
      ]},
      {type: 'row', id: 'chan5row', children: [
        {type: 'button', id: 'chan5cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan5title',  size: 'half', text: 'AM 830'},
        {type: 'button', id: 'chan5bar',  text: 'News/talk', color: 'bg-green-3'},
      ]},
      {type: 'row', id: 'chan6row', children: [
        {type: 'button', id: 'chan6cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan6title',  size: 'half', text: 'AM 1280'},
        {type: 'button', id: 'chan6bar',  text: 'News/talk', color: 'bg-green-3'},
      ]},
      {type: 'row', id: 'chan7row', children: [
        {type: 'button', id: 'chan7cap', version: 'round-left', color: 'bg-yellow-4'},
        {type: 'title', id: 'chan7title',  size: 'half', text: 'FM 93.7'},
        {type: 'button', id: 'chan7bar',  text: 'Butt Rock', color: 'bg-green-3'},
      ]},
    ]},
    {type: 'column', id: 'contentCol', children: [
      {type: 'defaultBracket', namespace: 'sdk', id:'contentBracket', coloring: {
          elbow: 'bg-orange-5',
          column1: ['bg-orange-4', 'bg-orange-3', 'bg-orange-4'],
          column2: ['bg-purple-5', 'bg-purple-4', 'bg-purple-5'],
          column3: ['bg-purple-5', 'bg-purple-4', 'bg-purple-5'],
          column4: ['bg-orange-4', 'bg-green-2', 'bg-orange-4'],
          animated: 'bg-red-4'                                          
        },
        children: [
          {type: 'wrapper', id: 'iframeWrapper'}
        ],
      },
    ]},
  ]},
  {type: 'row', id: 'footerRow', children: [
    {type: 'elbow', id: 'footerElbow', color: 'bg-orange-4', label: 'LCARS\nACCESS'},
    {type: 'bar', id: 'footerBar', color: 'bg-orange-4'}
  ]},

  
]});



$(document).ready(function() {

  $('body').append((viewportWrapper).dom);
 
  $('#chan1bar').click(function(){chan1click()});
  $('#chan2bar').click(function(){chan2click()});
  $('#chan3bar').click(function(){chan3click()});
  $('#chan4bar').click(function(){chan4click()});
  $('#chan5bar').click(function(){chan5click()});
  $('#chan6bar').click(function(){chan6click()});
  $('#chan7bar').click(function(){chan7click()});
  $('#footerElbow').click(function(){footerClick()});

});

function chan1click() {
  const beep = document.getElementById('beep2');
  beep.play();
  
  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="https://www.iheart.com/live/twin-cities-news-talk-1213/?autoplay=true" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan1cap.set('state', 'red-dark-light');
}

function chan2click() {
  const beep = document.getElementById('beep2');
  beep.play();

  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="https://mprnews.org/listen" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan2cap.set('state', 'red-dark-light');
}

function chan3click() {
  const beep = document.getElementById('beep2');
  beep.play();

  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="https://www.classicalmpr.org/listen" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan3cap.set('state', 'red-dark-light');
}

function chan4click() {
  const beep = document.getElementById('beep2');
  beep.play();

  console.log('chan4click');
  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="https://live.1500espn.com/listen/" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan4cap.set('state', 'red-dark-light');
}

function chan5click() {
  const beep = document.getElementById('beep2');
  beep.play();

  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="https://www.audacy.com/stations/wccoradio" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan5cap.set('state', 'red-dark-light');
}

function chan6click() {
  const beep = document.getElementById('beep2');
  beep.play();

  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="http://player.listenlive.co/57041/en" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan6cap.set('state', 'red-dark-light');
}

function chan7click() {
  const beep = document.getElementById('beep2');
  beep.play();
  
  $('#iframeWrapper').html('<iframe style="max-width:100%;" width="100%" height="100%" allow="autoplay" src="https://www.iheart.com/live/93x-5348/" frameborder="0"></iframe>');
  disableStates();
  LCARS.active.chan7cap.set('state', 'red-dark-light');
}

function disableStates () {
  console.log('here');
  LCARS.active.chan1cap.set('state', null);
  LCARS.active.chan2cap.set('state', null);
  LCARS.active.chan3cap.set('state', null);
  LCARS.active.chan4cap.set('state', null);
  LCARS.active.chan5cap.set('state', null);
  LCARS.active.chan6cap.set('state', null);
  LCARS.active.chan7cap.set('state', null);
}
function footerClick () {
  window.location = 'http://192.168.1.36/LCARS-command-console/command-console/';
}


