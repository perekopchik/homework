/*
let object = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

object[Symbol.iterator] = function () {
    return {
        current: this.a - 10,
        last: this.d,
        next: function () {
            if (this.current < this.last) {
                return {value: this.current = this.current + 10, done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}
for (let key of object) {
    console.log(key);
}
*/
let object = {
    name: 'Stanley',
    Job: 'Web dev',
    age: 28,
}

object[Symbol.iterator] = function () {
    const propertyArray = Object.entries(this);
    let index = 0;
    return {
        next : function () {
            const result = {
                value: propertyArray [index][1],
                done: index >= propertyArray.length,
            }
            index++;
            return result;
        }
    }
}
for (let key of object) {
    console.log(key);
}

