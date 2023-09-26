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
function calculate(num1, num2, sign) {
    let result

    for (let i = 0; i < 1; i++) {
        if (sign === 'plus') {
            result = num1 + num2
        } else if (sign === 'minus') {
            result = num1 - num2
        } else if (sign === 'multiply') {
            result = num1 * num2
        } else if (sign === 'divide') {
            result = num1 / num2;
        }
    }

    return result;
}


const additionResult = calculate(2, 3, 'plus')
console.log(additionResult)

const subtractionResult = calculate(5, 2, 'minus')
console.log(subtractionResult)

const multiplicationResult = calculate(4, 6, 'multiply')
console.log(multiplicationResult)

const divisionResult = calculate(10, 2, 'divide')
console.log(divisionResult)