console.log("connected");

document.addEventListener("DOMContentLoaded", ()=> {

// upon submit, fetch ONLY username and cross reference using
// backend should send back all of specific users clients
  // show page for the user, or find
// deletes current Dom Elements and
// renders index to Dom
let login = document.getElementById('login')
let loginForm = document.getElementsByClassName('login-form')[0]

loginForm.addEventListener("submit", (event)=> {
    // prevent default action which is a page refresh
    event.preventDefault()
    //when you log in
    if (!!login.value) {
      getAllClients(login.value);

      // fetch(`http://localhost:3000/trainers/${login.value}`)
      //   .then(function(response){
      //     return response.json();
      //   })
      //   .then(function(trainer) {
      //     debugger
      //     trainer.client_list.forEach(function(client){
      //       // create a div with a class of card
      //       let cardDiv = document.createElement('div')
      //       cardDiv.classList.add('card')
      //       // create a name element and set its innerText to client.name
      //         // THE BELOW CODE IS TO BE USED ONCE A GOAL IS CREATED
      //         // let name = document.createElement('h5')
      //         // name.innerText = client.name
      //       let textarea = document.createElement('textarea')
      //       textarea.innerText = client.goals
      //
      //       let delClientBtn = document.createElement('button')
      //       delClientBtn.innerText = 'Remove'
      //       delClientBtn.addEventListener('click', deleteClient())
      //
      //         //THE BELOW CODE IS FOR AFTER AN IMAGE
      //         // ATTRIBUTE IS CREATED FOR CLIENTS
      //       // let img = document.createElement('img')
      //       // ing.src = client.img_url
      //
      //       // create elements to display client information
      //
      //       // debugger
      //     })
      //     // remove all login page elements from the DOM
      //     // display all clients for respective trainer
      //
      //
      //   })
    }
  })
})

function addClient(){

}

function deleteClient(e){
  let id = e.target.split('-')[0]
  console.log(id)
}


//      //DELETE CLIENT EXAMPLE
// function removeTea(e){
//     //e is the event object
//     //e.target is the html element that triggered the event
//     let id = e.target.id.split('-')[0]
//     console.log(id)
//     fetch(`http://localhost:3000/teas/${id}`),{
//         method: "DELETE"
//     }.then(res => res.json())
//     .then(data =>{
//       document.querySelector(`#tea-${tea.id}`).remove()
//     })
//     //remove
//   }

//      //END DELETE CLIENT EXAMPLE


// Write methods here

function getAllClients(trainerName){
  fetch(`http://localhost:3000/trainers/${trainerName}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(trainer) {
      // debugger
      //For Each loop
      // debugger
      trainer.client_list.forEach(function(client) {
        //create a list item for each client
        // let div = document.createElement('div')
        let li = document.createElement('li')
        li.innerText = `${client.name}`
        li.addEventListener('click', function(){
          // pull up page of individual client
        })
        // find ul with class 'client_list'
        let ul = document.getElementById('client_list')
        ul.appendChild(li)

      })
      //show jumbotron and hide log inspect
      document.querySelector('.login').style.display = "none"
      document.querySelector('.jumbotron').style.display = "inline-block"
      // debugger
    });

}



// NOTE Left off at adding event listener on line 23
