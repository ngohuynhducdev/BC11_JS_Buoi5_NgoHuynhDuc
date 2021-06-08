
const hoTenChuHo = document.getElementById('hoTenChuHo');

const Kw = document.getElementById('Kw');

const outPutTienDien = document.getElementById('outPutTienDien');



document.getElementById('tinhTienDienBtn').onclick = function (event) {
    event.preventDefault();

    // validation
    if (!hoTenChuHo.value || !Kw.value || Number(Kw.value) < 0) {
        alert('Cần điền đầy đủ các trường. Số Kw điện không được là số âm!')
    } else {
        var tienDien;

        function tienDien50KwDau(Kw) {
            tienDien = Kw * 500
            return tienDien
        }

        function tienDien50KwTiepTheo(Kw) {
            tienDien = 50 * 500 + (Kw-50) * 650
            return tienDien
        }


        function tienDien100KwTiepTheo(Kw) {
            tienDien = 50 * 500 + 50 * 650 + (Kw - 100) * 850
            return tienDien
        }

        function tienDien150KwTiepTheo(Kw) {
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (Kw - 200) * 1100
            return tienDien
        }

        function tienDienKwConLai(Kw) {
            tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (Kw - 350) * 1300
            return tienDien
        }

        function tinhTienDien (Kw) {
            if (Kw <= 50) {
                tienDien = tienDien50KwDau(Kw)
            }

            if (Kw > 50 && Kw <= 100) {
                tienDien = tienDien50KwTiepTheo (Kw)
            }

            if (Kw > 100 && Kw <= 200) {
                tienDien = tienDien100KwTiepTheo(Kw)
            }

            if (Kw > 200 && Kw <= 350) {
                tienDien = tienDien150KwTiepTheo(Kw)
            }

            if (Kw > 350 ) {
                tienDien = tienDienKwConLai(Kw)
            }

            return tienDien
        }


        tienDien = tinhTienDien(Number(Kw.value))
        document.getElementById('outPutTienDien').innerHTML = `<h4 class= "alert-success">Tiền điện chủ hộ: ${hoTenChuHo.value} cần phải trả là: ${tienDien.toLocaleString()} đồng.</h4>`
    }
}







