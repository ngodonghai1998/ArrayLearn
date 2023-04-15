//Lưu ý: model sẽ không dom đến view, muốn dom đến view phải truyền dưới dạng tham số. 

import { MonAn } from "./MonAn.js";

export class Menu {
    danhSachMonAn = []; //[{...},{...},{...},]

    themMonAn (mon) {
        this.danhSachMonAn.push(mon);
    }

    renderTableMonAn(selectTbody) {
        
        let htmlContent = '';
        for (let mon of this.danhSachMonAn) {
            let monAn = new MonAn(); //{maMon:'',tenMon:'',tinhGiaKM: f()}
            //merge object store
            //mon = {maMon:1, tenMon:'Cơm chiên'}
            Object.assign(monAn,mon);

            htmlContent += `<tr>
                <td>${mon.maMon}</td>
                <td>${mon.tenMon}</td>
                <td>${mon.loai}</td>
                <td>${mon.giaMon}</td>
                <td>${mon.khuyenMai}</td>
                <td>${mon.tinhGiaKhuyenMai()}</td>
                <td>${mon.tinhTrang}</td>
            </tr>`;
        }

        document.querySelector(selectTbody).innerHTML = htmlContent;
        return htmlContent;
    }

    luuDanhSachMonAn() {
        let stringDSMA = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem('DSMA', stringDSMA)
    }

    layDanhSachMonAn() {
        if(localStorage.getItem('DSMA')) {
            let stringDSMA = localStorage.getItem('DSMA');
            this.danhSachMonAn = JSON.parse(stringDSMA); 
        }
    }
}

/*
    let menu = {
        danhSachMonAn: [{maMon...},{maMon...},{maMon...}]
        themMon: function (mon){
            this.danhSachMonAn.push(mon);
        }
    }
*/

//Dùng phương pháp merge bằng cách sử dụng assign
let obA =  {
    id:'',
    tinhGiaKhuyenMai: function() {},
    id:1,
}

let obB =  {
    id: 1
}

Object.assign(obA,obB);




