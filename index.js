// Code your solution here
// function findMatching(array, str){
//     const newArray =  array.filter(drivers => drivers === `${str}`)
//     return newArray
// }

const findMatching = (array, str) => {
    return array.filter(driver => {
      return driver.toLowerCase() === str.toLowerCase()
    })
}
// function findMatching(array, str){
//     let newArray = array.map(name => name.toLowerCase());
//     let newStr = str.toLowerCase();
//     return newArray.filter(drivers => drivers === `${newStr}`);
// }

function fuzzyMatch(array, letters){
    return array.filter( driver => {
        return letters === driver.substring(0,2);
    })
}

const matchName = (array, str) => {
    return array.filter(driver => {
        return driver.name === str
    })
}
