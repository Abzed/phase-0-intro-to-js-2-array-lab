let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    // let cats = ["Milo", "Otis", "Garfield"]
    cats.push(name)
    console.log(cats);
}
destructivelyAppendCat('Ralph')

function destructivelyPrependCat(name){
    // let cats = ["Milo", "Otis", "Garfield"]
    cats.unshift(name)
    console.log(cats);
}
destructivelyPrependCat('Bob')

function destructivelyRemoveLastCat(){
    // let cats = ["Milo", "Otis", "Garfield"]
    cats.pop()
    console.log(cats);
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    // let cats = ["Milo", "Otis", "Garfield"]
    cats.shift()
    console.log(cats);
}
destructivelyRemoveFirstCat()

function appendCat(name){
    let newCatArr = cats.slice()
    newCatArr.push(name)
    return newCatArr
}
appendCat('Broom')

function prependCat(name){
    let newCatArr = cats.slice()
    newCatArr.unshift(name)
    return newCatArr
}
prependCat('Arnold')

function removeLastCat(){
    let newArr = cats.slice()
    newArr.pop()
    return newArr
}
removeLastCat()

function removeFirstCat(){
    let newArr = cats.slice()
    newArr.shift()
    return newArr
}
removeFirstCat()








