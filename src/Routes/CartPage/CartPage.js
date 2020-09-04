import React from "react";
import "./CartPage.css";

const CartPage = () => {
  return (
    <div className="CartPage-wrapper">
      <div className="CartPage-header">CART</div>
      <table className="CartPage-container">
        <tr className="CartPage-container-category">
          <th>
            <input type="checkbox" />
          </th>
          <th>이미지</th>
          <th>상품정보</th>
          <th>판매가</th>
          <th>수량</th>
          <th>합계</th>
        </tr>
        <tr className="CartPage-container-content">
          <td className="CartPage-content-checkbox">
            <input type="checkbox"></input>
          </td>
          <td className="CartPage-content-image">
            <img
              src="https://scontent-frt3-1.cdninstagram.com/v/t51.29350-15/117723093_656417834976438_5487288218449441304_n.jpg?_nc_cat=108&_nc_sid=8ae9d6&_nc_ohc=0NI22SNQNnwAX81Q4TE&_nc_ht=scontent-frt3-1.cdninstagram.com&oh=dccfaab6b1e79f16dac695c7f2d87685&oe=5F61736F"
              alt="Product"
            ></img>
          </td>
          <td className="CartPage-content-name">
            <div>플라이 슬림 컷팅 진</div>
            <div className="CartPage-content-color">
              <div className="CartPage-content-color-left">색상</div>
              <div className="CartPage-content-color-right">진청</div>
            </div>
            <div className="CartPage-content-size">
              <div className="CartPage-content-size-left">사이즈</div>
              <div className="CartPage-content-size-right">L</div>
            </div>
          </td>
          <td className="CartPage-content-price">30000</td>
          <td className="CartPage-content-many">2</td>
          <td className="CartPage-content-total">60000</td>
        </tr>
        <tr className="CartPage-container-sum">
          <td colSpan="6">60000</td>
        </tr>
      </table>
      <div className="CartPage-footer">
        <button className="CartPage-footer-order">선택상품주문</button>
        <button className="CartPage-footer-delete">선택상품삭제</button>
      </div>
    </div>
  );
};

export default CartPage;