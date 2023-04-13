// Cơ chế khai báo biến

/** 
    Phạm vi biến 
    var: Hỗ trợ cơ chế Hoisting, nên phạm vi biến là toàn cục
    let: không hỗ trợ Hoisting, khi khai báo biến trùng tên với nhau trên cùng 1 scope thì browser sẽ báo lỗi. Ví dụ: title = 'Cybersoft';
    let title = 'Cybersoft';
    ==> Báo lỗi Error
    Khi khai báo let ở các scope khác nhau thì giá trị sẽ phân biệt.
    const: Tương tự let tuy nhiên giá trị không được phép gán lại.
    ==> Dùng let thay cho var khi khai báo biến trong es6

    tenHam();
    showMessage();

    //Declaration function (hỗ trợ hoisting)
    function tenHam() {
        console.log('Tên hàm');
    }

    //Expression function (không hỗ trợ hoisting)
    var showMessage = function() {
        console.log('showMessage');
    }
    
*/

// var title = 'Cybersoft';

// {
//     var title = 'xyz'
//     console.log(title);
// }

// console.log(title);

// let title = 'abc';

// {
//     let title = 'xyz';
//     // console.log(title);
// }

// // console.log(title);

// const DOMAIN =  'https://api.cybersoft.edu.vn';

// {
//     const DOMAIN = 'abc';
//     console.log(DOMAIN);

// }

// console.log(DOMAIN);

var arrButton = document.querySelectorAll('button');

for (let index = 0; index < arrButton.length; index++) {
    let btn = arrButton[index];
    // console.log(index);

    btn.onclick = function() {
        alert(btn.innerHTML);
    }
}

/*
    Hàm:
*/


//Declaration function (hỗ trợ hoisting)
function tenHam() {
    console.log('Tên hàm');
}

//Expression function (không hỗ trợ hoisting)
var showMessage = function() {
    console.log('showMessage');
}

//tenHam();
//showMessage();

/* ---------- context (ngữ cảnh this) -----------
    object: Trong object, this sẽ là object.
    function: Trong function, đối tượng nào thực thi phương thức thì this sẽ là đối tượng đó. Nói cách khác this trong function là function đó.
    còn giá trị default của this là window, window là cái đối tượng để ta thao tác với lại browser. (khi ngữ cảnh chồng chéo nhau) - Nếu mở tính năng module của thẻ script thì sẽ báo lỗi. Ví dụ:
    <script type="module" src="/index.js"></script>

*/

var hoTen = 'Nguyễn Văn Tèo';

// console.log('Chiều rộng',window.innerWidth);
// console.log('Tiêu đề: ',window.document.title);
// console.log('Họ tên:', hoTen);
var sinhVien = {
    ma: 1,
    ten: 'Huy',
    hienThiThongTin: function() {
        var hienThi = () => {
            // console.log(this.ma);
            // console.log(this.ten);
        }

        hienThi();
    }
}



sinhVien.hienThiThongTin();

function Product() {
    this.id = '';
    this.name = '';
    this.showInfo = function () {
        // console.log('id', this.id);
        // console.log('name', this.name);
    }
}

var prod1 = new Product();
prod1.id = 1;
prod1.name = 'Product A';
// console.log(prod1);
prod1.showInfo();

var prod2 = new Product();
prod2.id = 2;
prod2.name = 'Product B';
// console.log(prod2);

// ------------ Arrow function ------------
/*
    Arrow function là cách khai báo hàm với cú pháp =>
     + Khai báo hàm ngắn gọn hơn
        => Đối với hàm chỉ có 1 tham số thì sẽ không cần () cho tham số đó. Ví dụ: (title) => {} tương đương title = {}
        => Đối với hàm chỉ có 1 lệnh return thì sẽ không cần ghi chữ return và {}. Ví dụ: (a, b) => {return a+b} tương đương (a, b) => a + b
     + Loại bỏ ngữ cảnh this
     + Không dùng cho việc khai báo prototype và cũng không hỗ trợ hoisting
     => Dùng cho mục đích khai báo hàm (hàm tìm số nguyên tố, hàm xử lý chức năng, hàm onclick, onchange, event, ...)
*/

var showInfoProduct = () => {
    console.log('Hello cybersoft BC43');
    console.log(this);
}

var sayHello = (name) => {
    return 'Hello' + name;
}

var sayHelloArrow = name => `hello + ${name}`;
// Viết tắt của arrow

var renderObject = (id, name) => ({
    id:id,
    name:name,
})




// Bài tập
let arrColors = ['red', 'green', 'blue', 'pink', 'orange', 'black'];

let renderButton = () => {

    //Cách 1: Tạo ra các button = dom => append lên ui

    // for (let index = 0; index < arrColors.length; index++){
    //     let color = arrColors[index];
    //     let btn = document.createElement('button');
    //     btn.className = 'btn text-light mx-2';
    //     btn.style.background = color;
    //     btn.innerHTML = color;
    //     btn.onclick = function() {
    //         document.getElementById('house').style.color = color;
    //     }

    //     document.getElementById('colors').appendChild(btn);
    // }

    let htmlString = ``;

    for (let index = 0; index < arrColors.length; index++) {
        htmlString += `
            <button class="btn text-white" style="background-color: ${arrColors[index]};" onclick="changeColor('${arrColors[index]}')">${arrColors[index]}</button>
        `; 
    }
    document.getElementById('colors').innerHTML = htmlString;

    

    
}

renderButton();

// let changeColor = (color) => {
//     // document.querySelector('#home').style.color = color;
//     document.getElementById('home').style.color = color;
// }

function changeColor(color) {
    document.getElementById('home').style.color = color;
}


//---------- Default parameter values ---------------
var getUserInfo = (name = "Mị", age = 18) => {
    if (age > 0 && age <30) {
        // console.log(`${name} còn trẻ ${name} muốn đi chơi !`);
    }
}

getUserInfo('Huy');


//---------- Rest parameter -------------

//RestParam: Là tham số của hàm nhận nhiều giá trị khi gọi hàm dưới dạng mảng.
function tinhTong(...arrSo) {
    switch(arrSo.length) {
        case 2: {
            // console.log('Tổng = ', arrSo[0] + arrSo [1]);
        }; 

        break;

        case 3: {
            // console.log('Tổng = ', arrSo[0] + arrSo [1] + arrSo [2]);
        };

        break;

        default: {
            // console.log('Tham số không hợp lệ!');
        };
    }
}

tinhTong(2, 3);
tinhTong(2, 3, 5);
tinhTong(2, 3, 5, 7);


/**
 * Spread operator: Dùng để sao chép giá trị của object hoặc array
 */

let hocVien1 = {id: 5, namd:'Huy'};
let hocVien2 = {...hocVien1, id: 100, phone: '0909090909'};

hocVien2.id = 10;

// console.log('hocvien1: ', hocVien1);
// console.log('hocvien2: ', hocVien2);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
arr2.push(6);

console.log('arr1',arr1);
console.log('arr2',arr2);

// Detructuring 
// Dùng để  bóc tách phần tử trong mảng hoặc object

let prod10 = {
    id:5,
    name: 'Iphone',
    price: 1000,
    showInfo: function () {
        console.log('show info:');
        console.log('price:', this.price);
    }
}

//es5
// let id = prod10.id;

//es6
let {id:maSP,name, showInfo, ...restProd} = prod10;
// console.log(restProd);

showInfo.bind(prod10)();

// console.log(maSP);

// function main() {
//     console.log(1);
    
//     return function () {
//         console.log(2);
//     }
// }
// main();
// main()();

//Đối với mảng (tuple)

let [idProd, nameProd, priceProd, showInfoProd] = [5, 'Iphone', 1000, 
    function(){
        console.log('Giá tiền', thongTinSP[2]);
}]

console.log('TênSP', nameProd);


// object literal: Sử dụng tên biến làm tên thuộc tính

let tenLopHoc = 'Cybersoft BC43';
let maLop = 'BC43';

let lopHoc = {
    maLop,
    tenLopHoc
}

console.log('lopHoc',lopHoc);


//dynamic key

let hocSinh = {
    ['mã học viên']: 'BCSV001',
}

// console.log(hocSinh);
// hocSinh['mã học viên'];

var tagInput = document.getElementById('tenSP');

let sanPham = {
    [tagInput.id]: tagInput.value,
}

console.log(sanPham);

/*
    for in: thường dùng để duyệt key của object.

    for of: thường dùng để duyệt các phần tử của mảng.
*/

// let arrProduct = [
//     {id: 1, name: 'Galaxy note 20', price: 1000},
//     {id: 2, name: 'Galaxy note 21', price: 2000},
//     {id: 3, name: 'Galaxy note 22', price: 3000},

// ]

// //Bài tập: log ra tất cả sản phẩm trong mảng arrProduct

// for (let phone of arrProduct) {
//     console.log(phone);
// }


// for (let index in arrProduct) {
//     console.log('index:', index);
//     console.log('object', arrProduct[index]);
// }


let productPhone = {id: 3, name: 'Galaxy note 22', price: 3000};

for (let key in productPhone){
    console.log(key, productPhone[key]);
}

let productPhoneTest = [
    5,'phone test',
]

for (let keyTest of productPhoneTest) {
    console.log(keyTest);
}

/* Cấu trúc của một object:

    let object = {
        key: value,
        key: value,
        key: value,
    }

    let array = {
        index: value,
        index: value,
        index: value,
    }

    for of sẽ duyệt vế bên phải, còn for in sẽ duyệt vế bên trái.
*/


// Bài tập

document.querySelector('#formNhanVien').onsubmit = function(event) {
    event.preventDefault(); //Chăn reload browser

    let arrInput = document.querySelectorAll('#formNhanVien input,#formNhanVien select');

    let nhanVien = {};
    for (let input of arrInput){

        //Sử dụng detructuring: Sử dụng bóc tách phần tử
        let {id,value,style} = input;

        style.backgroundColor = 'blue !important';
        //let id = input.id; //maNhanVien
        //let value = input.value; //1
        // let name = input.name;
        nhanVien[id] = value;

    }

    let contentHTML = '';
    for (let key in nhanVien) {
        contentHTML += `
            <p>${key} : ${nhanVien[key]}</p>
        `
    }

    document.querySelector('#ketQuaHienThi').innerHTML = contentHTML;

}

//import

import { ProductES6, DOMAIN_API as API_URL } from "./models/Product.js";

//import file default 

import PrototypeProduct from "./models/Product.js";



let prod15 = new ProductES6();
console.log(prod15);
console.log(API_URL);

let prod20 = new PrototypeProduct();
console.log(prod20);