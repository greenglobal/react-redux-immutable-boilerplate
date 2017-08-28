import React from 'react';
import {MasterLayout} from 'layouts';

class HomePage extends React.Component {

  render() {
    return (
      <MasterLayout>
        <div className="container">
          <div className="header-content">
            <p className="help">Xin hãy nhấn trực tiếp vào màn hình cảm ứng để sử dụng.</p>
            <p className="help-phone">Nếu có rắc rối, xin liên hệ <span className="contact-content">02683 000 000</span></p>
            <img className="icon-hand" src={require('assets/images/icon/hand_gesture.svg')} />
          </div>
          <div className="main-content">
            <div className="tab">
              <ul className="box-tab">
                <li className="sub-tab">
                  <button className="btn-tab search">
                    <span className="icon-tab">
                      <img className="resize-search center" src={require('assets/images/icon/search.svg')} />
                    </span>
                    <div className="content-tab">
                      <span className="title-tab">Tra Cứu Hồ Sơ</span>
                    </div>
                  </button>
                </li>
                <li className="sub-tab">
                  <button className="btn-tab calendar">
                    <span className="icon-tab">
                      <img className="resize-calendar center" src={require('assets/images/icon/calendar.svg')} />
                    </span>
                    <div className="content-tab">
                      <span className="title-tab">Lịch Làm Việc <br /> Quận Thanh Khê</span>
                    </div>
                  </button>
                </li>
                <li className="sub-tab">
                  <button className="btn-tab document">
                    <span className="icon-tab">
                      <img className="resize-document center" src={require('assets/images/icon/document.svg')} />
                    </span>
                    <div className="content-tab">
                      <span className="title-tab">Biểu Mẫu Điện Tử</span>
                    </div>
                  </button>
                </li>
                <li className="sub-tab">
                  <button className="btn-tab procedure">
                    <span className="icon-tab">
                      <img className="resize-procedure center" src={require('assets/images/icon/document_1.svg')} />
                    </span>
                    <div className="content-tab">
                      <span className="title-tab">Tra Cứu Thủ Tục <br /> Hành Chính</span>
                    </div>
                  </button>
                </li>
                <li className="sub-tab">
                  <button className="btn-tab notable">
                    <span className="icon-tab">
                      <img className="resize-notable center" src={require('assets/images/icon/rate.svg')} />
                    </span>
                    <div className="content-tab">
                      <span className="title-tab">Đánh Giá Công Chức Tiếp Nhận</span>
                    </div>
                  </button>
                </li>
                <li className="sub-tab">
                  <button className="btn-tab feedback">
                    <span className="icon-tab">
                      <img className="resize-feedback center" src={require('assets/images/icon/feedback.svg')} />
                    </span>
                    <div className="content-tab">
                      <span className="title-tab">Góp Ý - Phản Ánh</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MasterLayout>
    );
  }
}

export default HomePage;
