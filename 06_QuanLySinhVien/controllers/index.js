//Mô hình MVC

/*
    M (Models): Nơi chứa các file js là prototype (class)
    V (view): Nơi chức các file giao diện (nơi chứa các file html)
    C (Controller): Các file điều hướng giao diện (index.html -> index.js, qlsp.html -> qlsp.js)
    ------------------------------------
    utils: folder chứa các file dùng chung cho dự án. (ví dụ: các method ở các dự án trước, hoặc libs (thư việc js))
    assets: là folder chức tài nguyên của hệ thống (img, audio, video, css, fonts, ...)
*/

//Khai báo một mảng:
var mangSinhVien = [];

document.getElementById('btnThemSinhVien').onclick = function() {
    //input
    var sv = new SinhVien();
    //console.log(sv);
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

    //output
    {
    // //B1: Tạo ra các thẻ tr
    // var tr = document.createElement('tr');

    // //B2: Tạo ra các thẻ td từ sv (thông tin sinh viên)
    // var tdMaSV = document.createElement('td');
    // tdMaSV.innerHTML = sv.maSinhVien;

    // var tdtenSinhVien = document.createElement('td');
    // tdtenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdsoDienThoai = document.createElement('td');
    // tdsoDienThoai.innerHTML = sv.soDienThoai;

    // var tdloaiSinhVien = document.createElement('td');
    // tdloaiSinhVien.innerHTML = sv.loaiSinhVien;

    // var btnXoa = document.createElement('button');
    // btnXoa.className = 'btn btn-danger';
    // btnXoa.innerHTML = 'Xóa'
    // btnXoa.onclick = function(){
    //     console.log(sv.maSinhVien);
    //     //xóa đi thẻ tr
    //     //parentElement là node() cha của thẻ đó, chấm tiếp parent là xóa tiếp cha của cha của thẻ đó và tiếp tục.
    //     //cách 1: remove: xóa thẻ đó
    //     //cách 2: closest: truy xuất đến selector gần nhất
    //     btnXoa.closest('tr').remove();
    //     // btnXoa.parentElement.parentElement.remove();
    // }

    // var tdchucNang = document.createElement('td');
    // tdchucNang.appendChild(btnXoa);


    // //Đưa các thẻ td vào tr
    // tr.appendChild(tdMaSV);
    // tr.appendChild(tdtenSinhVien);
    // tr.appendChild(tdEmail);
    // tr.appendChild(tdsoDienThoai);
    // tr.appendChild(tdloaiSinhVien);
    // tr.appendChild(tdchucNang);

    // //Đưa thẻ tr lên  giao diện
    // document.querySelector('tbody').appendChild(tr);
    }
    //khai báo mảng: var htmlString = '';
    // var htmlString = `
    //     <tr>
    //         <td>${sv.maSinhVien}</td>
    //         <td>${sv.tenSinhVien}</td>
    //         <td>${sv.email}</td>
    //         <td>${sv.soDienThoai}</td>
    //         <td>${sv.loaiSinhVien}</td>
    //         <td>
    //             <button class="btn btn-danger">Xóa</button>
    //         </td>
    //     </tr>
    // `;

    // document.querySelector('tbody').innerHTML += htmlString;

    mangSinhVien.push(sv);
    console.log(mangSinhVien);

    //Từ mảng tạo ra giao diện
    renderTableSinhVien(mangSinhVien);    
}

function renderTableSinhVien(arrSinhVien) {
    //input: mảng sinh viên
    var htmlString = '';
    for (var index = 0; index < arrSinhVien.length; index++) {
        var sv = arrSinhVien[index];

        //Gán hàm xóa vào trong button
        htmlString += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${index}')">Xóa</button>
                    <button class="btn btn-danger" onclick="xoaSinhVienTheoMa('${sv.maSinhVien}')">Xóa mã</button>
                </td>
            </tr>
        `;
    }


    document.querySelector('tbody').innerHTML = htmlString;
    return htmlString;
}

//mangSinhVien.splice(index,1)
function xoaSinhVien(indexDel){
    //Xử lý xóa một object trong mảng dựa vào giá trị index
    mangSinhVien.splice(indexDel,1);
    //Gọi hàm tạo lại table sinh viên
    renderTableSinhVien(mangSinhVien);
}

//Xóa một dòng theo mã sinh viên
function xoaSinhVienTheoMa(maSVClick){
    // alert(maSVClick);
    var indexDel = -1
    for (var index = 0; index < mangSinhVien.length; index ++){
        if (mangSinhVien[index].maSinhVien === maSVClick){
            indexDel = index;
            break;
        }
    }
    mangSinhVien.splice(indexDel,1);
    renderTableSinhVien(mangSinhVien);
}