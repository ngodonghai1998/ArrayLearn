import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js"

let menu = new Menu();
menu.layDanhSachMonAn(); //Lấy storage
menu.renderTableMonAn('#tbodyFood');
console.log(menu);

document.querySelector('#btnThemMon').onclick = function(){
    //input: MonAn
    var mon = new MonAn();
    var arrInput = document.querySelectorAll('.modal-body input, .modal-body select, .modal-body textarea');

    for (let input of arrInput) {
        let {id, value} = input;

        mon[id] = value;
    }

    console.log('monAn',mon);

    //output: stringHTML = '<tr>...</tr>';

    //Đưa món ăn vào thuộc tính danhSachMonAn của menu
    menu.themMonAn(mon);
    console.log('menu', menu);

    //render món ăn
    menu.renderTableMonAn('#tbodyFood');

    //Lưu vào Storage
    menu.luuDanhSachMonAn();
}

window.xoaMonAn = function(maMon) {
    //Lôi hàm xóa trong menu ra
    menu.xoaMonAn(maMon);

    //render lại danh sách món ăn trong table
    menu.renderTableMonAn('#tbodyFood');
}

window.suaMonAn = function(maMon) {
    //click vào nút chỉnh sửa và muốn nút chỉnh sửa btnThem click thì gọi trigger .click
    document.querySelector('#btnThem').click()


    //Dựa vào mã món lấy ra object món ăn
    let monChinhSua = menu.layThongTinMonAn(maMon);
    debugger;
    if (monChinhSua) {
        //Xử lý load object món ăn lên giao diện input
        var arrInput = document.querySelectorAll('.modal-body input, .modal-body select, .modal-body textarea');
        for (let input of arrInput) {
            let {id} = input;
            input.value = monChinhSua[id];
        }
    }

}

document.querySelector('#btnCapNhat').onclick = function() {

    //Lấy lại thông tin sau khi người dùng đã chỉnh sửa
    var monAnChinhSua = new MonAn();
    var arrInput = document.querySelectorAll('.modal-body input, .modal-body select, .modal-body textarea');

    for (let input of arrInput) {
        let {id, value} = input;

        monAnChinhSua[id] = value;
    }

    //Gọi phương thức cập nhật món ăn menu
    menu.capNhatMonAn(monAnChinhSua);
    //Render lại table mới
    menu.renderTableMonAn('#tbodyFood');

    //Gọi nút close click
    document.querySelector('button[data-dismiss]').click();

}