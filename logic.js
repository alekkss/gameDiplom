let players = ['x', 'o'];
let activePlayer = 0;

// объявляем переменную доски
let board;


function startGame() {
    let num = prompt('Напишите число, это будет игровое поле!');
    if (num === null || num === '') {
        num = 3;
    }
    console.log(num);
    for (let i = isFinite(num); i !== true;) {
        if (!isFinite(num)) {
            num = prompt('Введите число');
            i = isFinite(num);
        }
    }
    // let a = board[0].slice(0, board[0].length);
    // console.log(a);


    // более простой способ генерации поля
    board = [];
    for (let i = 0; i < num; i++) {
        board[i] = [];
        for (let j = 0; j < num; j++) {
            board[i][j] = "";
        }
    }

    activePlayer = 0;
    renderBoard(board);
}

function click(a, b) {
    // тут присваиваем символ в поле
    board[a][b] = players[activePlayer]; // эта строка общая и не зависит от того, кто сейчас активный игрок

    // передача хода должна быть в конце функции, после проверки выигрыша
    // алгоритм для проверки на выигрыш по горизонтали
    board.map((item) => {
        // упрощённая конструкция с activePlayer вместо конкретного индекса символа
        if (item.every((x) => x.includes(players[activePlayer]))) {
            showWinner(activePlayer);
        }
    });

    //Функция проверки победы крест на крест
    function count(arr1, arr2) {
        // и ещё раз, для закрепления
        board.forEach((item, id) => {
            if (item[id] === players[activePlayer]) {
                arr1.push(item[id]);
                if (arr1.length === board.length) {
                    showWinner(activePlayer);
                }
            }
        });
        board.map((item, id) => {
            if (item[((board.length - 1) - id)] === players[activePlayer]) {
                arr2.push(item[((board.length - 1) - id)]);
                if (arr2.length === board.length) {
                    showWinner(activePlayer);
                }
            }
        });
    }
    count([], []);
    function calc(calc) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j].indexOf(players[activePlayer]) !== -1) {
                    calc.push(board[j].indexOf(players[activePlayer]));
                    if (calc.length === board.length && calc.every(x => x === j)) {
                        showWinner(activePlayer);
                    }
                }
            }
        }
    }
    calc([]);
    renderBoard(board);

    // передача хода
    activePlayer = activePlayer === 0 ? 1 : 0;
}
