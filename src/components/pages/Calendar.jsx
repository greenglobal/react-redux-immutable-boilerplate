import React from 'react';
import {CommonLayout} from 'layouts';
class Calendar extends React.Component {

  render() {
    return (
      <CommonLayout>
        <div className="container">
        <div className="header">
          <h2 className="title bg-calendar">
            <span className="title-main">Lịch Làm Việc Quận Thanh Khê</span>
          </h2>
          <div className="title-right">
            <p className="title-main-right">LỊCH CÔNG TÁC CƠ QUAN TUẦN THỨ 27</p>
            <p className="title-main-right-date">(TỪ NGÀY 03/07/2017 ĐẾN NGÀY 08/07/2017)</p>
          </div>
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

export default Calendar;
