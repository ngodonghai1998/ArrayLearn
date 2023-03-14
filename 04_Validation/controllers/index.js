//Mô hình MVC
/*
    M (models): Nơi chứa các file js là prototype (class)
    V (views): Nơi chứa các file giao diện (.html)
    C (controllers): Các file điều hướng giao diện (index.html -> index.js, qlsp.html => qlsp.js)
    ---------------------------------
    util: Chứa các file dùng chung cho dự án (ví dụ: các method sử dụng ở các dự án trước, hoặc libs(thư viện js) )
    assets: là folder chứa tài nguyên của hệ thống (img,audio, video,css,font, ...)
*/

var mangSinhVien = [];
var kiemTra = new Validation();

// var regex = /^[A-Z a-z]+$/;

// var res = regex.test('nguyen van ân');

// console.log(res);


document.getElementById('btnThemSinhVien').onclick = function () {
    //input: sv: SinhVien
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    console.log(sv);
    //Kiểm tra dữ liệu đầu vào 
    var valid = true;
    valid = kiemTra.kiemTraRong(sv.maSinhVien,'error-required-maSinhVien','Mã sinh viên') & kiemTra.kiemTraRong(sv.tenSinhVien,'error-required-tenSinhVien','Tên sinh viên') & kiemTra.kiemTraRong(sv.email,'error-required-email','Email');
    //Kiểm tra định dạng ký tự
    valid = valid & kiemTra.kiemTraKyTu(sv.tenSinhVien,'error-allLetter-tenSinhVien','Tên sinh viên');
    //Kiểm tra email
    valid = valid & kiemTra.kiemTraEmail(sv.email,'error-email','Email');
    //Kiểm tra sô
    valid = valid & kiemTra.kiemTraSo(sv.soDienThoai,'error-required-soDienThoai','Số diện thoại');
    //Kiểm tra độ dài
    valid = valid & kiemTra.kiemTraDoDai(sv.maSinhVien,'error-min-max-length-maSinhVien','Mã sinh viên',4,6);
    //Kiểm tra giá trị
    valid = valid & kiemTra.kiemTraGiaTri(sv.diemToan,'err-min-max-value-toan','Điểm toán',0,10) & kiemTra.kiemTraGiaTri(sv.diemLy,'err-min-max-value-ly','Điểm lý',0,10) & kiemTra.kiemTraGiaTri(sv.diemHoa,'err-min-max-value-hoa','Điểm hoá',0,10);




    // console.log(valid);
   
    if(!valid){
        return;
    }


    //output: 
    //Mỗi lần click thêm sinh viên => thêm vào mảng sinh viên
    mangSinhVien.push(sv);
    console.log('mangSinhVien', mangSinhVien)
    //Từ mảng tạo ra giao diện
    renderTableSinhVien(mangSinhVien);
    //Lưu mảng sinh viên vào store
    luuLocalStrage();
    setCookie('name', JSON.stringify(mangSinhVien), 25);


}


function renderTableSinhVien(arrSinhVien) { //input là mangSinhVien = [{maSinhVien:1,tenSinhVien:'A'},{maSinhVien:2,tenSinhVien:'B'},{}]
    var htmlString = '';
    for (var index = 0; index < arrSinhVien.length; index++) {
        var sv = arrSinhVien[index];
        htmlString += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${index}')">Xoá</button>
                    <button class="btn btn-danger" onclick="xoaSinhVienTheoMa('${sv.maSinhVien}')">Xoá Mã</button>
                    <button class="btn btn-primary mx-2" onclick="layThongTin('${sv.maSinhVien}')">Chỉnh sửa</button>

                </td>
            </tr>
        `
    }
    document.querySelector('tbody').innerHTML = htmlString;
    return htmlString; ///'<tr>.....</tr>'
}

//                  0               1               2
// mangSinhVien= [{maSinhVien:1,tenSinhVien:'Nguyễn Văn A',.....},{maSinhVien:2},{maSinhVien:3}]
function layThongTin(maSinhVienClick) {
    document.getElementById('maSinhVien').disabled = true;
    document.getElementById('btnThemSinhVien').disabled = true;
    // alert(maSinhVienClick);
    for (var index = 0; index < mangSinhVien.length; index++) {
        if (mangSinhVien[index].maSinhVien === maSinhVienClick) {
            //in thông tin sinh viên tìm thấy lên giao diện
            document.getElementById('maSinhVien').value = mangSinhVien[index].maSinhVien;
            document.getElementById('tenSinhVien').value = mangSinhVien[index].tenSinhVien;
            document.getElementById('email').value = mangSinhVien[index].email;
            document.getElementById('soDienThoai').value = mangSinhVien[index].soDienThoai;
            document.getElementById('loaiSinhVien').value = mangSinhVien[index].loaiSinhVien;
            document.getElementById('diemToan').value = mangSinhVien[index].diemToan;
            document.getElementById('diemLy').value = mangSinhVien[index].diemLy;
            document.getElementById('diemHoa').value = mangSinhVien[index].diemHoa;
            document.getElementById('diemRenLuyen').value = mangSinhVien[index].diemRenLuyen;
            break;
        }
    }
}



document.getElementById('btnLuuThongTin').onclick = function () {
    //Input: Lấy thông tin người dùng từ giao diện đã thay đổi đưa vào object

    var sinhVienEdit = new SinhVien();
    sinhVienEdit.maSinhVien = document.getElementById('maSinhVien').value;
    sinhVienEdit.tenSinhVien = document.getElementById('tenSinhVien').value;
    sinhVienEdit.email = document.getElementById('email').value;
    sinhVienEdit.soDienThoai = document.getElementById('soDienThoai').value;
    sinhVienEdit.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    sinhVienEdit.diemToan = document.getElementById('diemToan').value;
    sinhVienEdit.diemLy = document.getElementById('diemLy').value;
    sinhVienEdit.diemHoa = document.getElementById('diemHoa').value;
    sinhVienEdit.diemRenLuyen = document.getElementById('diemRenLuyen').value;

    console.log('sinhVienEdit', sinhVienEdit);
    //Tìm ra sinh viên trong mảng => duyệt mảng lấy mã so sánh
    for (var index = 0; index < mangSinhVien.length; index++) {
        if (mangSinhVien[index].maSinhVien === sinhVienEdit.maSinhVien) {
            //Tìm thấy object sinh viên trong mảng => gán các giá trị của object trong mảng = object edit
            mangSinhVien[index].tenSinhVien = sinhVienEdit.tenSinhVien;
            mangSinhVien[index].email = sinhVienEdit.email;
            mangSinhVien[index].soDienThoai = sinhVienEdit.soDienThoai;
            mangSinhVien[index].diemToan = sinhVienEdit.diemToan;
            mangSinhVien[index].diemLy = sinhVienEdit.diemLy;
            mangSinhVien[index].diemHoa = sinhVienEdit.diemHoa;
            mangSinhVien[index].diemRenLuyen = sinhVienEdit.diemRenLuyen;
            mangSinhVien[index].loaiSinhVien = sinhVienEdit.loaiSinhVien;
            break;
        }
    }
    //Gọi hàm render sinh viên dựa trên mảng có phần tử đã thay đổi
    renderTableSinhVien(mangSinhVien);
    //Lưu store sau khi thay đổi
    luuLocalStrage();
    //Lưu xong mới bật 2 nút button#btnThemSinhVien và input#maSinhVien
    document.getElementById('maSinhVien').disabled = false;
    document.getElementById('btnThemSinhVien').disabled = false;



}






//                 0  1  2
//mangSinhVien = [{},{},{}]
function xoaSinhVien(indexDel) {
    //Xử lý xoá object sinh viên trên mảng dựa vào index
    mangSinhVien.splice(indexDel, 1);
    //Gọi hàm tạo lại table sinh viên
    renderTableSinhVien(mangSinhVien);
}
//mangSinhVien = [{maSinhVien:1},{maSinhVien:2},{maSinhVien:3}]

function xoaSinhVienTheoMa(maSVClick) {
    // alert(maSVClick);
    var indexDel = -1;
    for (var index = 0; index < mangSinhVien.length; index++) {
        if (mangSinhVien[index].maSinhVien === maSVClick) {
            indexDel = index;
            break;
        }
    }
    //Xoá đi sinh viên tại vị trí đó trong mảng
    mangSinhVien.splice(indexDel, 1);
    //Tạo lại bảng table Sinh Viên
    renderTableSinhVien(mangSinhVien);
}

/*
    localstorage: Dùng để lưu trữ dữ liệu tại máy tính người dùng (client) khi tắt máy hoặc browser vẫn còn lưu.
    sessionStorage: Dùng để lưu trữ dữ liệu tại máy tính người dùng (client) tuy nhiên khi tắt tất cả tab của web đó thì tự xoá.
*/

//Viết hàm lưu trữ dữ liệu vào localstorage
function luuLocalStrage() {
    //Lưu mangSinhVien vào localstorage
    //B1: Biến đổi mangSinhVien thành string
    var stringMangSinhVien = JSON.stringify(mangSinhVien);
    //B2: Lưu vào localstorage
    localStorage.setItem('mangSinhVien', stringMangSinhVien);

}

function layStore() {

    if (localStorage.getItem('mangSinhVien')) {
        var stringMangSinhVien = localStorage.getItem('mangSinhVien');
        console.log(stringMangSinhVien);
        //Chuyển dữ string liệu về dạng object
        mangSinhVien = JSON.parse(stringMangSinhVien);

        console.log(mangSinhVien);
        //Gọi hàm tạo giao diện từ mảng
        renderTableSinhVien(mangSinhVien);
    }

}
layStore();

//Định nghĩa sự kiện gõ chữ vào ô input
document.getElementById('txtTuKhoa').oninput = function () {
    //input: từ khoá
    var tuKhoa = document.getElementById('txtTuKhoa').value;

    //toLowerCase(): biến đổi tất cả chữ hoa thành thường
    //trim(): loại bỏ khoảng trống đầu và cuối của chuỗi     a    => a
    tuKhoa = stringToSlug(tuKhoa);
    //output: mangSinhVienTimKiem = [];
    var mangSinhVienTimKiem = [];
    for (var index = 0; index < mangSinhVien.length; index++) {
        //Mỗi lần duyệt lấy ra 1 sinh viên trong mảng
        var sv = mangSinhVien[index];
        //Biến đổi tên sinh viên thành chữ không dấu
        var hoTen = stringToSlug(sv.tenSinhVien);
        //Lấy ra tên so sánh với từ khoá
        if (hoTen.search(tuKhoa) !== -1) {
            //tìm thấy
            mangSinhVienTimKiem.push(sv);
        }
    }

    renderTableSinhVien(mangSinhVienTimKiem);
}
function stringToSlug(title) { 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}


// ăằẵẳạằắ => a

// tuKhoa.replace('ă','a');

//Từ khoá
//TRẦN => trần

//tên sinh viên
//Trần văn A => trần văn a




// var s = 'soft123';

// var title = 'cybersoft';



// console.log(title.search(s));



// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
// function getCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }
// function eraseCookie(name) {
//     document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }