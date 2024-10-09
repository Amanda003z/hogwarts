const gryffindor = 30;
const slytherin = 30;
const ravenclaw = 30;
const hufflepuff = 30;

let answersGry = 0;
let answersSly = 0;
let answersRaven = 0;
let answersHuff = 0;

const button = document.querySelector(".sorting_button");

button.addEventListener("click", () => {
    const img = document.querySelector('.result_img');
    //if (todas las preguntas fueron respondidas) {
        if (document.querySelector('input[id="1a"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="1b"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="1c"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="1d"]:checked')) {
            answersSly++;
        }

        if (document.querySelector('input[id="2a"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="2b"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="2c"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="2d"]:checked')) {
            answersHuff++;
        }

        if (document.querySelector('input[id="3a"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="3b"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="3c"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="3d"]:checked')) {
            answersRaven++;
        }

        if (document.querySelector('input[id="4a"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="4b"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="4c"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="4d"]:checked')) {
            answersGry++;
        }

        if (document.querySelector('input[id="5a"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="5b"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="5c"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="5d"]:checked')) {
            answersSly++;
        }

        if (document.querySelector('input[id="6a"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="6b"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="6c"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="6d"]:checked')) {
            answersHuff++;
        }

        if (document.querySelector('input[id="7a"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="7b"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="7c"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="7d"]:checked')) {
            answersRaven++;
        }

        if (document.querySelector('input[id="8a"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="8b"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="8c"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="8d"]:checked')) {
            answersGry++;
        }

        if (document.querySelector('input[id="9a"]:checked')) {
            answersHuff++;
        } else if (document.querySelector('input[id="9b"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="9c"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="9d"]:checked')) {
            answersSly++;
        }

        if (document.querySelector('input[id="10a"]:checked')) {
            answersRaven++;
        } else if (document.querySelector('input[id="10b"]:checked')) {
            answersGry++;
        } else if (document.querySelector('input[id="10c"]:checked')) {
            answersSly++;
        } else if (document.querySelector('input[id="10d"]:checked')) {
            answersHuff++;
        }
        
        if (getHouse() == 0) {
            img.src = "images/houses/gryffindor.jpg";
        } else if (getHouse() == 1) {
            img.src = "images/houses/hufflepuff.jpg";
        } else if (getHouse() == 2) {
            img.src = "images/houses/ravenclaw.jpg";
        } else if (getHouse() == 3) {
            img.src = "images/houses/slytherin.jpg";
        }
        img.style.opacity = "1";
    //} else {
        //img.alt = "No has respondido todas las preguntas..."
    //}
});

function getHouse() {
    let scores = [answersGry, answersHuff, answersRaven, answersSly];
    let maxScore = scores[0];
    let index = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            index = i;
        }
    }

    return index;
}