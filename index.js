setInterval(function() {
  var message = $('<h3 class="subliminal"></h3>').text(
    messages[Math.floor(Math.random() * messages.length)]
  );
  $('body').append(message);
  setTimeout(function() {
    message.remove();
  }, 1 / 60);
}, 3000);
