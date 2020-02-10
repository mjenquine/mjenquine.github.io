//activities array
const arr = ['Do Pilates', 'Eat Kale', 'Take Vitamins', 'Take a walk', 'Hug a Friend', 'Meditate']
const hp = 

$(() => {
//===================================


const generateActivities = () => {
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    const $activity = $(`<div> ${arr[i]}</div>`).addClass('activity-squares')
    $('#squares-section').append($activity)



  }
}









generateActivities()
//=====================================
})
