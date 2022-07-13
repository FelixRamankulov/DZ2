for(let i = 1; i <=100; i++){
    if( i % 15 === 0){
        console.log('FizzBuzz');
    } else if( i % 3 ===0){
        console.log('Fizz')
    }else if( i % 5 ===0){
        console.log("Buzz");
    }
    else {
        console.log(i)
    }

}
for(let i ='*'; i <=7; i++){
    console.log(i +"*")
}
let i= "*"
while (i.length<7) {
    console.log(i+= "*")
}
