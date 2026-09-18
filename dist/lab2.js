"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Product
// enum
var ProductRate;
(function (ProductRate) {
    ProductRate["low"] = "th\u1EA5p";
    ProductRate["high"] = "cao";
})(ProductRate || (ProductRate = {}));
const product = {
    name: "laptop",
    rate: ProductRate.low,
    price: 10000,
};
console.log(product);
const listProducts = [
    {
        name: "laptop1",
        rate: ProductRate.low,
        price: 10000,
    },
    {
        name: "laptop2",
        rate: ProductRate.high,
        price: 10000,
    },
];
function calPrice(list) {
    return 111;
}
console.log(listProducts);
console.log(calPrice(listProducts));
