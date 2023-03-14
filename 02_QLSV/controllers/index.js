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
    //output: 
    //Mỗi lần click thêm sinh viên => thêm vào mảng sinh viên
    mangSinhVien.push(sv);
    console.log('mangSinhVien',mangSinhVien)
    //Từ mảng tạo ra giao diện
    renderTableSinhVien(mangSinhVien);
}


function renderTableSinhVien(arrSinhVien) { //input là mangSinhVien = [{maSinhVien:1,tenSinhVien:'A'},{maSinhVien:2,tenSinhVien:'B'},{}]
    var htmlString = '';
    for(var index = 0 ; index < arrSinhVien.length; index++) {
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
                </td>
            </tr>
        `
    }
    document.querySelector('tbody').innerHTML = htmlString;
    return htmlString; ///'<tr>.....</tr>'
}
//                 0  1  2
//mangSinhVien = [{},{},{}]
function xoaSinhVien(indexDel) {
    //Xử lý xoá object sinh viên trên mảng dựa vào index
    mangSinhVien.splice(indexDel,1);
    //Gọi hàm tạo lại table sinh viên
    renderTableSinhVien(mangSinhVien);
}
//mangSinhVien = [{maSinhVien:1},{maSinhVien:2},{maSinhVien:3}]

function xoaSinhVienTheoMa(maSVClick) {
    // alert(maSVClick);
    var indexDel = -1;
    for(var index = 0 ; index < mangSinhVien.length;index++){
        if(mangSinhVien[index].maSinhVien === maSVClick) {
            indexDel = index;
            break;
        }
    }
    //Xoá đi sinh viên tại vị trí đó trong mảng
    mangSinhVien.splice(indexDel,1);
    //Tạo lại bảng table Sinh Viên
    renderTableSinhVien(mangSinhVien);
}

















  // //B1: Tạo ra thẻ tr
    // var tr = document.createElement('tr');
    // //B2: Tạo ra các thẻ td từ sv(thông tin sinh viên)
    // var tdMaSV = document.createElement('td');
    // tdMaSV.innerHTML = sv.maSinhVien;

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdSDT = document.createElement('td');
    // tdSDT.innerHTML = sv.soDienThoai;

    // var tdLoaiSV = document.createElement('td');
    // tdLoaiSV.innerHTML = sv.loaiSinhVien;
    // var btnXoa = document.createElement('button');
    // btnXoa.className = 'btn btn-danger';
    // btnXoa.innerHTML = 'Xoá';
    // btnXoa.onclick = function () {
    //     //Xoá đi thẻ tr chứa nút này
    //     //parentElement: node(thẻ) cha của thẻ đó
    //     //remove(): xoá thẻ đó
    //     //closest(selector): truy xuất đến selector gần nhất
    //     btnXoa.closest('tr').remove();
    // }
    // var tdChucNang = document.createElement('td');
    // tdChucNang.appendChild(btnXoa);
    // //Đưa các thẻ td vào tr
    // tr.appendChild(tdMaSV);
    // tr.appendChild(tdTenSinhVien);
    // tr.appendChild(tdEmail);
    // tr.appendChild(tdSDT);
    // tr.appendChild(tdLoaiSV);
    // tr.appendChild(tdChucNang);

    // //Đưa thẻ tr lên giao diện
    // document.querySelector('tbody').appendChild(tr);