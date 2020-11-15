let players = ['x', 'o'];
let player1 = 0;
let player2 = 1;
let activePlayer = true;


function startGame() {
    board = [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];
    activePlayer = player1;
    renderBoard(board);

}

function click(a, b) {
    // переключение с x на o
    for (let i = 0; i < board[0].length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (+a === j && +b === i) {
                if (activePlayer) {
                    board[j][i] = players[1];
                    activePlayer = false;
                } else {
                    board[j][i] = players[0];
                    activePlayer = true;
                }
            }
        }
    }
    // алгоритм для проверки на выигрыш по горизонтали
    board.map((item) => {
        if (item.every((x) => x.includes('x'))) {
            showWinner(0);
        } else if (item.every((x) => x.includes('o'))) {
            showWinner(1);
        }
    });
    //Функция проверки победы крест на крест
    function count(arr1, arr2, arr3, arr4) {
        board.forEach((item, id) => {
            if (item[id] === 'x') {
                arr1.push(item[id]);
                if (arr1.length === board.length) {
                    showWinner(0);
                }
            } else if (item[id] === 'o') {
                arr2.push(item[id]);
                if (arr2.length === board.length) {
                    showWinner(1);
                }
            }
        });
        board.map((item, id) => {
            if (item[((board.length - 1) - id)] === 'x') {
                arr3.push('x');
                if (arr3.length === board.length) {
                    showWinner(0);
                }
            } else if (item[((board.length - 1) - id)] === 'o') {
                arr4.push('o');
                if (arr4.length === board.length) {
                    showWinner(1);
                }
            }
        });
    }
    count([], [], [], []);


    // else if (board[0][i] == 'o' && board[1][i] == 'o' && board[2][i] == 'o') {
    //     showWinner(1); - для вертикали цикл


    renderBoard(board);
    // showWinner(pleyer1[0]);
}


