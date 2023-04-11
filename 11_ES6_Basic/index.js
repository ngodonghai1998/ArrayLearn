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

let hocVien1 = {id: 5};
let hocVien2 = {...hocVien1};

hocVien2.id = 10;

console.log(hocVien1);
console.log(hocVien2);