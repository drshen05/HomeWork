// 1)
// function myName(name){
//     return 'Привет, ' + name
// }

// console.log(myName('Дарья'))


// 2)
// const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12, 13]

// function array(numbers){
//     for ( let i = 0; i < numbers.length; i++) {

//     if ( numbers[i] > 10 ){
//         console.log(numbers[i])
//     }

// }
// }
// array(numbers)


// 3)

// function сalculator(firstNumber, secondNumber, sign) {
//     result = firstNumber - secondNumber
//     if (sign !== '-') {
//         console.log(result)

//     }


// } console.log(сalculator(2, 3, 'minus'))

// function сalculator(firstNumber, secondNumber, sign) {
//     result = firstNumber + secondNumber
//     if (sign !== '+') {
//         console.log(result)

//     }


// } console.log(сalculator(2, 3, 'plus'))

// function сalculator(firstNumber, secondNumber, sign) {
//     result = firstNumber * secondNumber
//     if (sign !== '*') {
//         console.log(result)

//     }


// } console.log(сalculator(2, 3, 'multiplication'))

function сalculator(firstNumber, secondNumber, sign) {
    result = firstNumber / secondNumber
    if (sign !== '/') {
        console.log(result)

    }


} console.log(сalculator(2, 3, 'division'))
