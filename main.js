/*
Mô hình sơ đồ 3 khối :
Đầu Vào:  Nhập vào 3 điểm thi, 1 điểm chuẩn, chọn khu vực, chọn đối tượng.
Xử lí : 
TH1 : Nếu 1 trong 3 điểm nhập vào có điểm = 0 lập tức xuất thí sinh thi trượt
TH2 : Tính tổng 3 điểm thí sinh nhập vào :
- Cộng với điểm của khu vực nếu có :
+ Khu A + 2  điểm, Khu B +1 điểm và Khu C + 0.5
- Cộng với điểm của đối tượng nếu có :
+ Đối tượng 1 cộng 2.5,  đối tượng 2 cộng 1.5 và đối tượng 3 cộng 1
Đem điểm tổng ở trên cộng với các điểm khu vực và điểm đối tượng nếu có sau đó đem đi so sánh với điểm chuẩn nếu lớn hơn 
hoăc bằng với điểm chuẩn thì thí sinh đó đậu 
Đầu ra : Xuất ra điểm của thí sinh và cho biết thí sinh đó đâu hay rớt 
*/

document.getElementById('btnKetQua').onclick = function () {
    var diemchuan = Number(document.getElementById('diemchuan').value);
    var ketQua = '';
    var tongDiem = 0;
    var diemMon = tinhDiem('diem1', 'diem2', 'diem3');
    tongDiem = diemMon + khuVuc('luaChonKhuVuc') + doiTuong('luaChonDoiTuong');
    if (tongDiem >= diemchuan) {
        ketQua = 'Bạn đã đậu ';
    }
    else {
        ketQua = ' Bạn đã trượt ';
    }
    if (diemMon == 0) {
        document.getElementById('ketQua_1').innerHTML = "Trượt do 0 là điểm liệt";
    }else if (diem1<=0 && diem1>10) {
        document.getElementById('ketQua_1').innerHTML = "Nhập sai điểm";
    }
     else {
        document.getElementById('ketQua_1').innerHTML = ketQua + ". Tổng điểm là : " + tongDiem;
    }


    // CÁC HÀM SỬ DỤNG
    function tinhDiem(diem1, diem2, diem3) {
        var diem1 = Number(document.getElementById(diem1).value);
        var diem2 = Number(document.getElementById(diem2).value);
        var diem3 = Number(document.getElementById(diem3).value);

        if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
            return 0;
        }
        var tongDiem = Number(diem1) + Number(diem2) + Number(diem3);
        return tongDiem
    }
    function khuVuc(idKhuVuc) {
        var khuVuc = document.getElementById(idKhuVuc).value;

        var congKhuVuc = 0;
        if (khuVuc === 'A') {
            congKhuVuc = congKhuVuc + 2;
        } else if (khuVuc === 'B') {
            congKhuVuc = congKhuVuc + 1;
        } else if (khuVuc === 'C') {
            congKhuVuc = congKhuVuc + 0.5;
        } else {
            congKhuVuc = 0;
        }
        return congKhuVuc;
    }
    function doiTuong(idDoiTuong) {
        var doiTuong = document.getElementById(idDoiTuong).value;

        var congDoiTuong = 0;
        if (doiTuong === 'D1') {
            congDoiTuong = congDoiTuong + 2.5;
        } else if (doiTuong === 'D2') {
            congDoiTuong = congDoiTuong + 1.5;
        } else if (doiTuong === 'D3') {
            congDoiTuong = congDoiTuong + 1;
        } else {
            congDoiTuong = 0;
        }
        return congDoiTuong;
    }
}


/**
 BÀI TẬP 2 : Tính tiền điện 
 Mô hình 3 khối :
 đầu vào : nhập vào tên người dùng và nhập vào số diện
 xử lí : Tùy theo số điện mà người dùng nhập vào ta sẽ xuất ra số điện
 vd : số điện nhập vào là N thì :
 TH1 : N <= 50 => N*500 vnđ
 TH2 : N <= 100 => N*650 vnđ 
 TH3 : N <= 200 => N*850 vnđ
 TH4 : N <= 350 => N*1110 vnđ 
 TH5 : N > 350 => N*1300 vnđ
 đầu ra : Xuất ra tên người dùng và tổng tiền điện phải trả 
 */
document.getElementById('btnTinhTongTien').onclick = function () {
    var tenNguoi = document.getElementById('tenNguoi').value;
    var tongTien = tienDien('soDien');
    document.getElementById('ketQua_b2').innerHTML = "Người dùng: " + tenNguoi + ". " + " Sô tiền phải trả là : " + tongTien.toLocaleString() + " vnđ";

    // Hàm thực thi
    function tienDien(id) {
        var soDien = Number(document.getElementById('soDien').value);
        var soTien = 0;
        if (soDien <= 50) {
            soTien = soDien * 500;
        } else if (soDien <= 100) {
            soTien = (50 * 500) + (soDien - 50) * 650;
        }
        else if (soDien <= 200) {
            soTien = (50 * 500) + (50 * 650) + (soDien - 100) * 850;
        } else if (soDien <= 350) {
            soTien = (50 * 500) + (50 * 650) + (100 * 850) + (soDien - 200) * 1100;
        } else {
            soTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soDien - 350) * 1300;
        }
        return soTien
    }
}