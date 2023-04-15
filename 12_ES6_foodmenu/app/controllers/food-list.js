import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js"

let menu = new Menu();
menu.layDanhSachMonAn(); //Lấy storage
menu.renderTableMonAn('#tbody');
console.log(menu);

document.querySelector('#btnThemMon').onclick = function(){
    //input: MonAn
    var mon = new MonAn()
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
    menu.renderTableMonAn('#tbody');

    //Lưu vào Storage
    menu.luuDanhSachMonAn();
}