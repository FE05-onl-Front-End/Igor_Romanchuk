let userAge = {
    ivanov: '19',
    petrov: '17',
    sidorov: '21'
}

const getAge = (arrayAge) => {

    let adult = [];
    let minor = [];


    Object.keys(arrayAge).forEach((element) => {
        if (arrayAge[element] >= 18) {
            adult.push({ name: element, age: arrayAge[element] })
        } else {
            minor.push({ name: element, age: arrayAge[element] })
        }
    });

    console.log(adult)
    console.log(minor)
}

getAge(userAge)


// 

let userRating = {
    ivanov: '2',
    john: '4',
    petrov: '6',
    gerald: '8',
    sidorov: '10'
}

const getRating = (arrayObj) => {

    let minor = [];
    let medium = [];
    let major = [];

    let one = 'poorly';
    let two = 'average';
    let three = 'Excellent';

    Object.keys(arrayObj).forEach((element) => {
        if (arrayObj[element] < 5) {
            minor.push({ name: element, age: arrayObj[element], progress: one})

        } else if (arrayObj[element] < 9) {
            medium.push({ name: element, age: arrayObj[element], progress: two})
        } else {
            major.push({ name: element, age: arrayObj[element], progress: three})
        }
    });

    console.log(minor);
    console.log(medium);
    console.log(major);

}

getRating(userRating);



// Не знаю как можно сократить
// Специально пытался сделать без .filter

const compact = (array) => {
    array.forEach((element, index) => {
        if (element == undefined) {
            array.splice(index, 1)
        }
        if (!!element == false) {
            array.splice(index, 1)
        }
    });
      return array;  
}
   
const dat = [0, 1, false, 2, undefined, '', 3, null, 'test'];
console.log(compact(dat)) // [1, 2, 3]



// 


const fill = (arraySize, value) => {
    let arr = [];
    for(let i = 0; i < arraySize; i++) {
        arr.push(value);
    }
    return arr;
};


const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']





/* let arr = [43, 54, 12, 'text', 'TeXt', 54, "54", 0, false, "car", "CAR", 43];


const numbers = arr.map(num => {
    return {
        value: 43;
    }
}) */
    