const password = '123abc';
const adminButton = document.querySelector('.admin_button');

adminButton.addEventListener("click", () => {
    const typedPassword = document.querySelector('.admin_password').value;
    if (password == typedPassword) {
        const houses = document.querySelector('.houses_container');
        houses.style.visibility = "visible";
    }
});

const gryffindor = document.querySelector('.gry');
const slytherin = document.querySelector('.sly');
const ravenclaw = document.querySelector('.raven');
const hufflepuff = document.querySelector('.huff');

let answersGry = 0;
let answersSly = 0;
let answersRaven = 0;
let answersHuff = 0;

const sortingButton = document.querySelector(".sorting_button");

sortingButton.addEventListener("click", () => {
    const img = document.querySelector('.result_img');
    if (3 > 2) {
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
        document.querySelector('.sorting_error').innerHTML = "";

        answersGry = 0;
        answersSly = 0;
        answersRaven = 0;
        answersHuff = 0;
    } else {
        document.querySelector('.sorting_error').innerHTML = "No has respondido todas las preguntas...";
    }
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

/*function allQuestionsAnswered() {
    let counter = 0;

    let questions = [
        document.querySelectorAll('input[name="question-1"]'),
        document.querySelectorAll('input[name="question-2"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]'),
        document.querySelectorAll('input[name="question-3"]')
    ];

    for (let i = 0; i < questions.length; i++) {
        for (let j = 1; j < questions[0].length; j++) {
            if (questions[i][j].checked) {
                counter++; break;
            }
        }
    }

    if (counter == 10) {
        return true;
    } else return false
}*/