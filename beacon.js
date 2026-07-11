// WF Analytics Beacon — privacy-first, no cookies, <1KB
(function(){
  var e = 'https://gfe-analytics.rorycooney.workers.dev/beacon?site=wf';
  var d = document.referrer || 'direct';
  var p = location.pathname || '/';
  fetch(e, { method: 'POST', body: JSON.stringify({ page: p, referrer: d }), headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(function(){});
})();
