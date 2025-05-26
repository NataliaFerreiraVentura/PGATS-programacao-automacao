/* 
>  - maior  que
>= - maior ou igual que
<  - menor que
<= - menor ou igual que
== - igualdade somente de valores
!= - diferença somente de valores
=== - igualdade de valores e tipos de dado

*/
// >  - maior  que
console.log(`10 > 5 = ${10 > 5}`) //true
console.log(`10 > 30 = ${10 > 30}`) // false

// >= - maior ou igual que
console.log(`10 >= 9 = ${10 >= 9}`) //true
console.log(`10 >= 20 = ${10 >= 20}`) // false


// <  - menor que
console.log(`10 < 20 = ${10 < 20}`) //true
console.log(`10 < 5 = ${10 < 5}`) // false

// <= - menor ou igual que
console.log(`10 <= 10 = ${10 <= 10}`) //true
console.log(`10 <= 5 = ${10 <= 5}`) // false

// == - igualdade somente de valores
console.log(`1 == '1' = ${1 == '1'}`) //true
console.log(`10 == 5 = ${10 == 5}`) // false
console.log(`true == true = ${true == true}`)  //true
console.log(`true == 'true' = ${true == true}`)//true
console.log (null == undefined)  //true
console.log (" " == 0) //true

// != - diferença somente de valores
console.log(`4 != '1' = ${4 != '1'}`) //true
console.log(`4 != 4 = ${4 != 4}`) //false
console.log(`1 !== '1' = ${1 !== '1'}`) //false

// === - igualdade de valores e tipos de dado

console.log(`1 === 1 = ${1 === 1}`) //true
console.log(`1 === '1' = ${10 === '1'}`) // false

console.log(0 == false)