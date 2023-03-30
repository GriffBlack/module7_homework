const obj = { a: 1 }
const obj1 = Object.create(obj);
obj1.fr = "lol";
obj1["ft"] = 121;
function isOwnKey(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log('key:   ', key, '\nvalue: ', obj[key]);
        }
    }
}

isOwnKey(obj1);