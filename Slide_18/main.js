const maKhachHang = document.getElementById('maKhachHang');
const soTaiKhoan = document.getElementById('soTaiKhoan');
const soDauNoi = document.getElementById('soDauNoi');
const soKenh = document.getElementById('soKenh');

const phiXuLyHoaDonNhaDan = 4.5;
const phiDichVuCoBanNhaDan = 20.5;
const phiThueKenhCaoCapNhaDan = 7.5;

const phiXuLyHoaDonDoanhNghiep = 15;
const phiDichVuCoBanDoanhNghiep = 75;
const phiDichVuCoBanDoanhNghiepChoMoiKetNoiThem = 5;
const phiThueKenhCaoCapDoanhNghiep = 50;

document.getElementById('tinhTienCapBtn').onclick = function (event) {
    event.preventDefault()


    // validation
    if (!soTaiKhoan.value || 
        Number(soDauNoi.value) <= 0 ||  
        Number(soKenh.value) <= 0 ||
        soKenh.value.includes('.') || 
        soDauNoi.value.includes('.') ||
        soKenh.value.includes(',') || 
        soDauNoi.value.includes(',')) {
        alert('Xin mời điền đầy đủ các trường. Số đầu nối và số kênh phải là số nguyên dương.')
    } else {
        var tienCap;
        function phiThueKenhCaoCapND(soKenh, phiThueKenhCaoCapNhaDan) {
            var phiThueKenhCaoCap = phiThueKenhCaoCapNhaDan * soKenh;
            return phiThueKenhCaoCap;
        }

        function phiDichVuCoBanDN(soDauNoi, phiDichVuCoBanDoanhNghiep) {
            var phiDichVuCoBan;

            if (soDauNoi <= 10) {
                phiDichVuCoBan = phiDichVuCoBanDoanhNghiep;
            }
            if (soDauNoi > 10) {
                phiDichVuCoBan = phiDichVuCoBanDoanhNghiep + (soDauNoi -10) * phiDichVuCoBanDoanhNghiepChoMoiKetNoiThem;
            }
            return phiDichVuCoBan;

        }

        function phiThueKenhCaoCapDN(soKenh, phiThueKenhCaoCapDoanhNghiep) {
            var phiThueKenhCaoCap = soKenh * phiThueKenhCaoCapDoanhNghiep;
            return phiThueKenhCaoCap;
        }

        function tinhTienCap(maKhachHang, soDauNoi, soKenh) {
            switch (maKhachHang) {
                case "1": {
                    tienCap = phiXuLyHoaDonNhaDan + phiDichVuCoBanNhaDan + phiThueKenhCaoCapND(soKenh, phiThueKenhCaoCapNhaDan);
                    break;
                }
                
                default:{
                    tienCap = phiXuLyHoaDonDoanhNghiep + phiDichVuCoBanDN(soDauNoi, phiDichVuCoBanDoanhNghiep) + phiThueKenhCaoCapDN(soKenh, phiThueKenhCaoCapDoanhNghiep);

                    break;
                }
            }

            return tienCap
        }

        tienCap = tinhTienCap(maKhachHang.value, Number(soDauNoi.value), Number(soKenh.value));

        var loaiKhachHang;

        function xacDinhLoaiKhachHang(loaiKhachHang) {
            var khachHang;
            switch (loaiKhachHang) {
                case "1": {
                    khachHang = 'Nhan dan';
                    break;
                }
                    
            
                default:{
                    khachHang = 'Doanh nghiep';
                    break;
                }
            }
            return khachHang;
        }

        loaiKhachHang = xacDinhLoaiKhachHang(maKhachHang.value);

        document.getElementById('outPutTienCap').innerHTML = `
        <div class="text-center">
            <tt>
                <h5>HOA DON TIEN CAP</h5>
                <p>----------</p>
                <div class="text-left">
                    <h6>Khach hang: <b>${loaiKhachHang}</b></h6>
                    <h6>So tai khoan: <b>${soTaiKhoan.value}</b></h6>
                    <h6>So dau noi: <b>${soDauNoi.value}</b></h6>
                    <h6>So kenh thue cao cap: <b>${soKenh.value}</b></h6>
                    <h6 class="alert-success h3">So tien can phai dong la: <b>${tienCap}</b>$</h6>
                </div>
                <p><i class="text-muted">Xin cam on quy khach!</i></p>
            </tt>
        </div>`
    }
}


