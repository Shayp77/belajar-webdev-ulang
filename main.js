let firstcard
let secondcard

let sum
let cards=[]
let hasBlackJack=false
let isalive
let message
let messageEl=document.getElementById("message-el")
let count=0
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let newCards=document.getElementById("newcards")
let player={
  name:"Asin",
  chip:10
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chip
function getRandomCard(){
  let cons=Math.ceil(Math.random()*13)
  if(cons===11){
    return 11
  }else if(cons===1){
    return 11
  }else if(cons>11){
    return 10
  }
  return cons
}

function startGame(){
  isalive=true
  firstcard=getRandomCard()
  secondcard=getRandomCard()
  
  sum=firstcard+secondcard
  cards=[firstcard,secondcard]
  renderGame()
}
function renderGame () {
  cardsEl.textContent="Cards:"
  for(let i=0;i<cards.length;i+=1){
    cardsEl.textContent+=cards[i]+" "
  }
  if(sum<=20){
    cond=0
    message="DO you want to draw a new card"

  }else if(sum===21){
    hasBlackJack=true
    message="You got a BlackJack!"
  }else{
    message="You're out of the game!"
    isalive=false
  }
  sumEl.innerText="Sum: "+sum
  messageEl.innerText=message
}

function runnewCard(){
  if(isalive && hasBlackJack===false){
    let thirdcard=getRandomCard()
    sum+=thirdcard
    cards.push(thirdcard)
    renderGame()
  }else{

  }
  

}  

let airbnb={
  name:"Live like a king in my castle",
  guests:4,
  bedroom:1,
  beds:2,
  baths:"Private half-bath",
  isavailable:true,
  rating:4.96,
  review:1295,
  tags:["catle","london"],
  price:190

}
console.log(airbnb.name+" "+airbnb.isavailable)