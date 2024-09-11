const gameBoard = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Обработка кликов на клетке
gameBoard.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');

        if (board[index] === '' && isGameActive) {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Меняем игрока
        }
    });
});

// Проверка победителя
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} победил!`;
        isGameActive = false;
    } else if (!board.includes('')) {
        statusText.textContent = 'Ничья!';
        isGameActive = false;
    }
}

// Сброс игры
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameBoard.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    isGameActive = true;
    statusText.textContent = '';
}
