import React, { Component } from 'react';
import {CommonLayout} from 'layouts';

class Document extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      categories: [
        { title: 'Tài liệu Công đoàn quận Thanh Khê' },
        { title: 'Bộ TTHC lĩnh vực Kho bạc Nhà nước' },
        { title: 'Biểu mẫu đăng ký báo cáo thành tích' },
        { title: 'Văn bản thi đua' },
        { title: 'Tài liệu Công đoàn quận Thanh Khê' },
        { title: 'Bộ TTHC lĩnh vực Kho bạc Nhà nước' },
        { title: 'Biểu mẫu đăng ký báo cáo thành tích' },
        { title: 'Cấp phép tổ chức hoạt động dạy thêm học thêm, cấp phép dạy thêm cho cá nhân' }
      ],
      documents: [
        { title: 'Thông tư 40/2016/TT-BTC của Bộ Tài chính' },
        { title: 'Thông tin về khoản thu phí' },
        { title: 'Quy trình TTVDT và vốn sự nghiệp mới ban hành cuối năm 2016' },
        { title: 'Nội dung thực hiện kiến nghị, phản ánh của cá nhân, tổ chức' },
        { title: 'Thông tư 39/2016/TT-BTC của Bộ Tài chính' },
        { title: 'Nội dung TTHC Kho bạc Nhà nước' },
        { title: 'Danh mục công khai niêm yết xử phạt VPHC' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' },
        { title: 'Thủ tục đăng ký khai sinh có yếu tố nước ngoài' }
      ]
    }
  }

  gotoProcedureDetail(xxx) {
    this.props.history.push('/procedure-detail');
  }

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
                  {
                    this.state.categories.map((item, i) => {
                      return (
                        <li key={i} className="sub-list-document">
                          <p className="text-document">
                            {item.title}
                          </p>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            </div>
            <div className="box-detail-document">
              <h2 className="list-title">
                Tệp biểu mẫu
              </h2>
              <div className="box-detail-scroll resize-box-document">
                <ul className="list-detail-document">
                  {
                    this.state.documents.map((item, i) => {
                      return (
                        <li className="sub-detail-document" onClick={this.gotoProcedureDetail.bind(this, 'xxx')}>
                          <p className="text-detail-document">{item.title}</p>
                        </li>
                      )
                    })
                  }


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
