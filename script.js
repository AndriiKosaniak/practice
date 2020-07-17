// -- при помощи метода sort и колбека  отсортировать массив.
let numbers = [51, 1, 7, 235, 0, 120, 40, 6, 7, 4]
let sortedNumbers = numbers.sort()
console.log(sortedNumbers)
console.log(`____________________`)
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let failingNumbers = numbers.sort(function(a, b) {
    return b - a
})
console.log(failingNumbers)
console.log(`____________________`)
// -- при помощи filter получить числа кратные 3
let filteredNumbers = numbers.filter(function(number) {
    if (number % 3 === 0) {
        console.log(number)
    }
})
console.log(`____________________`)
// -- при помощи filter получить числа кратные 10
let filteredNumbers10 = numbers.filter(function(number) {
    if (number % 10 === 0) {
        console.log(number)
    }
})
console.log(`____________________`)
// -- перебрать (проитерировать) массив при помощи foreach()
let iteredNumbers = numbers.forEach(function (value) {
    console.log(value)
})
console.log(`____________________`)
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let mappedNumbers = numbers.map(function(value){
    return value * 3
})
console.log(mappedNumbers)
console.log(`____________________`)
// - создать массив со словами на 15-20 элементов.
let wordsArray = [`Neque`, `porro`, `quisquam`, `est`, `qui`, `dolorem`, `ipsum`, `quia`, `dolor`, `sit`, `amet`, `consectetur`, `adipisci`, `velit`, `lorem`]
// -- отсортировать его по алфавиту в восходящем порядке.
let arraySort = wordsArray.sort(function (word1, word2) {
    if (word1.toLowerCase() < word2.toLowerCase()){
        return -1
    } else if (word1.toLowerCase() > word2.toLowerCase()){
        return 1
    } else {
        return 0
    }
});
console.log(arraySort);
console.log(`____________________`)
// -- отсортировать его по алфавиту  в нисходящем порядке.
let arrayReverseSort = wordsArray.sort(function (word1, word2) {
    if (word1.toLowerCase() < word2.toLowerCase()){
        return 1
    } else if (word1.toLowerCase() > word2.toLowerCase()){
        return -1
    } else {
        return 0
    }
});
console.log(arraySort);
console.log(`____________________`)
// -- отфильтровать слова длиной менее 4х символов]
let arrayFilter = wordsArray.filter(word => word.length < 4)
console.log(arrayFilter);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let arrayMap = wordsArray.map(word => word + `!`);
console.log(arrayMap)
console.log(`____________________`)
//
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let usersSort = users.sort((user1, user2) => user1.age - user2.age)
console.log(usersSort);
console.log(`____________________`)
let usersReverseSort = users.sort((user1, user2) => user2.age - user1.age)
console.log(usersReverseSort);
console.log(`____________________`)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let usersLengthSort = users.sort((user1, user2) => user1.name.length - user2.name.length)
console.log(usersLengthSort)
console.log(`____________________`)
let usersReverseLengthSort = users.sort((user1, user2) => user2.name.length - user1.name.length)
console.log(usersReverseLengthSort)
console.log(`____________________`)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newArray = []
let i = 1
users.forEach((user) => {
    user.id = i
    newArray.push(user)
    i++
});
console.log(newArray);
console.log(`____________________`)
// - відсортувати його за індентифікатором
let usersIdSort = newArray.sort((user1, user2) => user1.id - user2.id)
console.log(usersIdSort);
