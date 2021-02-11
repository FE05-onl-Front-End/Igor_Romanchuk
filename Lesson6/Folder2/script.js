// Задание 1

const unique = (array) => {
    return array.filter((item, index) => {
        return array.indexOf(item) == index;
    })
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]

// Задание 2

const isEqual = (firstArray, secondArray) => {

    let isCheck = true;

    if (firstArray.length != secondArray.length) {
        isCheck = false;
    } else {
        firstArray.forEach((item, index) => {
            item == secondArray[index] ? null : (isCheck = false);
        });
    }

    return isCheck;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false

// Задание 3

const reverse = (array) => {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
}

const dat = [1, 2, 3];
console.log(reverse(dat)); // [3, 2, 1] */
   