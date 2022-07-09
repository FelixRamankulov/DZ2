
const name = prompt("Как вас зовут?")
console.log(name)
alert('Hello ' + name)

const arr1 = [1, 2, ]
const arr2 = [ "Felix",3,"Ramankulov", ]
if (arr1.length > arr2.length ){
    console.log("Первый массив длиннее")
} else if ( arr1.length < arr2.length ){
    console.log("Второй массив длиннее")
} else {
    console.log("Оба массива равны")
}
const color = prompt("Выберите цвет?(green,yellow,red)")

switch (color) {
    case "green":
        console.log("Зеленый цвет!можно идти");
        break;
    case "yellow":
        console.log("Желтый цвет!Приготовьтесь");
        break;
    case "red":
        console.log("Красный цвет! Идти нельзя");
}










