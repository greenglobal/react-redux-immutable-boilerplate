import React, { Component } from 'react';
import {CommonLayout} from 'layouts';


class SearchDetail extends Component {
  render() {
    return (
      <CommonLayout>
        <div className="container">
        <div className="header">
          <h2 className="title bg-search-file title-search">
            <span className="title-main">Tra cứu hồ sơ</span>
          </h2>
        </div>
        <div className="content">
          <div className="box-search-detail">
            <div className="content-file">
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Lĩnh vực
                </h2>
                <p className="content-param-file">
                  Chứng thực
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Mã số biên nhận
                </h2>
                <p className="content-param-file">
                  202300221500002
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Email
                </h2>
                <p className="content-param-file">
                  tranducdam@gmail.com
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Ngày xử lý xong
                </h2>
                <p className="content-param-file">
                  18/08/2017
                </p>
              </div>
            </div>
            <div className="content-file">
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Loại hồ sơ
                </h2>
                <p className="content-param-file">
                  Đăng ký xác nhận lý lịch
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Người nộp hồ sơ
                </h2>
                <p className="content-param-file">
                  Trần Đức Đàm
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Địa chỉ
                </h2>
                <p className="content-param-file">
                  K99/2 Đường 3/2
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Trạng thái hồ sơ
                </h2>
                <p className="content-param-file">
                  Đẫ rút hồ sơ
                </p>
              </div>
            </div>
            <div className="content-file">
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Phí hồ sơ
                </h2>
                <p className="content-param-file">
                  15 000 VNĐ
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Chủ hồ sơ
                </h2>
                <p className="content-param-file">
                  Trần Đức Đàm
                </p>
              </div>
              <div className="box-content-file">
                <h2 className="sub-title-file">
                  Ngày tiếp nhận
                </h2>
                <p className="content-param-file">
                  17/08/2017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </CommonLayout>
    );
  }
}

export default SearchDetail;
