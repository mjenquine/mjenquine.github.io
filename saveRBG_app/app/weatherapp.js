$(() => {
  const $title = $('#title')
  $title.delay(4000).slideUp(1000)
  const $weatherModal = $('#weather-modal')
  const showWeatherModal = () => {
    $weatherModal.css('display', 'block')
  }
  setTimeout(showWeatherModal, 8000);

  $.ajax({
    url:'https://api.darksky.net/forecast/00dded78a3eaa420a4f554176ecb62db/38.9072,-77.0369',
    type: "Get"
  }).then(
    (data) => {
      console.log(data);
    //   $('#currently').html(data)
    },
    () => {
      console.log('no data');
    }
  )




















})
