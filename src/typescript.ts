console.log("typescript");

let age: number = 25;
age = 30;

let myName: string = "hoadv";
myName = "20";

let dihockhong: boolean = true;
dihockhong = false;

let myYear = 2005;
// myYear = "20008"; => error

// object: chua nhieu thuoc tinh
const student: { name: string; age: number; isActive: boolean } = {
  name: "hoadv",
  age: 34,
  isActive: true,
};

// enum
enum status {
  done = "hoàn thành",
  doing = "đang làm",
}

// array: []: nhieu phan tu
const numbers: number[] = [1, 2, 3, 4];
const students: string[] = ["nam", "an"];
const products: { name: string }[] = [{ name: "laptop" }, { name: "laptop" }];


// any: khồng quan tâm kiểu dữ liệu
let data: any = 20;
data = "hoadv";
data = true;



//Union | kết hợp 
let res: string | number = 20;
res = "hoadv";



// literal: |
let doSomething: "hoadv" | "an" | "nam";

// null | undefined
let value: null | undefined = null;


