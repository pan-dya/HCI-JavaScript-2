/* 
Decipher
assign a unique number to each letter of the alphabet
a b c d ...
1 2 3 4 ...
subtract each key digit from the params, first params unique code
second params will subtract from the first params and create a new numbers
the new number corresponds towards the alphabet from before. 
return the new word
*/
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

function decipher(original, subtract) {
    let newArray = original
    data = subtract.toString().split('')
    let resultList = []
    for (let i = 0; i < data.length; i++) {
        newArray[i] = (parseInt(original[i]) - parseInt(data[i]))
    }
    for (let j = 0; j < newArray.length; j++) {
        resultList[j] = alphabet[parseInt(newArray[j]-1)]
    } result = resultList.join('')
    return result
}

console.log(decipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 19391939193));