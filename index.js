$(document).ready(function () {
    var audio = new Audio("./audio/welcome.mp3");
    audio.play();
    var scores_1 = [
        {
            id: 5,
            logo: "./images/TF.png",
            teamName: "7.1/2 Yelare Sani",
            teamScore: "13"
        },
        {
            id: 2,
            logo: "./images/TC.png",
            teamName: "Sutta Thalai Yennaku",
            teamScore: "12"
        },

        {
            id: 1,
            logo: "./images/TB.png",
            teamName: "Varutha Padatha Valibar Sangham",
            teamScore: "12"
        },

    ]
    var scores_2 = [
        {
            id: 3,
            logo: "./images/TD.png",
            teamName: "Thotta ne Ketta",
            teamScore: "10"
        },
        {
            id: 4,
            logo: "./images/TE.png",
            teamName: "Jil Jung Juk",
            teamScore: "7.5"
        },
        {
            id: 0,
            logo: "./images/TA.png",
            teamName: "Saara Paambu",
            teamScore: "6.5"
        },

    ]
    loadScores1(scores_1)
    loadScores2(scores_2)

    function loadScores1(scores_1) {
        scores_1.forEach(score => {
            chalkBoard = `
        <div class="chalk-board">
                            <div class="chalk-board-imgb">
                                <img class="chalk-board-img" src="${score?.logo}" alt="">
                            </div>
                            <div class="chalk-board-item">
                                <div class="chalk-board-btxt">
                                    ${score?.teamName}
                                </div>
                                <div class="chalk-board-stxt">
                                    ${score?.teamScore}
                                </div>
                            </div>
                        </div>
        `;
            $("#chalk_board_box1").append(chalkBoard)
        });
    }
    function loadScores2(scores_2) {
        scores_2.forEach(score => {
            chalkBoard = `
        <div class="chalk-board">
                            <div class="chalk-board-imgb">
                                <img class="chalk-board-img" src="${score?.logo}" alt="">
                            </div>
                            <div class="chalk-board-item">
                                <div class="chalk-board-btxt">
                                    ${score?.teamName}
                                </div>
                                <div class="chalk-board-stxt">
                                    ${score?.teamScore}
                                </div>
                            </div>
                        </div>
        `;
            $("#chalk_board_box2").append(chalkBoard)
        });
    }

})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextColor() {
    const textElement = document.getElementById('ft_text');
    textElement.style.color = getRandomColor();
}

setInterval(changeTextColor, 500);