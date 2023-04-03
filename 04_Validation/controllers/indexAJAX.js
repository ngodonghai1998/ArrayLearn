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
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoá</button>
                    <button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')">Sửa</button>
                </td>
            </tr>
        `
    }
    document.querySelector('tbody').innerHTML = htmlString;
    return htmlString; ///'<tr>.....</tr>'
}


// console.log(axios);


// --------------------Phương thức GET: Lấy dữ liệu từ sinh viên về-------------------
function layDanhSachSinhVien() {
    //Call API
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //Đường link API hoặc file local
        method: 'GET',
        responseType: 'json',
    })

    //Thành công
    promise.then(function(res){
        console.log('Kết quả', res.data);
        renderTableSinhVien(res.data);
    })

    //Thất bại
    promise.catch(function(err) {
        console.error(err);
    })
}

// Cách 1: Sử dụng onclick để lấy dữ liệu
// window.onclick = function() {
//     layDanhSachSinhVien();
// }


//Cách 2: Sử dụng onload để lấy dữ liệu
window.onload = function() {
    //Sự kiện khi browser load xong dữ liệu.
    layDanhSachSinhVien();

}

// Cách 3: Sử dụng AddEventListener
// window.addEventListener('load', function() {
//     layDanhSachSinhVien();
// }) 


// ----------------- Phương thức POST: Gửi dữ liệu về server ------------------
document.getElementById('btnThemSinhVien').onclick = function() {
    //Lấy dữ liệu từ người dùng nhập vào và tạo ra object như backend yêu cầu
    var svThem = new SinhVien();
    // console.log(svThem);

    svThem.maSinhVien = document.getElementById('maSinhVien').value;
    svThem.tenSinhVien = document.getElementById('tenSinhVien').value;
    svThem.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    svThem.email = document.getElementById('email').value;
    svThem.soDienThoai = document.getElementById('soDienThoai').value;
    svThem.diemToan = document.getElementById('diemToan').value;
    svThem.diemLy = document.getElementById('diemLy').value;
    svThem.diemHoa = document.getElementById('diemHoa').value;
    svThem.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    //Kiểm tra Validation rồi mới gọi API

    console.log(svThem);

    //Gọi API để đưa dữ liệu từ server (BE API)
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST',
        responseType: 'json',
        // data: {
        //     "maSinhVien": 0,
        //     "tenSinhVien": "string",
        //     "loaiSinhVien": "string",
        //     "diemToan": 0,
        //     "diemLy": 0,
        //     "diemHoa": 0,
        //     "diemRenLuyen": 0,
        //     "email": "string",
        //     "soDienThoai": "string"
        // }
        data: svThem, //Dữ liệu theo format backend yêu cầu.

    })

    //Thành công
    promise.then(function(res) {
        console.log(res.data);
        // window.location.reload(); Cái này dùng để reload F5 lại trang

        //Đơn giản hơn là lấy lại nghiệp vụ sinh viên bằng cách gọi lại hàm layDanhSachSinhVien và nếu lấy thành công sẽ trả kết quả về.
        layDanhSachSinhVien();
    })

    //Thất bại
    promise.catch(function(err) {
        //Lỗi backend sẽ trả ra .respond.data (nếu log không ra => backend chưa xử lý lỗi này)
        console.error(err.response.data);
    })
}

// ----------------- Phương thức DELETE: Xóa dữ liệu trên server ------------------
function xoaSinhVien(maSinhVien) {

    //Gửi mã sinh viên về API và xóa của backend dev

    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
        method: 'DELETE',
        responseType: 'json',
    })

    //Thành công
    promise.then(function(res) {
        console.log(res.data);

        //Gọi API load lại danh sách sinh viên mới từ server
        layDanhSachSinhVien();
    });

    //Thất bại
    promise.catch(function(err) {
        console.log(err.response.data);
    });
}


//Hàm setInterval là hàm có sẵn của js dùng để ta chạy một hàm sau một khoảng thời gian cài đặt.
setInterval(function() {
    layDanhSachSinhVien();
}, 5000);


// ----------------- Phương thức GET, UPDATE: Cập nhật dữ liệu trên server ------------------

async function chinhSua(maSinhVien) {

    //Call API
    var res = await axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
        method: 'GET',
        

    });

    console.log(res.data);
    var sinhVienEdit = res.data;

    document.getElementById('maSinhVien').value = sinhVienEdit.maSinhVien;
    document.getElementById('tenSinhVien').value = sinhVienEdit.tenSinhVien;
    document.getElementById('loaiSinhVien').value = sinhVienEdit.loaiSinhVien;
    document.getElementById('soDienThoai').value = sinhVienEdit.soDienThoai;
    document.getElementById('email').value = sinhVienEdit.email;
    document.getElementById('diemToan').value = sinhVienEdit.diemToan;
    document.getElementById('diemLy').value = sinhVienEdit.diemLy;
    document.getElementById('diemHoa').value = sinhVienEdit.diemHoa;
    document.getElementById('diemRenLuyen').value = sinhVienEdit.diemRenLuyen;
    document.getElementById('maSinhVien').disabled = true;
    document.getElementById('btnThemSinhVien').disabled = true;


    // promise.then(function(res) {
    //     console.log(res.data);
    //     // console.log('Thành công');
    // });

    // promise.catch(function(err){
    //     console.log(err);
    // });

    // console.log('123');

    //Khi console log trong promise và 123 thì lúc nào 123 cũng xuất hiện trước do axios là hàm bất đồng bộ. Nghĩa là khi axios request đến server thì lúc đó code có thể chạy tiếp. Còn lúc request có thể bị chậm hay ko request được.
    //Để đồng bộ các phần bị mất đồng bộ, có thể sử dụng async

};


// ----------------- Phương thức PUT: Cập nhật dữ liệu trên server ------------------

document.getElementById('btnLuuThongTin').onclick = async function() {
    var svUpdate = new SinhVien();

    //Lấy các giá trị trên giao diện mà người dùng đã sửa đổi
    svUpdate.maSinhVien = document.getElementById('maSinhVien').value;
    svUpdate.tenSinhVien = document.getElementById('tenSinhVien').value;
    svUpdate.loaiSinhVien = document.getElementById('loaiSinhVien').value;
    svUpdate.email = document.getElementById('email').value;
    svUpdate.soDienThoai = document.getElementById('soDienThoai').value;
    svUpdate.diemToan = document.getElementById('diemToan').value;
    svUpdate.diemLy = document.getElementById('diemLy').value;
    svUpdate.diemHoa = document.getElementById('diemHoa').value;
    svUpdate.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    

    //call API gửi dữ liệu về server
    //Promise mới sử dụng await được.
    try {
        var res = await axios({
            url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${svUpdate.maSinhVien}`,
            method: 'PUT',
            responseType: 'json',
            data: svUpdate,

        });
    
        // console.log(res.data);
        layDanhSachSinhVien();
        document.getElementById('maSinhVien').disabled = false;
        document.getElementById('btnThemSinhVien').disabled = false;
    }catch(err) {
        console.log({err});
    }

}


//Call back function: là hàm đóng vai trò là tham số  truyền vào hàm khác 

function renderContent(callbackFunc) {
    document.getElementById('content').innerHTML = callbackFunc('Hello Ajinomoto');
}

function renderTheP (tieuDe) {
    return `<p> ${tieuDe} </p>`;
}

function renderSection (tieuDe) {
    return `<section class="bg-dark text-white p-5">${tieuDe}</section>`;
}

renderContent(function(title) {
    return `<article class="bg-success text-white p-5">${title}</section>`
});
















