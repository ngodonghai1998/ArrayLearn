{ //Lý thuyết
// //Lưu trữ thông tin sinh viên (maSV, tenSinhVien, diaChi, soDienThoai, email)

// // var maSoSV = 100;
// // var tenSinhVien = 'Nguyễn Văn A';
// // var diaChi = '117 tan cang binh thanh';
// // var soDienThoai = '09090909';
// // var email = '123456@gmail.com';

// // var maSoSV1 = 200;
// // var tenSinhVien1 = 'Nguyễn Văn B';
// // var diaChi1 = '117 tan cang binh thanh';
// // var soDienThoai1 = '08080808';
// // var email1 = 'xyz@gmail.com';


// //Cách khai báo 1 biến đối tượng
// var  tru = {
//     mau: 100,
//     giap: 100,
//     sucDanh: 1000,
//     ten: 'Trụ A',
//     tanCong: function (){
//         console.log('Tấn công !');
//     }
// };

// //var arr = ['a','b'];
// //arr['0'];
// //arr[0];
// //Truy xuất đến biến trong đối tượng (thuộc tính:property)

// console.log(tru['mau']);
// console.log(tru.mau);

// tru.mau = 200;
// console.log('tru',tru);

// tru['ten'] = 'trụ nhà chính';
// console.log('tru',tru);

// //Truy xuất hàm trong đối tượng (phương thức: method)
// tru.tanCong();
// tru['tanCong']();
}

document.getElementById('btnHienThi').onclick = function(){
    //input: maSinhVien, tenSinhVien, loaiSinhVien
    //number: diemToan, diemVan;
    var sinhVien = {
        maSinhVien:'',
        tenSinhVien:'',
        loaiSinhVien:'',
        diemToan:'',
        diemVan:'',
        //function này chỉ giành cho sinhVien sử dụng.
        tinhDiemTrungBinh: function tinhDiemTrungBinh() {
            //this: trong đối tượng sẽ chính là biến trong đối tượng đó.
            var dtb = (this.diemToan*1 + sinhVien.diemVan*1)/2;
            return dtb;
        }
    };

    sinhVien.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVien.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVien.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    sinhVien.diemToan = document.getElementById('diemToan').value;
    sinhVien.diemVan = document.getElementById('diemVan').value;


    //output
    console.log(sinhVien);
    document.getElementById('text-maSinhVien').innerHTML = sinhVien.maSinhVien;
    document.getElementById('text-tenSinhVien').innerHTML = sinhVien.tenSinhVien;
    document.getElementById('text-loaiSinhVien').innerHTML = sinhVien.loaiSinhVien;

    //Khi gọi hàm sử dụng input thì phải gọi sau khi thuộc tính đã có giá trị.
    var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
    document.getElementById('text-diemTrungBinh').innerHTML = diemTrungBinh;

}

// function tinhDiemTrungBinh (dToan,dVan){
//     var dtb = (dToan*1+dVan*1)/2;
//     return dtb
// }