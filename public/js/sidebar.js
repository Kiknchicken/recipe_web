/* sideBar */
function card(cuisine_type) {
    /* Init vars */
    const tags  = {
        "cuisine": []
    };

    let headers = Object.keys(tags);
    let filter_string = "";

    /* Add cuisine value to dictionary */
    tags["cuisine"].push(cuisine_type);

    /* display recipes that are in dictionary */
    for (let i = 0; i < headers.length; i++) {
        filter_string += '[data-' + headers[i] + ']:not([data-' + headers[i] + '="' + tags[headers[i]] + '"])';
    }

    let cards = document.querySelectorAll(filter_string);

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].getAttribute("class") == "minimize") {
            cards[i].setAttribute("class", "card")
        } else {
            cards[i].setAttribute("class", "minimize");
        }
    }
}

