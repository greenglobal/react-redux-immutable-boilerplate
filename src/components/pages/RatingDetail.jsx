import React, { Component } from 'react';
import {CommonLayout} from 'layouts';


class RatingDetail extends Component {
  numberInput() {

  }
  render() {
    return (
      <CommonLayout>
        <div className="container">
        <div className="header">
          <h2 className="title bg-rate">
            <span className="title-main">Đánh Giá Công Chức Tiếp Nhận</span>
          </h2>
        </div>
        <div className="content">
          <div className="box-content box-content-rating-detail">
            <div className="box-info">
              <div className="info-top bg-img-rating">
              </div>
              <div className="info-bottom">
                <h2 className="header-info">Phạm Đình Minh Hải</h2>
                <span className="center-info" />
                <p><span className="bold">Ngày sinh:</span> 08/03/1983</p>
                <p><span className="bold">Trình độ học vấn:</span> Đại học</p>
                <p><span className="bold">Chức vụ:</span> Chánh văn phòng</p>
              </div>
            </div>
            <div className="box-input">
              <div className="title-form">
                <span className="text-title">ĐÁNH GIÁ MỨC ĐỘ HÀI LÒNG CỦA TỪNG CÁ NHÂN</span>
              </div>
              <form className="form-fb">
                <div className="sub-box-input">
                  <div className="title-input">
                    <label className="label-input">
                      <span className="phone-fb">Số điện thoại của bạn<span>
                        </span></span></label>
                  </div>
                  <div className="input-fb inp-rating-detail">
                    <input type="text" placeholder="Nhập số " onFocus={this.numberInput} id="phone" />&nbsp;<span id="errmsg" />
                  </div>
                </div>
                <div className="sub-box-input">
                  <p>
                    <span className="bold">Mức độ hài lòng đối với công chức tại Bộ phận tiếp nhận và trả kết quả:</span>
                  </p>
                  <ul>
                    <li className="radio-rating">
                      <input type="radio" name="review" id="agree" defaultChecked="true" />
                      <label htmlFor="agree" className="label-radio-agree">
                        <span />
                        <p className="detail-rw">Hài lòng</p>
                      </label>
                      <input type="radio" name="review" id="disagree" />
                      <label htmlFor="disagree" className="label-radio-disagree">
                        <span />
                        <p className="detail-rw">Chưa hài lòng</p>
                      </label>
                    </li>
                  </ul>
                  <button className="btn-send-rating">Gửi Đánh Giá</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </CommonLayout>
    );
  }
}

export default RatingDetail;
