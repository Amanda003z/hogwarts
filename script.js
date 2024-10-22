//:D
let gryffindorStudents = 30;
let slytherinStudents = 30
let ravenclawStudents = 30;
let hufflepuffStudents = 30;

/*Handle Admin Options*/ {
    const housesContainer = document.querySelector(".houses_container");

    //Handle Password
    const password = "123abc";
    const typedPassword = document.querySelector(".admin_password");
    const verifyButton = document.querySelector(".verify_button");
    verifyButton.addEventListener("click", () => {
        if (password == typedPassword.value) {
            housesContainer.style.visibility = "visible";
        } else housesContainer.style.visibility = "hidden";
    });

    //Handle Update
    const buttonUpdate = document.querySelector(".update_button");
    buttonUpdate.addEventListener("click", () => {
        /*//Post into info.txt
        fetch("info.txt", {
            method: "POST",
            body: JSON.stringify({
                gryffindorStudents: `${document.querySelector(".gry")}`,
                slytherinStudents: `${document.querySelector(".sly")}`,
                ravenclawStudents: `${document.querySelector(".raven")}`,
                hufflepuffStudents: `${document.querySelector(".huff")}`,
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => console.log(response));*/

        prioritizeHouses();
        housesContainer.style.visibility = "hidden";
        document.querySelector('input[id="checkbox"]').checked = false;
    });
}

//Checking for prioritized or closed houses and sorting acording to it or the answers
const sortingButton = document.querySelector(".sorting_button");
sortingButton.addEventListener("click", () => {
    if (allQuestionsAnswered()) {
        /*requestStudents = fetch("info.txt").then((response) => response.json());
        const students = {
            gryffindorStudents: requestStudents.gryffindorStudents,
            slytherinStudents: requestStudents.slytherinStudents,
            ravenclawStudents: requestStudents.ravenclawrStudents,
            hufflepuffStudents: requestStudents.hufflepuffStudents,
        };*/

        answersGry = 0;
        answersSly = 0;
        answersRaven = 0;
        answersHuff = 0;

        const img = document.querySelector(".result_img");

        //Si hay prioridad se tiene en cuenta...
        const prioritizedHouses = prioritizeHouses();
        if (prioritizedHouses[0]) {
            for (const [key, value] of Object.entries(prioritizedHouses[1])) {
                if (value) {
                    img.src = `images/houses/${key}.jpg`;
                }
            }
        } else {
            /*Adding-up Anwers*/ {
                /*Question 1*/ {
                    if (document.querySelector('input[id="1a"]').checked) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="1b"]').checked
                    ) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="1c"]').checked
                    ) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="1d"]').checked
                    ) {
                        answersSly++;
                    }
                }

                /*Question 2*/ {
                    if (document.querySelector('input[id="2a"]').checked) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="2b"]').checked
                    ) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="2c"]').checked
                    ) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="2d"]').checked
                    ) {
                        answersHuff++;
                    }
                }

                /*Question 3*/ {
                    if (document.querySelector('input[id="3a"]').checked) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="3b"]').checked
                    ) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="3c"]').checked
                    ) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="3d"]').checked
                    ) {
                        answersRaven++;
                    }
                }

                /*Question 4*/ {
                    if (document.querySelector('input[id="4a"]').checked) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="4b"]').checked
                    ) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="4c"]').checked
                    ) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="4d"]').checked
                    ) {
                        answersGry++;
                    }
                }

                /*Question 5*/ {
                    if (document.querySelector('input[id="5a"]').checked) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="5b"]').checked
                    ) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="5c"]').checked
                    ) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="5d"]').checked
                    ) {
                        answersSly++;
                    }
                }

                /*Question 6*/ {
                    if (document.querySelector('input[id="6a"]').checked) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="6b"]').checked
                    ) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="6c"]').checked
                    ) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="6d"]').checked
                    ) {
                        answersHuff++;
                    }
                }

                /*Question 7*/ {
                    if (document.querySelector('input[id="7a"]').checked) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="7b"]').checked
                    ) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="7c"]').checked
                    ) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="7d"]').checked
                    ) {
                        answersRaven++;
                    }
                }

                /*Question 8*/ {
                    if (document.querySelector('input[id="8a"]').checked) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="8b"]').checked
                    ) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="8c"]').checked
                    ) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="8d"]').checked
                    ) {
                        answersGry++;
                    }
                }

                /*Question 9*/ {
                    if (document.querySelector('input[id="9a"]').checked) {
                        answersHuff++;
                    } else if (
                        document.querySelector('input[id="9b"]').checked
                    ) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="9c"]').checked
                    ) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="9d"]').checked
                    ) {
                        answersSly++;
                    }
                }

                /*Question 10*/ {
                    if (document.querySelector('input[id="10a"]').checked) {
                        answersRaven++;
                    } else if (
                        document.querySelector('input[id="10b"]').checked
                    ) {
                        answersGry++;
                    } else if (
                        document.querySelector('input[id="10c"]').checked
                    ) {
                        answersSly++;
                    } else if (
                        document.querySelector('input[id="10d"]').checked
                    ) {
                        answersHuff++;
                    }
                }
            }

            //Sorting...
            function setImg(index) {
                let houses = [
                    "gryffindor",
                    "ravenclaw",
                    "slytherin",
                    "hufflepuff",
                ];
                img.src = `images/houses/${houses[index]}.jpg`;
            }

            const closedHouses = closeHouses();
            if (getHouseScore()[3] == answersGry) {
                if (!closedHouses.gryClosed) {
                    setImg(0);
                } else if (
                    getHouseScore()[2] == answersHuff &&
                    !closedHouses.huffClosed
                ) {
                    setImg(3);
                } else if (
                    getHouseScore()[2] == answersRaven &&
                    !closedHouses.ravenClosed
                ) {
                    setImg(1);
                } else if (
                    getHouseScore()[2] == answersSly &&
                    !closedHouses.slyClosed
                ) {
                    setImg(2);
                }
            } else if (getHouseScore()[3] == answersHuff) {
                if (!closedHouses.huffClosed) {
                    setImg(3);
                } else if (
                    getHouseScore()[2] == answersGry &&
                    !closedHouses.gryClosed
                ) {
                    setImg(0);
                } else if (
                    getHouseScore()[2] == answersRaven &&
                    !closedHouses.ravenClosed
                ) {
                    setImg(1);
                } else if (
                    getHouseScore()[2] == answersSly &&
                    !closedHouses.slyClosed
                ) {
                    setImg(2);
                }
            } else if (getHouseScore()[3] == answersRaven) {
                if (!closedHouses.ravenClosed) {
                    setImg(1);
                } else if (
                    getHouseScore()[2] == answersGry &&
                    !closedHouses.gryClosed
                ) {
                    img.src = "images/houses/gryffindorStudents.jpg";
                } else if (
                    getHouseScore()[2] == answersHuff &&
                    !closedHouses.huffClosed
                ) {
                    setImg(3);
                } else if (
                    getHouseScore()[2] == answersSly &&
                    !closedHouses.slyClosed
                ) {
                    setImg(2);
                }
            } else if (getHouseScore()[3] == answersSly) {
                if (!closedHouses.slyClosed) {
                    setImg(2);
                } else if (
                    getHouseScore()[2] == answersGry &&
                    !closedHouses.gryClosed
                ) {
                    img.src = "images/houses/gryffindorStudents.jpg";
                } else if (
                    getHouseScore()[2] == answersHuff &&
                    !closedHouses.huffClosed
                ) {
                    setImg(3);
                } else if (
                    getHouseScore()[2] == answersRaven &&
                    !closedHouses.ravenClosed
                ) {
                    setImg(1);
                }
            }

            answersGry = 0;
            answersSly = 0;
            answersRaven = 0;
            answersHuff = 0;
        }
        img.style.opacity = "0.9";
        document.querySelector(".sorting_error").innerHTML = "";
    } else
        document.querySelector(".sorting_error").innerHTML =
            "No has respondido todas las preguntas...";
});

function allQuestionsAnswered() {
    //Each Input per Question
    let questions = [];
    for (let i = 0; i < 10; i++) {
        questions[i] = document.querySelectorAll(
            `input[name="question-${i + 1}"]`
        );
    }

    let counter = 0;
    for (const i in questions) {
        for (const radio of questions[i]) {
            if (radio.checked) {
                counter++;
            }
        }
    }

    return counter == 10;
}

function getHouseScore() {
    let scores = [answersGry, answersHuff, answersRaven, answersSly];

    scores.sort(function (a, b) {
        return a - b;
    });

    return scores;
}

function prioritizeHouses() {
    let prioritizedHouses = {
        gryffindor: false,
        slytherin: false,
        hufflepuff: false,
        ravenclaw: false,
    };
    let prioritize = false;

    if (document.querySelector('input[id="gryCheck"]').checked) {
        prioritizedHouses.gryffindor = true;
        prioritize = true;
    } else if (document.querySelector('input[id="slyCheck"]').checked) {
        prioritizedHouses.slytherin = true;
        prioritize = true;
    } else if (document.querySelector('input[id="huffCheck"]').checked) {
        prioritizedHouses.hufflepuff = true;
        prioritize = true;
    } else if (document.querySelector('input[id="ravenCheck"]').checked) {
        prioritizedHouses.ravenclaw = true;
        prioritize = true;
    }

    return [prioritize, prioritizedHouses];
}

function closeHouses() {
    let closedHouse = {
        gryClosed: false,
        slyClosed: false,
        huffClosed: false,
        ravenClosed: false,
    };

    if (
        gryffindorStudents - hufflepuffStudents > 6 ||
        gryffindorStudents - slytherinStudents > 6 ||
        gryffindorStudents - ravenclawStudents > 6
    ) {
        closedHouse.gryClosed = true;
    }

    if (
        ravenclawStudents - hufflepuffStudents > 6 ||
        ravenclawStudents - slytherinStudents > 6 ||
        ravenclawStudents - gryffindorStudents > 6
    ) {
        closedHouse.ravenClosed = true;
    }

    if (
        slytherinStudents - hufflepuffStudents > 6 ||
        slytherinStudents - gryffindorStudents > 6 ||
        slytherinStudents - ravenclawStudents > 6
    ) {
        closedHouse.slyClosed = true;
    }

    if (
        hufflepuffStudents - gryffindorStudents > 6 ||
        hufflepuffStudents - slytherinStudents > 6 ||
        hufflepuffStudents - ravenclawStudents > 6
    ) {
        closedHouse.huffClosed = true;
    }

    return closedHouse;
}
