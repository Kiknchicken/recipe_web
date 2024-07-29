/* sideBar */
function card(header, header_data) {

    /* grab headers from dict */
    let headers = Object.keys(tags);
    let filter_string = "";
    let index;

    /* Add cuisine value to dictionary */
    if (tags[header].includes(header_data)) {
        index = tags[header].indexOf(header_data);
        tags[header].splice(index, 1)
    } else {
        tags[header].push(header_data);
    }

    console.log(tags)

    /* display recipes that are in dictionary */
    for (let i = 0; i < headers.length; i++) {
        if (tags[headers[i]].length != 0) {
            filter_string += '[data-' + headers[i] + ']:not';
            for (let j = 0; j < tags[headers[i]].length; j++) {
                filter_string += '([data-' + headers[i] + '="' + tags[headers[i]][j] + '"]):is';
            }
        } 
    }

    filter_string = filter_string.substring(0, filter_string.length - 3);

    console.log(filter_string)

    // filter_string += '[data-' + headers[i] + ']:not([data-' + headers[i] + '="' + tags[headers[i]] + '"]

    let cards = document.querySelectorAll(".minimize");
    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("class", "card");
    } 

    if (filter_string.length == 0) {
        console.log("nothing");
    } else {
        let cards = document.querySelectorAll(filter_string);
        for (let i = 0; i < cards.length; i++) {
            cards[i].setAttribute("class", "minimize");
        }  
    }
}

/* Init dict */
const tags = {};

/* Grab info from div */
let filterHeaders = document.getElementById("filterData").getAttribute("data-filterHeaders").split(",");

/* Parse through list and add headers to dict*/
for (let i = 0; i < filterHeaders.length; i++) {
    tags[filterHeaders[i]] = [];
}

console.log(filterHeaders);
console.log(tags);
