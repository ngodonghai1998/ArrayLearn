// console.log(axios);


// Phương thức GET: Lấy dữ liệu từ sinh viên về.
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
