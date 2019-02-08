"use strict";
const objectToUrlGet = (data) => {
    const arrayData = [];
    const objectData = Object.assign({ json: true }, data);
    for (const i in objectData) {
        const strItemData = `${i}=${objectData[i]}`;
        arrayData.push(strItemData);
    }
    const stringData = arrayData.join('&');
    return stringData;
};
module.exports = objectToUrlGet;
