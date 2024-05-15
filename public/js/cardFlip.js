/*const cards = document.querySelectorAll('.card');
console.log(cards);

for (let card_id of cards){
    card_id.addEventListener("click", flipcard(card_id));
}

function flipcard(card_id){
    card_id.classList.toggle('flipCard');
    console.log('hello');
}

*/

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener("click", flipcard);
});

function flipcard(event){
    event.currentTarget.classList.toggle('flipCard');
}