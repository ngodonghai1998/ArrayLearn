//Phân tích bài tập này có bao nhiêu đối tượng và bao gồm những thuộc tính gì cần lưu.
var nhanVien = {
    maNhanVien:'',
    tenNhanVien:'',
    chucVu:'',
    luongCanBan:'',
    heSoLuong:'',
    tinhLuong: function(){
        var tongLuong = this.luongCanBan * this.heSoLuong;
        return tongLuong;
    }
}

document.getElementById('btnHienThi').onclick = function (){
    //input
    nhanVien.maNhanVien = document.getElementById('maNhanVien').value;
    nhanVien.tenNhanVien = document.getElementById('tenNhanVien').value;
    nhanVien.heSoLuong = document.getElementById('chucVu').value;
    nhanVien.luongCanBan = document.getElementById('luongCanBan').value;
    // nhanVien.luongCanBan = document.getElementById('luongCanBan').value;


    var tagSelect = document.getElementById('chucVu');
    var viTriTheChon = tagSelect.selectedIndex

    //              0      1      2
    //options = [option,option,option]
    var chucVu = tagSelect.options[viTriTheChon].innerHTML;
    nhanVien.chucVu = chucVu;
    console.log(nhanVien.chucVu);

    //output
    document.getElementById('text-maNhanVien').innerHTML = nhanVien.maNhanVien;
    document.getElementById('text-tenNhanVien').innerHTML = nhanVien.tenNhanVien;
    document.getElementById('text-chucVu').innerHTML = nhanVien.chucVu;

    document.getElementById('text-tongLuong').innerHTML = nhanVien.tinhLuong();
    

}
