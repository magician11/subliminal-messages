function generateRandomValue(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

setInterval(function() {
  var message = $('<p class="lead subliminal"></p>').text(
    messages[generateRandomValue(messages.length)]
  );
  $('body').append(message);
  message.css({
    top: generateRandomValue($(window).height() - message.height()),
    left: generateRandomValue($(window).width() - message.width())
  });

  setTimeout(function() {
    message.remove();
  }, 1 / 60);
}, 3000);
