$(() => {
  const $title = $('#title')
  $title.delay(4000).slideUp(1000)

  const $weatherModal = $('#weather-modal')

  const showWeatherModal = () => {
    $weatherModal.css('display', 'block')
  }
  setTimeout(showWeatherModal, 8000);






















})
