
function crEmptyObj() {
    const emptyObj = Object.create(null);
    return emptyObj;
}

let obj = crEmptyObj();
console.log(obj);