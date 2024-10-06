// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

let arr = ["2:3", "0:0", "3:1"]


function points(games) {
    let totalPoints = 0; // Переменная для хранения общего количества очков

    games.forEach(game => {
        let [x, y] = game.split(':').map(Number); // Разделяем строку на x и y и преобразуем в числа

        if (x > y) {
            totalPoints += 3; // Победа, добавляем 3 очка
        } else if (x < y) {
            totalPoints += 0; // Поражение, очков не добавляем
        } else if (x === y) {
            totalPoints += 1; // Ничья, добавляем 1 очко
        }
    });

    return totalPoints; // Возвращаем общее количество очков
}

// Пример вызова функции
console.log(points(arr)); // Выведет общее количество очков