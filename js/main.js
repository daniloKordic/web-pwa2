if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/web-pwa2/sw.js').then(function(registration){
      console.log(registration);
    }, function(err) {
      console.log(err);
    })
  })
}
