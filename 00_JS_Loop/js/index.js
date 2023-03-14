//Hãy lưu trữ các giá trị là tên sinh viên như sau: Nam,Hằng,Uyên,Thư,Thảo
var hoTen1 = 'Nam';
var hoTen2 = 'Hằng';
var hoTen3 = 'Uyên';
var hoTen4 = 'Thư';
var hoTen5 = 'Thảo';


/*
    Mảng dùng để lưu trữ các giá trị có cùng kiểu dữ liệu

*/

//Cách khai báo biến mảng : var tenBien = [];
var mangTen = ['Nam', 'Hằng', 'Uyên', 'Thư', 'Thảo', 'Tùng'];
console.log(mangTen);
console.table(mangTen);
//Truy xuất các giá trị bên trong mảng : tenBien[vi_tri]
console.log('Họ tên', mangTen[3]);
console.log(mangTen[0]);
//Truy xuất chiều dài của mảng (số lượng pt trong mảng): tenMang.length
console.log('length', mangTen.length);
//Duyệt mảng: thường dùng để in ra tất cả phần trong mảng, hoặc thay đổi ...
for (var index = 0; index < mangTen.length; index++) {
    console.log(mangTen[index]);
}
//Các thao tác với mảng : C (create) R (Read) U (update) D (Delete)
/* ----- Create: thêm dữ liệu vào mảng --------- */
//tenMang.push(giaTri): Thêm 1 giá trị ở cuối mảng
mangTen.push('Huy');
console.log('mảng tên', mangTen);
//tenMang.unshift(giaTri): Thêm 1 giá trị vào đầu mảng (ít dùng)
mangTen.unshift('Hậu');
console.log('mảng tên', mangTen);
/* -------------- Read: Truy xuất 1 phần tử trong mảng ------------- */
// tenMang[viTri]: 
console.log('first Item', mangTen[0]);
console.log('last Item', mangTen[mangTen.length - 1]);
/* --------------- Update: Thay đổi giá trị của phần tử trong mảng -------- */
//tenMang[viTri] = 'giá trị mới';
mangTen[0] = 'Huy FA';
console.log(mangTen);

/* ----------------- Del: Xoá 1 giá trị ra khỏi mảng ----------- */
//tenMang.splice(vitri,1);
mangTen.splice(2, 1);
console.log(mangTen);
//-------------- Bài tập -----------
var arrNum = [12, 19, 19, 19, 17, 41, 38, 45, -7, -6 , -4,-2];
document.getElementById('btn-them-gia-tri').onclick = function () {
    //input number: giá trị người dùng nhập
    var num = document.getElementById('num').value;
    //output: arrNum
    //process
    arrNum.push(num);
    document.getElementById('mang-so').innerHTML = '[' + arrNum + ']';
}
//Bài tập 2: 
document.getElementById('btn-in-gia-tri').onclick = function () {
    //input: giá trị (vị trí) number
    var index = document.getElementById('vi-tri').value;
    //output
    var output = arrNum[index];

    document.getElementById('ket-qua-bai-2').innerHTML = output;
}

//Bài tập 3: 
document.getElementById('btn-in-vi-tri').onclick = function () {
    //input
    var giaTri = Number(document.getElementById('nhap-gia-tri').value);
    //output: '2' hoặc 'không tìm thấy'
    var output = '';
    //process:
    //arrNum = [12, 19, 20, 17, 41, 38, 45]
    for (var index = 0; index < arrNum.length; index++) {
        //Lấy ra lần lượt các giá trị trong mảng
        var ele = arrNum[index];
        if (giaTri === ele) { //khi giá trị trong mảng = giá trị người dùng nhập
            output = index;
        }
    }
    if (output === '') {
        document.getElementById('ket-qua-bai-3').innerHTML = 'Không tìm thấy!'
    } else {
        document.getElementById('ket-qua-bai-3').innerHTML = output;
    }
}


//Bài 4: 
// document.getElementById('btn-xoa-phan-tu').onclick = function(){
//     //input: giá trị người dùng : number
//     var giaTriXoa = Number(document.getElementById('gia-tri-xoa').value);
//     //output: arr | string
//     var output = '';
//     //process
//     var viTriXoa = -1;
//     for(var index= arrNum.length -1;index >= 0;index--){
//         var giaTri = arrNum[index]; // arrNumber[0] = 12
//         if(giaTriXoa === giaTri) {
//             viTriXoa = index;
//             arrNum.splice(viTriXoa,1);
//             // break;
//         }
//     }
//     if(viTriXoa !== -1){
//         // arrNum.splice(viTriXoa,1);
//         output = arrNum;
//     }else {
//         output = 'Không tìm thấy !'
//     }
//     document.getElementById('ket-qua-b4').innerHTML = output;
// }


document.getElementById('btn-xoa-phan-tu').onclick = function () {
    //input: giá trị người dùng : number
    var giaTriXoa = Number(document.getElementById('gia-tri-xoa').value);
    //output: arr | string
    var output = '';
    //process
    var viTriXoa = timViTri(arrNum, giaTriXoa);
    if (viTriXoa !== -1) {
        arrNum.splice(viTriXoa, 1);
        output = arrNum;
    } else {
        output = 'không tìm thấy !'
    }
    document.getElementById('ket-qua-b4').innerHTML = output;
}

//----------------- Truy xuất thẻ thông qua tag name ------------------------

var arrTagSection = document.getElementsByTagName('section');

arrTagSection[0].style.color = 'red';
//Thay đổi thẻ section 3 thành hello cybersoft
arrTagSection[2].innerHTML = 'hello cybersoft';

//Thay đổi 3 thẻ section với background color red
// arrTagSection[0].style.background = 'red';
// arrTagSection[1].style.background = 'red';
// arrTagSection[2].style.background = 'red';

for (var index = 0; index < arrTagSection.length; index++) {
    // arrTagSection[index].style.background = 'red';
    arrTagSection[index].className = 'bg-danger my-2';
}
//--------------------- Truy xuất thẻ có cùng class name ------------------
var arrTag = document.getElementsByClassName('content');
//gắn class bg-dark, text-white, p-3 cho các thẻ có class là content

for (var index = 0; index < arrTag.length; index++) {
    arrTag[index].className = 'content bg-dark text-white p-3 m-1';
}

/*
    -------------------- Truy xuất thẻ thông qua sector -----------------
    Truy xuất nhiều thẻ thì dùng querySelectorAll. Lưu ý: Khi truy xuất = queryAll thì kết quả trả về là 1 mảng các thẻ có trùng selector. Nếu không có thẻ nào chứa selector đó thì kết quả trả về là mảng rỗng [];
    Truy xuất 1 thẻ dùng querySelector . Lưu ý: Nếu có nhiều selector trùng nhau thì chỉ trả về thẻ đầu tiên, nếu k có selector nào thì trả về undefine.

*/
var arrTagContent = document.querySelectorAll('.content');

for (var index = 0; index < arrTagContent.length; index++) {
    arrTagContent[index].innerHTML = 'cybersoft ' + index;
}

// var tag = document.querySelector('#text');
// tag.innerHTML = 'Đây là thẻ đầu tiên';

//Bài 4: stringTemplate
var arrColor = ['red', 'green', 'blue'];

function renderSelectTag() {
    //output: string html <select .....
    var htmlString = '<select class="form-control w-25">';

    for (var index = 0; index < arrColor.length; index++) {
        var color = arrColor[index]; // red green blue


        htmlString += `<option value="${color}" style="color:${color}"> ${color} </option>`;
    }
    htmlString += '</select>';
    document.querySelector('#ket-qua-bai-4').innerHTML = htmlString;
}
renderSelectTag();