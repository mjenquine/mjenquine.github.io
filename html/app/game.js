//activities array
const arr = ['Do Pilates', 'Eat Kale', 'Take Vitamins', 'Take a walk', 'Hug a Friend', 'Meditate']


$(() => {
//===================================


const generateActivities = () => {
  for (let i = 0; i < arr.length; i++) {
    //create a random health point between 0 and 20
    const hp = [Math.floor(Math.random() * 20)]
    //these are the main activity buttons appended to the .squares-section
    const $activity = $(`<div> ${arr[i]}</div>`).addClass('activity-squares')
    $('#squares-section').append($activity)
    //this appends the random health points to the activity buttons
    const $hp = $(`<div>${hp[0]}</div>`).addClass('activity-hp')
    console.log($hp);
    ($activity).append($hp)



  }
}









generateActivities()
//=====================================
})
