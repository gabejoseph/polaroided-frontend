// Implement an algorithm to determine if a string has all unique characers.  What if you cannot use additional data structures?
// Hash Map
// Vector 
// Can you solve this in O (N log N) time? What might a solution like that look like?

const input = "aaabbccdaa";
const input2 = "abcd";

const isUnique = (str) => {
    let array = []
    if (str.length > 128) {return false}

    for (let index = 0; index < str.length; index++) {
        if (array[str.charCodeAt(index)] === true) {
            return false
        }

        array[str.charCodeAt(index)]=true
        
    }
    return true
}

console.log(input.charCodeAt(9))
console.log(isUnique(input))