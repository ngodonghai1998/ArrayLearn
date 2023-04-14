export class MonAn {
    maMonAn = '';
    tenMon = '';
    loai = '';
    giaMon = '';
    khuyenMai = '';
    tinhTrang = '';
    hinhMon = '';
    moTa = '';
    tinhGiaKhuyenMai() {
        let giaMonKM = this.giaMon - (this.giaMon * this.khuyenMai / 100);
        return giaMonKM;
    }
}