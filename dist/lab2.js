"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum
var ProductRate;
(function (ProductRate) {
    ProductRate["low"] = "th\u1EA5p";
    ProductRate["medium"] = "trung b\u00ECnh";
    ProductRate["high"] = "cao";
})(ProductRate || (ProductRate = {}));
// sản phẩm
const product = {
    name: "laptop",
    rate: ProductRate.low,
    price: 10000,
    sale: true,
};
console.log(product);
// danh sách sản phẩm
const listProducts = [
    {
        name: "laptop1",
        rate: ProductRate.low,
        price: 10,
        sale: true,
    },
    {
        name: "laptop2",
        rate: ProductRate.high,
        price: 20,
        sale: false,
    },
    {
        name: "laptop3",
        rate: ProductRate.medium,
        price: 3,
        sale: true,
    },
    {
        name: "laptop4",
        rate: ProductRate.medium,
        price: 4,
        sale: true,
    },
    {
        name: "laptop5",
        rate: ProductRate.high,
        price: 6,
        sale: false,
    },
];
console.log(listProducts);
// hàm tính giá
function calPrice(list) {
    return list.reduce((total, product) => {
        return total + product.price;
    }, 0);
}
console.log("Tổng giá:", calPrice(listProducts));
// ==========================================
// BÀI TẬP
// ==========================================
// 1. Thêm description bằng map
const newProducts = listProducts.map((product) => {
    return {
        ...product,
        description: product.price > 5 ? "Tốt" : "Bình thường",
    };
});
console.log("Danh sách có description:");
console.log(newProducts);
// 2. Hiển thị danh sách bằng forEach
console.log("----- DANH SÁCH SẢN PHẨM -----");
newProducts.forEach((product) => {
    console.log("Tên sản phẩm:", product.name, "| Giá bán:", product.price, "| Sale:", product.sale, "| Đánh giá:", product.rate);
});
// 3. Tính tổng giá bán bằng reduce
const totalPrice = listProducts.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log("Tổng giá bán sản phẩm:", totalPrice);
// 4. Lọc sản phẩm đang Sale và đánh giá từ Trung bình trở lên
const saleProducts = listProducts.filter((product) => {
    return (product.sale === true &&
        (product.rate === ProductRate.medium ||
            product.rate === ProductRate.high));
});
console.log("----- SẢN PHẨM SALE -----");
console.log(saleProducts);
