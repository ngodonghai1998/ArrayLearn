import { MonAn } from "./MonAn.js";

//Lưu ý: model sẽ không dom đến view, muốn dom đến view phải truyền dưới dạng tham số
export class Menu {
    danhSachMonAn = []; // [{,,,},{...},{....}]
    themMonAn(mon) {
        this.danhSachMonAn.push(mon);
    }
    renderTableMonAn(selectorTbody) {
        let htmlContent = '';
        for (let mon of this.danhSachMonAn) {
            let monAn = new MonAn(); // {maMon:'',tenMon:'',tinhGiaKM:f()};
            //mon = {maMon:1, tenMon:'Cơm Chiên'}
            //merge object store
            Object.assign(monAn, mon);
            htmlContent += `
                <tr>
                    <td>${monAn.maMonAn}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.loai}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.khuyenMai}</td>
                    <td>${monAn.tinhGiaKhuyenMai()}</td>
                    <td>${monAn.tinhTrang}</td>
                    <td>
                        <button class="btn btn-danger" onclick="xoaMonAn('${monAn.maMonAn}')">X</button>

                        <button class="btn btn-primary mx-2" onclick="suaMonAn('${monAn.maMonAn}')">
                        <i class="fa fa-edit"></i>
                        </button>
                    </td>
                </tr>
            `
        }
        document.querySelector(selectorTbody).innerHTML = htmlContent;
        return htmlContent;
    }
    luuDanhSachMonAn() {
        let stringDSMA = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem('DSMA', stringDSMA);
    }
    layDanhSachMonAn() {
        if (localStorage.getItem('DSMA')) {
            let stringDSMA = localStorage.getItem('DSMA');
            this.danhSachMonAn = JSON.parse(stringDSMA);
        }
    }
    xoaMonAn(maMon) {
        for (let index in this.danhSachMonAn) {
            if (this.danhSachMonAn[index].maMonAn === maMon) {
                this.danhSachMonAn.splice(index, 1);
                break;
            }
        }
    }

    layThongTinMonAn(maMon) {
        for (let mon of this.danhSachMonAn) {
            if (mon.maMonAn === maMon) {
                return mon;
            }
        }

        return undefined;
    }

    capNhatMonAn(monAnChinhSua) {
        //Tìm ra món ăn trong danh sách món ăn 
        for (let monAn of this.danhSachMonAn) {
            //monAn = {maMonAn:'1',tenMonAn:'Cơm chiên'} 
            //monAnChinhSua = {maMonAn:'1',tenMonAn:'Cơm chiên cá mặn'}
            if (monAn.maMonAn == monAnChinhSua.maMonAn) {
                // monAn.tenMon = monAnChinhSua.tenMon;
                for (let key in monAn) {
                    monAn[key] = monAnChinhSua[key];
                }
            }
        }
    }


}


/*
    let menu = {
        danhSachMonAn: [{maMon:..,},{maMon:..,}]
        themMon: function(mon) {
            this.danhSachMon.push(mon);
        },
        luuDanhSach: function () {

        }
    }


*/

let obA = {
    id: '',
    tinhGiaKhuyenMai: function () {

    },
}


let obB = {
    id: 1
}

Object.assign(obA, obB); // => {id:'',tinhGiaKhuyenMai: f() , id: 1}