$(() => {
  const $title = $('#title')
  $title.delay(4000).slideUp(1000)
  const $weatherModal = $('#weather-modal')
  const showWeatherModal = () => {
    $weatherModal.css('display', 'block')
  }
  setTimeout(showWeatherModal, 8000);

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?lat=38.9072&lon=-77.0369&appid=9720f14bcedd739f2389c4b2d742b802&units=imperial',
    type: "Get"
  }).then(
    (data) => {
      $div = $('<div>').html(data.weather[0].description)
      $div.appendTo('#currently')
      $div = $('<div>').html(data.main.temp)
      $div.appendTo('#currently')
      $div = $('<div>').html(data.main.feels_like)
      $div.appendTo('#currently')
    },
    () => {
      console.log('no data');
    }
  )








    // url:'https://api.darksky.net/forecast/00dded78a3eaa420a4f554176ecb62db/38.9072,-77.0369',

// console.log(data.weather[0].description)









})
