import React from "react";
import Cart from "./Component/Cart/Cart";
import Filters from "./Component/Filter/Filters";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Product/Products";
function App() {
  return (
    <div>
        <Navbar />
        <Filters />
        <Cart />
        <div className="infoContainer">
            <div className="Info">
              <p>MSSV :4501104114</p>
              <p>Tên: Trần Đoàn Đăng Khoa</p>
              <p>Nhóm KTL</p>
            </div>
            <div className="Info">
              <p>MSSV: 4501104225</p>
              <p>Tên: Võ Phúc Thiện</p>
              <p>Nhóm KTL</p>
              </div>
            <div className="Info">
              <p>MSSV: 4501104193</p>
              <p>Tên: Nguyễn Lê Anh Quốc</p>
              <p>Nhóm KTL</p>
            </div>
            <div className="Info">
              <p>MSSV: 4501104181</p>
              <p>Tên: Trương Nguyễn Phúc</p>
              <p>Nhóm KTL</p>
            </div>
          </div>
        <Products />
    </div>
  );
}

export default App;
