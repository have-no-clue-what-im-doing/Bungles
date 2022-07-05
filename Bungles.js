window.onload=function() {
  // Month,Day,Year,Hour,Minute,Second
  upTime('jan,06,1991,14:36:07'); // ****** Change this line!
};
function upTime(countTo) {

  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  
  days=Math.floor(difference/(60*60*1000*24)*1);
  years = Math.floor(days / 365);
  realdays=Math.floor(days);
  
  if (years > 1){ days = days - (years * 365)}
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
  document.getElementById('realdays').firstChild.nodeValue = realdays;
  document.getElementById('years').firstChild.nodeValue = years;
  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;


  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}

function addCommas(intNum) {
  return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}
