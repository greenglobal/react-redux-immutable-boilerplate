import React, { Component } from 'react';
import {CommonLayout} from 'layouts';


class ProcedureDetail extends Component {
  render() {
    return (
      <CommonLayout>
        <div className="container">
          <div className="header">
            <h2 className="title bg-document">
              <span className="title-main">Thông Tư 40/2016/tt-btc Của Bộ Tài Chính</span>
            </h2>
          </div>
          <div className="content custom-procedure">
            <div className="view-procedure">
              <iframe className="view-pdf" src="./lib-pdf/web/viewer.html?file=file.pdf" seamless />
            </div>
          </div>
        </div>
      </CommonLayout>
    );
  }
}

export default ProcedureDetail;
