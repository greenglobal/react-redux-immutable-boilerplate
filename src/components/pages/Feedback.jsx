import React, { Component } from 'react';
import {CommonLayout} from 'layouts';


class Feedback extends Component {
  render() {
    return (
      <CommonLayout>
        <div className="container">
        <div className="header">
          <h2 className="title bg-fb">
            <span className="title-main">Góp Ý - phản Ánh</span>
          </h2>
          <span className="message-fb" id="showMessage">
            <span className="text-message-fb">
              Gửi góp ý thành công
            </span>
            <span className="icon-close-message icon-close"/>
          </span>
        </div>
        <div className="content">
          <div className="box-content">
            <div className="box-img">
              <img className="img-fb" src={require('assets/images/bg-feedback.png')} />
            </div>
            <div className="box-input">
              <div className="title-form">
                <span className="text-title">Thông tin góp ý</span>
              </div>
              <div className="form-fb" action acceptCharset method="post">
                <div className="sub-box-input">
                  <div className="title-input">
                    <label className="label-input" htmlFor="inp-name">
                      <span className="name-fb">Họ và tên<span>
                        </span></span></label>
                  </div>
                  <div className="input-fb">
                    <input id="ipt-name" type="text" placeholder="Nhập họ và tên" />
                  </div>
                </div>
                <div className="sub-box-input">
                  <div className="title-input">
                    <label className="label-input" htmlFor="inp-phone">
                      <span className="phone-fb">Số điện thoại<span>
                        </span></span></label>
                  </div>
                  <div className="input-fb">
                    <input id="ipt-phone" type="text" placeholder="Nhập số" />
                  </div>
                </div>
                <div className="sub-box-input">
                  <div className="title-input">
                    <label className="label-input" htmlFor="inp-email">
                      <span className="email-fb">Email<span>
                        </span></span></label>
                  </div>
                  <div className="input-fb">
                    <input id="ipt-email" type="text" placeholder="Nhập email" />
                  </div>
                </div>
                <div className="sub-box-input">
                  <div className="title-input">
                    <label className="label-input" htmlFor="inp-content">
                      <span className="content-fb">Nội dung<span>
                        </span></span></label>
                  </div>
                  <div className="input-fb">
                    <textarea id="inp-content" placeholder="Nhập nội dung phản ánh, góp ý của bạn" defaultValue={""} />
                  </div>
                </div>
                <div className="sub-box-input">
                  <div className="title-input">
                  </div>
                  <div className="input-fb">
                    <button className="btn clear-fb"><span className="btn-clear-fb btn-action-cancel">Nhập lại</span></button>
                    <button className="btn send-fb btn-action-send"><span className="btn-send-fb">Gửi góp ý</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </CommonLayout>
    );
  }
}

export default Feedback;
