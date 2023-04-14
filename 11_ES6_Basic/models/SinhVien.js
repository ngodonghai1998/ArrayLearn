//Format của object (prototype - lớp đối tượng - class)
function SinhVien() {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.hienThiThongTin = function () {
        console.log(this.maSinhVien);
        console.log(this.tenSinhVien);
    }
}

//ES6: prototype trong ES6
class SinhVienES6 {
    //Thuộc tính
    maSinhVien = '';
    tenSinhVien = '';

    constructor(maSv, tenSv) {
        //Hàm khởi tạo
        this.maSinhVien = maSv;
        this.tenSinhVien = tenSv;
    }
    //Phương thức
    hienThiThongTin() {
        // console.log(this.maSinhVien);
        // console.log(this.tenSinhVien);
    }
}

let sv = new SinhVienES6(1, 'Nguyễn Văn A');

//console.log(sv);

//Khai báo class cha
class NguoiDung {
    taiKhoan = '';
    matKhau = '';
    hoTen = '';
    soDienThoai = '';
    hienThiThongTin () {
        console.log(this.taiKhoan);
        console.log(this.matKhau);
    }
}

class GiangVien extends NguoiDung {
    soTaiKhoan = '';
    lopGiangDay = [];
    chamCong() {
        return 10000;
    }
}

export let gv = new GiangVien();
console.log('gv', gv);

//Mở rộng thuộc tính và phương thức khi không được phép sửa class

// class GiangVienLopHoc extends GiangVien {} đây là cách 1

//Cách 2:
GiangVien.prototype.tinhLuong =function () {
    console.log('Tính lương');
}

export let gv2 = new GiangVien();
console.log('gv2',gv2);