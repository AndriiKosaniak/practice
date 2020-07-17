let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
let volumeFilterOne = cars.filter(value => value.volume > 3);
console.log(volumeFilterOne);
console.log(`_______________________________________`);
// - двигун = 2л
let volumeFilterTwo = cars.filter(value => value.volume === 2);
console.log(volumeFilterTwo);
console.log(`_______________________________________`);
// - виробник мерс
let producerFilter = cars.filter(value => value.producer === "mercedes")
console.log(producerFilter);
console.log(`_______________________________________`);
// - двигун більше 3х літрів + виробник мерседес
let producerVolumeFilterOne = cars.filter(value => value.producer === "mercedes" && value.volume > 3);
console.log(producerVolumeFilterOne);
console.log(`_______________________________________`);
// - двигун більше 3х літрів + виробник субару
let producerVolumeFilterTwo = cars.filter(value => value.producer === "subaru" && value.volume > 3 );
console.log(producerVolumeFilterTwo);
console.log(`_______________________________________`);
// - сили більше ніж 300
let powerFilter = cars.filter(value => value.power > 300);
console.log(powerFilter);
console.log(`_______________________________________`);
// - сили більше ніж 300 + виробник субару
let powerProducerFilter = cars.filter(value => value.power > 300 && value.producer === `subaru`);
console.log(powerProducerFilter);
console.log(`_______________________________________`);
// - мотор серіі ej
let engineFilter = cars.filter(value => value.engine.startsWith(`ej`))
console.log(engineFilter);
console.log(`_______________________________________`);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let volumeProducerEngineFilter = cars.filter(value => value.power > 300 && value.producer === `subaru` && value.engine.startsWith(`ej`))
console.log(engineFilter);
console.log(`_______________________________________`);
// - двигун меньше 3х літрів + виробник мерседес
let anotherVolumeFilterOne = cars.filter(value => value.volume < 3 && value.producer === `mercedes`);
console.log(anotherVolumeFilterOne);
console.log(`_______________________________________`);
// - двигун більше 2л + сили більше 250
let anotherVolumeFilterTwo = cars.filter(value => value.volume > 2 && value.power > 250);
console.log(anotherVolumeFilterTwo);
console.log(`_______________________________________`);
// - сили більше 250  + виробник бмв
let anotherPowerFilter = cars.filter(value => value.power > 250 && value.producer === `bmw`);
console.log(anotherPowerFilter);
console.log(`_______________________________________`);
/////////////////////////////////////////////////////////
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
let idSort = usersWithAddress.sort((user1, user2) => user1.id - user2.id );
console.log(idSort);
console.log(`_______________________________________`);
// -- отсортировать его по id пользователей в обратном опрядке
let idReverseSort = usersWithAddress.sort((user1, user2) => user2.id - user1.id);
console.log(idReverseSort);
console.log(`_______________________________________`);
// -- отсортировать его по возрасту пользователей
let ageSort = usersWithAddress.sort((user1, user2) => user1.age - user2.age);
console.log(ageSort);
console.log(`_______________________________________`);
// -- отсортировать его по возрасту пользователей в обратном порядке
let ageReverseSort = usersWithAddress.sort((user1, user2) => user2.age - user1.age);
console.log(ageReverseSort);
console.log(`_______________________________________`);
// -- отсортировать его по имени пользователей
let nameSort = usersWithAddress.sort(function (user1, user2){
    if (user1.name > user2.name) {
        return 1;
    } else if (user1.name < user2.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(nameSort);
console.log(`_______________________________________`);
// -- отсортировать его по имени пользователей в обратном порядке
let nameReverseSort = usersWithAddress.sort(function (user1, user2){
    if (user1.name > user2.name) {
        return -1;
    } else if (user1.name < user2.name) {
        return 1;
    } else {
        return 0;
    }
});
console.log(nameSort);
console.log(`_______________________________________`);
// -- отсортировать его по названию улицы  в алфавитном порядке
let streetSort = usersWithAddress.sort(function(user1, user2) {
    if (user1.address.street > user2.address.street) {
        return 1;
    }
    else if (user1.address.street < user2.address.street) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log(streetSort);
console.log(`_______________________________________`);
// -- отсортировать его по номеру дома по возрастанию
let numberSort = usersWithAddress.sort(function(user1, user2) {
    if (user1.address.number > user2.address.number) {
        return 1;
    }
    else if (user1.address.number < user2.address.number) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log(numberSort);
console.log(`_______________________________________`);
// -- отфильтровать (оставить) тех кто младше 30
let ageFilter = usersWithAddress.filter(user => user.age < 30);
console.log(ageFilter);
console.log(`_______________________________________`);
// -- отфильтровать (оставить) тех у кого отрицательный статус
let statusFilter = usersWithAddress.filter(user => user.status === false);
console.log(statusFilter);
console.log(`_______________________________________`);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let statusAgeFilter = usersWithAddress.filter(user => user.status === false && user.age < 30);
console.log(statusAgeFilter);
console.log(`_______________________________________`);
// -- отфильтровать (оставить) тех у кого номер дома четный
let numberFilter = usersWithAddress.filter(user => user.address.number % 2 === 0);
console.log(numberFilter);
console.log(`_______________________________________`);
