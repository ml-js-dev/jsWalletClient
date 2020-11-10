const chunkArray = (arr, len) => {
    //Init chunked array
    const chunkedArr = [];
    //loop through array
    arr.forEach(value => {
        //get last element
        const last = chunkedArr[chunkedArr.length -1];
        //check if last and if last length is equal to the chunk length
        if (!last || last.length === len) {
            chunkedArr.push([value]);
        } else {
            last.push(value);
        }
    });
    return chunkedArr;
}

module.exports = chunkArray;