let players = ['x', 'o'];
let activePlayer = 0;


function startGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    activePlayer = 0;
    let num = +prompt('Напишите число, это будет игровое поле!');
    for (let i = isFinite(num); i !== true;) {
        if (!isFinite(num)) {
            num = +prompt('Введите число');
            i = isFinite(num);
        }
    }
    let a = board[0].slice(0, board[0].length);
    for (let j = 0; j < board.length; j++) {
        for (let i = board[j].length; i < num; i++) {
            board[j].push('');
        }
        for (let k = board.length; k < num; k++) {
            board.push(a);
        }
    }
    renderBoard(board);
}

function click(a, b) {

    // переключение с x на o
    for (let i = 0; i < board[0].length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (+a === j && +b === i) {
                if (activePlayer) {
                    board[j][i] = players[1];
                    activePlayer = 0;
                } else {
                    board[j][i] = players[0];
                    activePlayer = 1;
                }
            }
        }
    }
    // алгоритм для проверки на выигрыш по горизонтали
    board.map((item) => {
        if (item.every((x) => x.includes(players[0]))) {
            showWinner(0);
        } else if (item.every((x) => x.includes(players[1]))) {
            showWinner(1);
        }
    });
    //Функция проверки победы крест на крест
    function count(arr1, arr2, arr3, arr4) {
        board.forEach((item, id) => {
            if (item[id] === players[0]) {
                arr1.push(item[id]);
                if (arr1.length === board.length) {
                    showWinner(0);
                }
            } else if (item[id] === players[1]) {
                arr2.push(item[id]);
                if (arr2.length === board.length) {
                    showWinner(1);
                }
            }
        });
        board.map((item, id) => {
            if (item[((board.length - 1) - id)] === players[0]) {
                arr3.push('x');
                if (arr3.length === board.length) {
                    showWinner(0);
                }
            } else if (item[((board.length - 1) - id)] === players[1]) {
                arr4.push('o');
                if (arr4.length === board.length) {
                    showWinner(1);
                }
            }
        });
    }
    count([], [], [], []);
    let calc = [];
    let calc2 = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j].indexOf('x') !== -1) {
                calc.push(board[j].indexOf('x'));
                if (calc.length === board.length && calc.every(x => x === j)) {
                    showWinner(0);
                }
            } else if (board[i][j].indexOf('o') !== -1) {
                calc2.push(board[j].indexOf('o'));
                if (calc2.length === board.length && calc2.every(x => x === j)) {
                    showWinner(1);
                }
            }
        }
    }
    renderBoard(board);
}


