const getArray = ([firstElem, secondElem, thirdElem, ...rest]) => {
    if (rest.length > 1) {
        if (firstElem === undefined) {
            firstElem = 'Error';
        }
        const obj = {...rest};
        console.log(`${firstElem} - ${secondElem} - ${thirdElem}`);
        console.log(obj);
    } else {
        console.log('Error');
    }
}
getArray([1, 2, 3, 4, 5]);