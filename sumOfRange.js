const range = (start , end , step = 1) => {

    let numArray = []
    
    //  If start greater than end 
    if (start > end) {
        for(let i = start ; i >= end ; i+= step) {
            numArray.push(i);
        }
        return numArray;
    }
    
    // If start is less than end
    for(let i = start ; i <= end ; i+= step) {
        numArray.push(i);
    }

    return numArray;
}

const sum = (numArray) => {
    return numArray.reduce((accumulator , currentValue) => accumulator + currentValue);
}

console.log(range(1,10));
console.log(range(5 , 2 , -1));
console.log(sum(range(1,10)));
