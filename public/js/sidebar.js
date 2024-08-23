/* Helper functions */
function hideCards() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("class", "minimize");
    }
}

function showCards() {
    for (let i = 0; i < cards.length; i++) {
        let card_time = parseInt(cards[i].getAttribute("data-time"));

        if (card_time >= slider_min && card_time <= slider_max) {
            cards[i].setAttribute("class", "card");
        } else {
            cards[i].setAttribute("class", "minimize");
        }
    }
}

/* sidebar filtering */
function filter () {

    if (array_tags.length > 0) {
        hideCards();

        for (let i = 0; i < cards.length; i++) {
            /* Flags */
            let isTime = 0;
            let isType = 0;

            /* Vars */
            let card_time = parseInt(cards[i].getAttribute("data-time"));

            console.log(card_time);

            if (card_time >= slider_min && card_time <= slider_max) {
                for (let j = 0; j < array_tags.length; j++) {
                    if (card_attributes[i].includes(array_tags[j])) {
                        isType = 1;
                    }
                }
            }

            console.log("isType", isType);

            /* Flag test */
            if (isType == 1) {
                cards[i].setAttribute("class", "card");
            }
            else {
                cards[i].setAttribute("class", "minimize");
            }
        }
    } else {
        showCards();
    }
}

/* sidebar slider */
function slider (slider) {
    if (slider.id == "slider_min") {
        slider_min = parseInt(slider.value);

        if (slider_min > slider_max) {
            slider.value = slider_max - 5;
        }
        range_min.textContent = slider.value;
    }

    if (slider.id == "slider_max") {
        slider_max = parseInt(slider.value);

        if (slider_max < slider_min) {
            slider.value = slider_min + 5;
        }
        range_max.textContent = slider.value;
    }

    filter()
}

/* sidebar checkboxes */
function card (tag) {
    /* init vars */
    let index;

    /* Add tag if not in array */
    if (array_tags.includes(tag)) {
        index = array_tags.indexOf(tag);
        array_tags.splice(index, 1);
    } else {
        array_tags.push(tag);
    }

    console.log(array_tags);

    filter();
}

/* Init Array of tags */
var array_tags = [];
const card_attributes = [];
var cards_shown = [];

/* Get and Add arrays of tags from cards */
const cards = document.querySelectorAll('[data-tag');

for (let i = 0; i < cards.length; i++) {
    card_attributes.push(cards[i].getAttribute('data-tag'));
}

console.log(card_attributes);

/* Init vars for sliders */
var slider_min = parseInt(document.getElementById("slider_min").value);
var slider_max = parseInt(document.getElementById("slider_max").value);

var range_min =  document.getElementById("range_min");
var range_max =  document.getElementById("range_max");


