// Intro To Big O Notation 

// Constants
const smallArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const bigArray = []
function makeBigArrayBig(){
    let i = 0
    while (i < 10000){
        i++ 
        bigArray.push(i) 
    }
    return bigArray
}
makeBigArrayBig(bigArray)

console.time('Wake up')
console.timeEnd('Wake up')

// O(1) => Constant Time Complexity

function numberAtIndexFive(arr){
    return "I am the number at index five: " + arr[5]
}

console.time(numberAtIndexFive(smallArray))
console.timeEnd(numberAtIndexFive(smallArray))

console.time(numberAtIndexFive(bigArray))
console.timeEnd(numberAtIndexFive(bigArray))

// O(log n) => Logarithmic Time Complexity

function whereIsTheNumber(arr, num) {
    let beg = 0 
    let end = (arr.length - 1)
    while (beg <= end) {
        let mid = Math.floor((beg + end) / 2)
        if (num === arr[mid]) {
            return mid
        } else if (num > arr[mid]) {
            beg = mid + 1
        } else {
            end = mid - 1 
        }
    }
    return 'No Match'
}

console.time(whereIsTheNumber(smallArray, 6))
console.timeEnd(whereIsTheNumber(smallArray, 6)) 

console.time(whereIsTheNumber(bigArray, 6))
console.timeEnd(whereIsTheNumber(bigArray, 6)) 

// O(n) => Linear Time Complexity

function multiplyBy2(arr) {
    let newArr = []
    arr.forEach(value => {
        newArr.push(value * 2)
    })
    return newArr
}

console.time(multiplyBy2(smallArray))
console.timeEnd(multiplyBy2(smallArray))

console.time(multiplyBy2(bigArray))
console.timeEnd(multiplyBy2(bigArray))

// O(n^2) => Exponential Time Complexity

function howManyOps(arr) {
    let ops1 = 0
    let ops2 = 0 
    arr.forEach(value => {
        ops1++
        arr.forEach(value => {
            ops2++
        })
    })
    return `Ops1: ${ops1}, Ops2: ${ops2}`
}

console.time(howManyOps(smallArray))
console.timeEnd(howManyOps(smallArray))

console.time(howManyOps(bigArray))
console.timeEnd(howManyOps(bigArray))

// O(2^n) => Exponential Time Complexity

function fibonacci(num) {
    return 1 >= num ? num : fibonacci(num - 1) + fibonacci(num -2)
}

console.time(fibonacci(10))
console.timeEnd(fibonacci(10))

console.time(fibonacci(20))
console.timeEnd(fibonacci(20))

console.time(fibonacci(30))
console.timeEnd(fibonacci(30))

console.time(fibonacci(40))
console.timeEnd(fibonacci(40))