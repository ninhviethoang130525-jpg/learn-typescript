"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const averageScore = (...scores) => {
    let tong = 0;
    for (let i = 0; i < scores.length; i++) {
        tong = tong + scores[i];
    }
    return tong / scores.length;
};
console.log(averageScore(1, 2, 3, 4, 5));
console.log(averageScore(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
