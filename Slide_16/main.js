const hoTen = document.getElementById('hoTen');

const thuNhap = document.getElementById('thuNhap');
const nguoiPhuThuoc = document.getElementById('nguoiPhuThuoc');

document.getElementById('tinhTienThueBtn').onclick = function (event) {
    event.preventDefault()

    // validation
    if (!hoTen.value || !thuNhap.value || !nguoiPhuThuoc.value || 
        nguoiPhuThuoc.value.includes('.') || nguoiPhuThuoc.value.includes(',')
        || Number(thuNhap.value) < 0 || Number(nguoiPhuThuoc.value) < 0) {
        alert('Xin mời nhập đầy đủ các trường. Thu nhập và người phụ thuộc không được là số âm! Người phụ thuộc phải là số nguyên dương')
    } else {
        var thuNhapChiuThue;
        var tienThuePhaiDong;

        function tinhThuNhapChiuThue(tongThuNhap, nguoiPhuThuoc) {
            thuNhapChiuThue = tongThuNhap - 4 - nguoiPhuThuoc * 1.6
            return thuNhapChiuThue
        }

        thuNhapChiuThue = tinhThuNhapChiuThue(Number(thuNhap.value), Number(nguoiPhuThuoc.value))
        
        function tienThuePhaiDongNhoHon0() {
            tienThuePhaiDong = 0
            return tienThuePhaiDong
        }

        function tienThuePhaiDongDen60(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 5/100
            return tienThuePhaiDong
        }

        function tienThuePhaiDongTu60Den120(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 10/100
            return tienThuePhaiDong
        }

        function tienThuePhaiDongTu120Den216(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 15/100
            return tienThuePhaiDong
        }

        function tienThuePhaiDongTu216Den384(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 20/100
            return tienThuePhaiDong
        }

        function tienThuePhaiDongTu384Den624(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 25/100
            return tienThuePhaiDong
        }

        function tienThuePhaiDongTu624Den960(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 30/100
            return tienThuePhaiDong
        }

        function tienThuePhaiDongTren960(thuNhapChiuThue) {
            tienThuePhaiDong = thuNhapChiuThue * 35/100
            return tienThuePhaiDong
        }

        function soTienThuePhaiDong(thuNhapChiuThue) {
            if (thuNhapChiuThue <= 0) {
                tienThuePhaiDong = tienThuePhaiDongNhoHon0()
            }

            if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60) {
                tienThuePhaiDong = tienThuePhaiDongDen60(thuNhapChiuThue)

            }

            if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
                tienThuePhaiDong = tienThuePhaiDongTu60Den120(thuNhapChiuThue)

            }

            if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 216) {
                tienThuePhaiDong = tienThuePhaiDongTu120Den216(thuNhapChiuThue)

            }

            if (thuNhapChiuThue > 216 && thuNhapChiuThue <= 384) {
                tienThuePhaiDong = tienThuePhaiDongTu216Den384(thuNhapChiuThue)

            }


            if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
                tienThuePhaiDong = tienThuePhaiDongTu384Den624(thuNhapChiuThue)

            }

            if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
                tienThuePhaiDong = tienThuePhaiDongTu624Den960(thuNhapChiuThue)

            }


            if (thuNhapChiuThue > 960) {
                tienThuePhaiDong = tienThuePhaiDongTren960(thuNhapChiuThue)
            }


            return tienThuePhaiDong
        }

        tienThuePhaiDong = soTienThuePhaiDong(thuNhapChiuThue);

        document.getElementById('outPutThue').innerHTML = `<h4 class="alert-success">Số tiền thuế của công dân ${hoTen.value} cần phải đóng là: ${tienThuePhaiDong} triệu đồng.</h4>`

    }
}







