// Дети пьют тодди.
//     Подростки пьют кока-колу.
//     Молодые люди пьют пиво.
//     Взрослые пьют виски.
//     Создайте функцию, которая получает возраст и возвращает то, что они пьют.
//
//     Правила:
//
// Дети до 14 лет.
//     Подростки до 18 лет.
//     Молодой до 21 года.
//     У взрослых их 21 и более.
//     Примеры: (Ввод -> Выход)


function peopleWithAgeDrink(old) {
   let result;
    if(old < 14) {
       result = "drink toddy"
   } else if (old >= 14 && old < 18) {
       result =  "drink coke"
   } else if (old >= 18 && old < 21) {
        result =  "drink beer"
   } else {
        result = "drink whisky"
    }
    return result;

}

console.log(peopleWithAgeDrink(14));
