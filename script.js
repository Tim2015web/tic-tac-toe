let gameBtn = document.querySelectorAll(".gameFieldWrap button"); // Захват игровых кнопок
let againBtn = document.querySelector(".playAgainBtn"); // Захват кнопки играть сначала

let useNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]; // Массив свободных клеток
let pcStep; // Переменная для генерации случайного числа
let winner = "";

// Нажатие игровой кнопки
gameBtn.forEach(e => e.addEventListener("click", function () {
    this.textContent = "X";
    this.disabled = true;
    this.classList.add("x");
    useNumber[this.dataset.index] = null;
    chechWin(); // Проверка выигрыша
    if (winner == "X" || winner == "O") { return };

    //Ход ПК
    if (useNumber.every(n => n == null) && winner != "X") {
        alert("Ходы закончились");
    } else {
        do {
            pcStep = String(Math.floor(Math.random() * useNumber.length))
        } while (useNumber[pcStep] == null);
        gameBtn[pcStep].textContent = "O";
        gameBtn[pcStep].disabled = true;
        gameBtn[pcStep].classList.add("o");
        useNumber[pcStep] = null;
    }
    chechWin(); // Проверка выигрыша
}));

// Играть сначала
againBtn.addEventListener("click", function () {
    location.reload();
   // useNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
   // winner = ""
 //   gameBtn.forEach(e => {
  //      e.disabled = false;
//        e.textContent = "";
 //   });
});

 // Проверка выигрыша
function chechWin() {
    if (gameBtn[0].textContent == "X" & gameBtn[1].textContent == "X" & gameBtn[2].textContent == "X") { winner = "X" };
    if (gameBtn[3].textContent == "X" & gameBtn[4].textContent == "X" & gameBtn[5].textContent == "X") { winner = "X" };
    if (gameBtn[6].textContent == "X" & gameBtn[7].textContent == "X" & gameBtn[8].textContent == "X") { winner = "X" };

    if (gameBtn[0].textContent == "X" & gameBtn[3].textContent == "X" & gameBtn[6].textContent == "X") { winner = "X" };
    if (gameBtn[1].textContent == "X" & gameBtn[4].textContent == "X" & gameBtn[7].textContent == "X") { winner = "X" };
    if (gameBtn[2].textContent == "X" & gameBtn[5].textContent == "X" & gameBtn[8].textContent == "X") { winner = "X" };

    if (gameBtn[0].textContent == "X" & gameBtn[4].textContent == "X" & gameBtn[8].textContent == "X") { winner = "X" };
    if (gameBtn[2].textContent == "X" & gameBtn[4].textContent == "X" & gameBtn[6].textContent == "X") { winner = "X" };


    if (gameBtn[0].textContent == "O" & gameBtn[1].textContent == "O" & gameBtn[2].textContent == "O") { winner = "O" };
    if (gameBtn[3].textContent == "O" & gameBtn[4].textContent == "O" & gameBtn[5].textContent == "O") { winner = "O" };
    if (gameBtn[6].textContent == "O" & gameBtn[7].textContent == "O" & gameBtn[8].textContent == "O") { winner = "O" };

    if (gameBtn[0].textContent == "O" & gameBtn[3].textContent == "O" & gameBtn[6].textContent == "O") { winner = "O" };
    if (gameBtn[1].textContent == "O" & gameBtn[4].textContent == "O" & gameBtn[7].textContent == "O") { winner = "O" };
    if (gameBtn[2].textContent == "O" & gameBtn[5].textContent == "O" & gameBtn[8].textContent == "O") { winner = "O" };

    if (gameBtn[0].textContent == "O" & gameBtn[4].textContent == "O" & gameBtn[8].textContent == "O") { winner = "O" };
    if (gameBtn[2].textContent == "O" & gameBtn[4].textContent == "O" & gameBtn[6].textContent == "O") { winner = "O" };

    // Объявление победителя
    if (winner == "X" || winner == "O") {
        gameBtn.forEach(e => { e.disabled = true }); // Заблокировать оставшиеся кнопки
        alert("Победа за " + winner);
    }
}