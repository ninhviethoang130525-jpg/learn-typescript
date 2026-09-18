"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
let age = 25;
age = 30;
let myName = "hoadv";
myName = "20";
let dihockhong = true;
dihockhong = false;
let myYear = 2005;
// myYear = "20008"; => error
// object: chua nhieu thuoc tinh
const student = {
    name: "hoadv",
    age: 34,
    isActive: true,
};
// enum
var status;
(function (status) {
    status["done"] = "ho\u00E0n th\u00E0nh";
    status["doing"] = "\u0111ang l\u00E0m";
})(status || (status = {}));
// array: []: nhieu phan tu
const numbers = [1, 2, 3, 4];
const students = ["nam", "an"];
const products = [{ name: "laptop" }, { name: "laptop" }];
// any: khồng quan tâm kiểu dữ liệu
let data = 20;
data = "hoadv";
data = true;
//Union | kết hợp 
let res = 20;
res = "hoadv";
// literal: |
let doSomething;
// null | undefined
let value = null;
