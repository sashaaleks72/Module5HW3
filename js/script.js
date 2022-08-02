/* Task from first paragraph */
let closureFunc = () => {
    let ch = 0;

    return (value) => {
        ch += value;

        return ch;
    };
};

let counter = closureFunc();

counter(16);
counter(25);
let res = counter(87);

console.log(res);

/* Task from second paragraph */

closureFunc = () => {
    let arr = [];

    return (el) => {
        if (el === undefined) arr = [];
        else arr.push(el);

        return arr;
    };
};

let getUpdatedArr = closureFunc();

getUpdatedArr(45);
getUpdatedArr(87);
getUpdatedArr({ firstName: "Aleksandr" });
res = getUpdatedArr([1, 2, 3, 4, { firstName: "Vladislav" }]);

console.log(res);

res = getUpdatedArr();

console.log(res);
