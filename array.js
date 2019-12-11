/* const Memory = require('./memory')

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = Memory.allocate(this.length)
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error')
        }
        const value = Memory.get(this.ptr + this.length - 1)
        return value
    }

    remove(index) { //?????????
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return Memory.get(this.ptr + index) //returns a value located 'index' spots away from this.ptr, or the start
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)

        }

        Memory.set(this.ptr + this.length, value)
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = Memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        Memory.copy(this.ptr, oldPtr, this.length)
        Memory.free(oldPtr)
        this._capacity = size;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new ('Index error')
        }
        if (this.length >= this.capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        Memory.set(this.ptr + index, value)
        this.length++;
    }
}

Array.SIZE_RATIO = 3;

function main() {
    Array.SIZE_RATIO = 3;

    //creates an instance of the array class
    let arr = new Array();

    arr.push(3);
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)



    console.log(arr);
}

console.log(main()) */

//Drills using JS Built-in array functions

//5) URLify a string - replace all spaces with %20

const urlify = function(url) {

    const urlSplit = url.split('')

    for (let i = 0; i <= urlSplit.length; i++ ) {
        if (urlSplit[i] === ' ') {
            urlSplit[i] = '%20'
        }
    }

    return urlSplit.join('')
}

let url = 'tauhida parveen'

console.log(urlify(url))

//6) Filtering an array - remove all numbers less than 5 from array

const filterArray = function(array) {

    let newArray = array.filter(x => {
        return x > 5;
    })

    return newArray
}

let array = [1, 6, 8, 3, 9, 10, 2, 1, 1, 2, 7, 4, 7, 2, 9, 3, 9, 1]

console.log(filterArray(array))

//7) Max sum in an array

const maxSum = function(array) {

}

//8) Merge arrays

const mergeArrays = function(arr1, arr2) {
    const mergedArray = arr1;

    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i])
    }

    let mergedArraySort = mergedArray.sort((a, b) => a - b);

    return mergedArraySort
}

const arr1 = [1, 2, 3, 4, 5]

const arr2 = [12, 13, 14, 15, 16, 17, 18]

console.log(mergeArrays(arr1, arr2))

//9) Remove characters

const removeChar = function(string, characters) {
    let characterArray = characters.split('')

    let stringArray = string.split('')

    let newString = stringArray.filter(x => {
        for (let i=0; i<=characterArray.length; i++) {
            if (x !== characterArray[i]) {
                return x
            }
        }
    })

    return newString
}

const removeChar2 = function(string, characters) {
    let set = new Set(characters)
    return [...string].filter(x => !set.has(x)).join('');
}

let string = 'Battle of the Vowels: Hawaii vs. Grozny';
let characters = 'aeiou'

console.log(removeChar2(string, characters))
console.log(removeChar(string, characters))

//10) Products 

const products = function(array) {

    return array.map(function (_, i) {
        return array.reduce(function (product, val, j) {
            return product * (i === j ? 1 : val);
        }, 1)
    })
}

let numbersArray = [1, 3, 9, 4]
console.log(products(numbersArray))

//11) 2D Array

const arrayChanger = function (array) {

    let badArrays = [];
    let badArraysObj = [];

    for (let i = 0; i<array.length; i++) {

        if (array[i].includes((0))) {
            badArraysObj.push({
                "array": array[i],
                "index": i
            })
        }
    }

    badArraysObj.forEach((ent) => {
        for (let i = 0; i<ent.array.length; i++) {
            let indexToChange = ent.index
            array.map(arr => {
                arr[indexToChange] = 0
            })
            ent.array[i] = 0
        }
    })

    return array
}

const twoDArray = 
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];


console.log(arrayChanger(twoDArray))




