const obj = { a: 1 }
obj.fr = "lol";
let str = 'fr';
function isObjKey(obj) {
    if (str in obj) return true;
    return false;
}

if (isObjKey(obj)) console.log(true); else console.log(false);