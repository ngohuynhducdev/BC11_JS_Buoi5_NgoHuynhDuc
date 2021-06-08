const dienChuan = document.getElementById('dienChuan');
const diemMon1 = document.getElementById('diemMon1');
const diemMon2 = document.getElementById('diemMon2');
const diemMon3 = document.getElementById('diemMon3');

const khuVuc = document.getElementById('khuVuc');
const doiTuong = document.getElementById('doiTuong');

document.getElementById('ketQuaBtn').onclick = function (event) {
    event.preventDefault()

    // validation
    if (!dienChuan.value || !diemMon1.value || !diemMon2.value || !diemMon3.value
        || Number(dienChuan.value) < 0 || Number(diemMon1.value) < 0 || Number(diemMon2.value) < 0 || Number(diemMon3.value) < 0) {
        alert('Bắt buộc nhập đầy đủ thông tin các trường. Điểm số không được là số âm!')
    } else {
        var tongDiem;
        var dauRot;

        function tinhDiem (diemMon1, diemMon2, diemMon3, khuVuc, doiTuong) {
            tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
            return tongDiem;
        }

        function xacDinhDauRot (diemChuan, tongDiem) {
            
            if(tongDiem >= diemChuan && 
                Number(diemMon1.value) > 0 && 
                Number(diemMon2.value) > 0 && 
                Number(diemMon3.value) > 0) {
                dauRot = 'Đậu'
            } else {
                dauRot = 'Rớt'
            }
            return dauRot;
        }

        tongDiem = tinhDiem( Number(diemMon1.value), 
        Number(diemMon2.value), 
        Number(diemMon3.value), 
        Number(khuVuc.value), 
        Number(doiTuong.value))

        dauRot = xacDinhDauRot(Number(dienChuan.value), tongDiem)

        console.log(tongDiem, dauRot)
        document.getElementById('outPut').innerHTML = `<h4 class="alert-danger p-2">Tổng số điểm đạt được là: ${tongDiem} điểm.</h4>
                            ${dauRot === 'Đậu' ? `<h4 class="alert-success mt-3 p-2">Kết quả: ${dauRot}</h4>` 
                                                : `<h4 class="alert-warning mt-3 p-2">Kết quả: ${dauRot}</h4>`}`
    }
}







