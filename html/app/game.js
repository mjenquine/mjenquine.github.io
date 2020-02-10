//activities array
const arr = [
  { activity: 'Do Pilates',
    warning: 'ouch, be sure to stretch first'
  },
  { activity: 'Eat Kale',
    warning: 'oh no, FDA deregulations resulted in spoiled kale'
  },
  { activity: 'Take Vitamins',
    warning: 'next time eat food with your vitamins'
  },
  { activity: 'Take a walk',
    warning: 'air polutants were at a record level today'
  },
  { activity: 'Hug a Friend',
    warning: 'your friend didn\'t stay home in spite of the fact they were sick'
  },
  { activity: 'Meditate',
    warning: 'next time find a quieter space for meditation'
  }]

const totalHP = 0

$(() => {
//===================================
const generateActivities = () => {
  for (let i = 0; i < arr.length; i++) {

    //these are the main activity buttons appended to the .squares-section
    const $activity = $(`<div> ${arr[i].activity}</div>`).addClass('activity-squares');
    $('#squares-section').append($activity)
    //add an event listener to the activity squares
    $activity.on('click', (event) => {
      //create a random health point between 0 and 20
      const hp = Math.floor(Math.random() * 20)
      if (hp >= 7) {
        totalHp += hp
      } else {
        alert(`Low health points added for this activity ${arr[i].warning}`)
        totalHP += hp
      }
    })
  }
}


//captures totalHP and displays it on the screen
const displayTotalHP = () => {
  const $health = $(`<div>${totalHP}</div>`)
  $('#total-score-box').append($health)
}


generateActivities()
displayTotalHP()
//=====================================
})



// const generateActivities = () => {
//   for (let i = 0; i < arr.length; i++) {
//     //create a random health point between 0 and 20
//     const hp = Math.floor(Math.random() * 20)
//     //these are the main activity buttons appended to the .squares-section
//     const $activity = $(`<div> ${arr[i]}</div>`).addClass('activity-squares');
//     $('#squares-section').append($activity)
//     //this appends the random health points to the activity buttons
//     const $hp = $(`<div>${hp}</div>`).addClass('activity-hp');
//     ($activity).append($hp)
//     //add an event listener to the activity squares
//     $activity.on('click', (event) => {
//       let newHealth = parseInt($activity.children().html())
//       console.log(newHealth);
//
//     })
//   }
// }
