// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHeart = document.querySelectorAll(".like-glyph")
function likeCallBack(e){
  const heart = e.target
  mimicServerCall("bogusUrl")
  .then(function() {
    if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
    heart.className = "activated-heart"
    }
    else{
       heart.innerText = EMPTY_HEART
      heart.className = ""
    }
    })
    .catch((error)=>{
      const modal = document.getElementById("modal")
      modal.className = ""
      modal.innerHTML= error
      setTimeout(()=> modal.className = "hidden", 3000)
    })
  }
for(const post of articleHeart){
post.addEventListener("click", likeCallBack)
  
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
