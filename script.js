const gryffindor = 30;
const slytherin = 30;
const ravenclaw = 30;
const hufflepuff = 30;

const password = '123abc';
const adminButton = document.querySelector('.admin_button');

adminButton.addEventListener("click", () => {
    const typedPassword = document.querySelector('.admin_password').value;
    const houses = document.querySelector('.houses_container');

    if (password == typedPassword) {
        houses.style.visibility = "visible";
    } else houses.style.visibility = "hidden";
});

let prioritize;
const buttonUpdate = document.querySelector(".newInfo_button");
buttonUpdate.addEventListener("click", () => {
    //actualizar cantidades en las casas
    
    prioritizeHouses();
    document.querySelector('input[id="checkbox"]').checked = false;
});

function prioritizeHouses() {
    let prioritizedHouses = {
        gryPrioritized: false,
        slyPrioritized: false,
        huffPrioritized: false,
        ravenPrioritized: false
    }

    if (document.querySelector('input[id="gryCheck"]').checked) {
        prioritizedHouses.gryPrioritized = true;

    } else if (document.querySelector('input[id="slyCheck"]').checked) {
        prioritizedHouses.slyPrioritized = true;
        
    } else if (document.querySelector('input[id="huffCheck"]').checked) {
        prioritizedHouses.huffPrioritized = true;
        
    } else if (document.querySelector('input[id="ravenCheck"]').checked) {
        prioritizedHouses.ravenPrioritized = true;
    }

    return prioritizedHouses;
}

let answersGry = 0;
let answersSly = 0;
let answersRaven = 0;
let answersHuff = 0;

const sortingButton = document.querySelector(".sorting_button");
sortingButton.addEventListener("click", () => {
    if (allQuestionsAnswered()) {
        const img = document.querySelector('.result_img');

        //Si hay prioridad se tiene en cuenta...
        if (prioritizeHouses().gryPrioritized) {
            img.src = "images/houses/gryffindor.jpg";

        } else if (prioritizeHouses().huffPrioritized) {
            img.src = "images/houses/hufflepuff.jpg";

        } else if (prioritizeHouses().slyPrioritized) {
            img.src = "images/houses/slytherin.jpg";

        } else if (prioritizeHouses().ravenPrioritized) {
            img.src = "images/houses/ravenclaw.jpg";

        //Si ninguna casa tiene prioridad analizar respuestas...
        } else {
            if (document.querySelector('input[id="1a"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="1b"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="1c"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="1d"]').checked) {
                answersSly++;
            }
    
            if (document.querySelector('input[id="2a"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="2b"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="2c"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="2d"]').checked) {
                answersHuff++;
            }
    
            if (document.querySelector('input[id="3a"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="3b"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="3c"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="3d"]').checked) {
                answersRaven++;
            }
    
            if (document.querySelector('input[id="4a"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="4b"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="4c"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="4d"]').checked) {
                answersGry++;
            }
    
            if (document.querySelector('input[id="5a"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="5b"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="5c"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="5d"]').checked) {
                answersSly++;
            }
    
            if (document.querySelector('input[id="6a"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="6b"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="6c"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="6d"]').checked) {
                answersHuff++;
            }
    
            if (document.querySelector('input[id="7a"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="7b"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="7c"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="7d"]').checked) {
                answersRaven++;
            }
    
            if (document.querySelector('input[id="8a"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="8b"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="8c"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="8d"]').checked) {
                answersGry++;
            }
    
            if (document.querySelector('input[id="9a"]').checked) {
                answersHuff++;
            } else if (document.querySelector('input[id="9b"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="9c"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="9d"]').checked) {
                answersSly++;
            }
    
            if (document.querySelector('input[id="10a"]').checked) {
                answersRaven++;
            } else if (document.querySelector('input[id="10b"]').checked) {
                answersGry++;
            } else if (document.querySelector('input[id="10c"]').checked) {
                answersSly++;
            } else if (document.querySelector('input[id="10d"]').checked) {
                answersHuff++;
            }

            //SORTING...
            if (getHouseScore()[3] == answersGry) {
                if (!closedHouses().gryClosed) {
                    img.src = "images/houses/gryffindor.jpg";
    
                } else if (getHouseScore()[2] == answersHuff && !closedHouses().huffClosed) {
                    img.src = "images/houses/hufflepuff.jpg";
    
                } else if (getHouseScore()[2] == answersRaven && !closedHouses().ravenClosed) {
                    img.src = "images/houses/ravenclaw.jpg";
    
                } else if (getHouseScore()[2] == answersSly && !closedHouses().slyClosed) {
                    img.src = "images/houses/slytherin.jpg";
                }
    
            } else if (getHouseScore()[3] == answersHuff) {
                if (!closedHouses().huffClosed) {
                    img.src = "images/houses/hufflepuff.jpg";
    
                } else if (getHouseScore()[2] == answersGry && !closedHouses().gryClosed) {
                    img.src = "images/houses/gryffinfor.jpg";
    
                } else if (getHouseScore()[2] == answersRaven && !closedHouses().ravenClosed) {
                    img.src = "images/houses/ravenclaw.jpg";
    
                } else if (getHouseScore()[2] == answersSly && !closedHouses().slyClosed) {
                    img.src = "images/houses/slytherin.jpg";
                }
    
            } else if (getHouseScore()[3] == answersRaven) {
                if(!closedHouses().ravenClosed) {
                    img.src = "images/houses/ravenclaw.jpg";
    
                } else if (getHouseScore()[2] == answersGry && !closedHouses().gryClosed) {
                    img.src = "images/houses/gryffindor.jpg";
    
                } else if (getHouseScore()[2] == answersHuff && !closedHouses().huffClosed) {
                    img.src = "images/houses/hufflepuff.jpg";
    
                } else if (getHouseScore()[2] == answersSly && !closedHouses().slyClosed) {
                    img.src = "images/houses/slytherin.jpg";
                }
    
            } else if (getHouseScore()[3] == answersSly) {
                if(!closedHouses().slyClosed) {
                    img.src = "images/houses/slytherin.jpg";
    
                } else if (getHouseScore()[2] == answersGry && !closedHouses().gryClosed) {
                    img.src = "images/houses/gryffindor.jpg";
    
                } else if (getHouseScore()[2] == answersHuff && !closedHouses().huffClosed) {
                    img.src = "images/houses/hufflepuff.jpg";
    
                } else if (getHouseScore()[2] == answersRaven && !closedHouses().ravenClosed) {
                    img.src = "images/houses/ravenclaw.jpg";
                }
            }
        }
        img.style.opacity = "0.9";
        document.querySelector('.sorting_error').innerHTML = "";

    } else {
        document.querySelector('.sorting_error').innerHTML = "No has respondido todas las preguntas...";
    }

    answersGry = 0;
    answersSly = 0;
    answersRaven = 0;
    answersHuff = 0;
});

function closedHouses() {
    let closedHouse = {
        gryClosed: false,
        slyClosed: false,
        huffClosed: false,
        ravenClosed: false
    };

    if ((gryffindor-hufflepuff>6) || (gryffindor-slytherin>6) || (gryffindor-ravenclaw>6)) {
        closedHouse.gryClosed = true;
    }

    if ((ravenclaw-hufflepuff>6) || (ravenclaw-slytherin>6) || (ravenclaw-gryffindor>6)) {
        closedHouse.ravenClosed = true;
    }

    if ((slytherin-hufflepuff>6) || (slytherin-gryffindor>6) || (slytherin-ravenclaw>6)) {
        closedHouse.slyClosed = true;
    }

    if ((hufflepuff-gryffindor>6) || (hufflepuff-slytherin>6) || (hufflepuff-ravenclaw>6)) {
        closedHouse.huffClosed = true;
    }

    return closedHouse;
}

//NOT USED
function compareHouses() {
    let sortedHouses = [gryffindor, hufflepuff, ravenclaw, slytherin];
    
    sortedHouses.sort(function(a, b) {
        return a - b;
    })

    return sortedHouses;
}

function getHouseScore() {
    let scores = [answersGry, answersHuff, answersRaven, answersSly];
    
    scores.sort(function(a, b) {
        return a - b;
    })

    return scores;
}

function allQuestionsAnswered() {
    let counter = 0;

    let questions = [
        document.querySelectorAll('input[name="question-1"]'),
        document.querySelectorAll('input[name="question-2"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-4"]'),
        document.querySelectorAll('input[name="question-5"]'),
        document.querySelectorAll('input[name="question-6"]'),
        document.querySelectorAll('input[name="question-7"]'),
        document.querySelectorAll('input[name="question-8"]'),
        document.querySelectorAll('input[name="question-9"]'),
        document.querySelectorAll('input[name="question-10"]')
    ];

    for (const i in questions) {
        for (const radio of questions[i]) {
            if (radio.checked) {
                counter++;
            }
        }
    }

    return counter == 10;
}