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
}

/* sidebar */
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

    for (let i = 0; i < card_array.length; i++) {
        card_array[i].setAttribute("class", "minimize");
    }

    console.log(array_tags);

    if (array_tags.length > 0) {
        for (let i = 0; i < card_attributes.length; i++) {
            for (let j = 0; j < array_tags.length; j++) {
                if (card_attributes[i].includes(array_tags[j])) {
                    document.getElementById('card'+(i+1).toString()).setAttribute("class", "card");
                }
            }
        }
    } else {
        for (let i = 0; i < card_array.length; i++) {
            card_array[i].setAttribute("class", "card");
        }
    }
}

/* Init Array of tags */
const array_tags = [];
const card_attributes = [];

/* Get and Add arrays of tags from cards */
const card_array = document.querySelectorAll('[data-tag');

for (let i = 0; i < card_array.length; i++) {
    card_attributes.push(card_array[i].getAttribute('data-tag'));
}

console.log(card_attributes);

/* Init vars for sliders */
var slider_min = parseInt(document.getElementById("slider_min").value);
var slider_max = parseInt(document.getElementById("slider_max").value);

var range_min =  document.getElementById("range_min");
var range_max =  document.getElementById("range_max");


