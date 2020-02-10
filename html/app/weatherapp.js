$(() => {
  const $title = $('#title')
  $title.delay(4000).slideUp(800)

  const $weatherModal = $('#weather-modal')
  const showWeatherModal = () => {
    $weatherModal.css('display', 'block')
  }

  const $doItButton = $('#do-it-button')
  const showButton = () => {
    $doItButton.css('display', 'block')
  }

  setTimeout(showWeatherModal, 7000);
  setTimeout(showButton, 10000);

  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=38.9072&lon=-77.0369&appid=9720f14bcedd739f2389c4b2d742b802&units=imperial',
    type: "Get"
  }).then(
    (data) => {
      $div = $('<div>').html(data.weather[0].description)
      $div.appendTo('#currently')

      $div = $('<div>').html(data.main.temp).addClass('.temp')
      $div.appendTo('#currently')
    },
    () => {
      console.log('no data');
    }
  )

})
