import React, { Component } from 'react';
import {CommonLayout} from 'layouts';

class Document extends Component {
  render() {
    return (
      <CommonLayout>
        <div className="container">
          <div className="header">
            <h2 className="title bg-document">
              <span className="title-main">Biểu mẫu điện tử</span>
            </h2>
            <div className="form-search">
              <button className="btn-search icon-zoom" />
              <input className="inp-search" type="text" placeholder="Tìm kiếm tên thủ tục" />
            </div>
          </div>
          <div className="content">
            <div className="box-list-document">
              <h2 className="list-title">
                Lĩnh vực biểu mẫu
              </h2>
              <div className="box-list-scroll resize-box-document">
                <ul className="list-document">
                  <li className="sub-list-document">
                    <p className="text-document">
                      Tài liệu Công đoàn quận Thanh Khê
                    </p>
                  </li>
                  <li className="sub-list-document text-active">
                    <p className="text-document">
                      Bộ TTHC lĩnh vực Kho bạc Nhà nước
                    </p>
                  </li>
                  <li className="sub-list-document">
                    <p className="text-document">
                      Biểu mẫu đăng ký báo cáo thành tích
                    </p>
                  </li>
                  <li className="sub-list-document">
                    <p className="text-document">
                      Văn bản thi đua
                    </p>
                  </li>
                  <li className="sub-list-document">
                    <p className="text-document">
                      Tài liệu Công đoàn quận Thanh Khê
                    </p>
                  </li>
                  <li className="sub-list-document">
                    <p className="text-document">
                      Bộ TTHC lĩnh vực Kho bạc Nhà nước
                    </p>
                  </li>
                  <li className="sub-list-document">
                    <p className="text-document">
                      Biểu mẫu đăng ký báo cáo thành tích
                    </p>
                  </li>
                  <li className="sub-list-document">
                    <p className="text-document">
                      Cấp phép tổ chức hoạt động dạy thêm học thêm, cấp phép dạy thêm cho cá nhân
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-detail-document">
              <h2 className="list-title">
                Tệp biểu mẫu
              </h2>
              <div className="box-detail-scroll resize-box-document">
                <ul className="list-detail-document">
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thông tư 40/2016/TT-BTC của Bộ Tài chính</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thông tin về khoản thu phí</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Quy trình TTVDT và vốn sự nghiệp mới ban hành cuối năm 2016</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Nội dung thực hiện kiến nghị, phản ánh của cá nhân, tổ chức</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thông tư 39/2016/TT-BTC của Bộ Tài chính</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Nội dung TTHC Kho bạc Nhà nước</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Danh mục công khai niêm yết xử phạt VPHC</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                  <li className="sub-detail-document">
                    <p className="text-detail-document">Thủ tục đăng ký khai sinh có yếu tố nước ngoài</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
    );
  }
}

export default Document;
