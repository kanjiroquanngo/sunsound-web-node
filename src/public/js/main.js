var KichThuoc = document.getElementsByClassName("slider")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("chuyen_slide")[0];
var Img = ChuyenSlide.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;

function Next() {
  if (Chuyen < Max) Chuyen += KichThuoc;
  else Chuyen = 0;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

function Back() {
  if (Chuyen == 0) Chuyen = Max;
  else Chuyen -= KichThuoc;
  ChuyenSlide.style.marginLeft = "-" + Chuyen + "px";
}

setInterval(function () {
  Next();
}, 3000);

function dieu_huongvechungtoi() {
  location.assign("/aboutUs");
}
function dieuhuonglogo() {
  location.assign("/");
}
function dieu_huongsanpham() {
  location.assign("/product");
}
function dieu_huongdonhang() {
  location.assign("/order");
}
function dieu_huongtintuc() {
  location.assign("/news");
}
function dieu_huongquanhedt() {
  location.assign("/partners");
}
function dieu_huongphanhoi() {
  location.assign("/feedback");
}
function dieu_huonglienhe() {
  location.assign("/fordevelopment");
}

