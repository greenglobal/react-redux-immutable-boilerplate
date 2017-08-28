import React, { Component } from 'react';
import {CommonLayout} from 'layouts';


class FindProcedure extends Component {
  render() {
    return (
      <CommonLayout>
        <div className="container">
        <div className="header">
          <h2 className="title bg-search-document">
            <span className="title-main">Tra Cứu Thủ Tục Hành Chính</span>
          </h2>
        </div>
        <div className="content">
          <div className="procedure-left">
            <form className="search-procedure" action method="post">
              <ul>
                <li>
                  <p>tên thủ tục</p>
                  <input type="text" name defaultValue placeholder="Nhập tên thủ tục" />
                </li>
                <li>
                  <p>mức trực tuyến</p>
                  <div className="menulist icon-arrow1-bottom">
                    <select>
                      <option value={1}>Trực tuyến</option>
                      <option value={2}>Trực tuyến</option>
                      <option value={3}>Trực tuyến</option>
                      <option value={4}>Trực tuyến</option>
                    </select>
                  </div>
                </li>
                <li>
                  <p>cơ quan thực hiên</p>
                  <div className="menulist icon-arrow1-bottom">
                    <select>
                      <option value={1}>Phòng kinh tế</option>
                      <option value={2}>Trực tuyến</option>
                      <option value={3}>Trực tuyến</option>
                      <option value={4}>Trực tuyến</option>
                    </select>
                  </div>
                </li>
                <li>
                  <p>lĩnh vực thực hiện</p>
                  <div className="menulist icon-arrow1-bottom">
                    <select>
                      <option value={1}>Bảo Hiểm Xã Hội Việt Nam</option>
                      <option value={2}>Trực tuyến</option>
                      <option value={3}>Trực tuyến</option>
                      <option value={4}>Trực tuyến</option>
                    </select>
                  </div>
                </li>
              </ul>
              <button className="btn-icon btn-search-procedure"><i className="icon icon-zoom" /><span className="space-search">tìm kiếm</span></button>
            </form>
          </div>
          <div className="procedure-right">
            <div className="scroll-procedure">
              <div className="table-procedure">
                <table className="table-pro">
                  <thead>
                    <tr><th style={{width: 65}}>STT</th>
                      <th style={{width: 187}}>MÃ SỐ</th>
                      <th style={{width: 568}}>TÊN THỦ TỤC</th>
                      <th style={{width: 233}}>CƠ QUAN THỰC HIỆN</th>
                      <th style={{width: 149}}>LĨNH VỰC</th>
                    </tr></thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp phép tổ chức hoạt động dạy thêm học thêm, cấp phép dạy thêm cho cá nhân</td>
                      <td>Phòng Giáo dục và Đào tạo</td>
                      <td>Giáo dục và đào tạo</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp lại giấy phép bán lẻ sản phẩm thuốc lá do mất rách, nát, bị cháy, bị tiêu hủy một phần hoặc toàn bộ Mức 3 <span className="level-procedure">Mức 3</span></td>
                      <td>UBND các quận, huyện</td>
                      <td>Dịch vụ thương mại</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp sửa đổi, bổ sung giấy phép bán lẻ sản phẩm thuốc lá <span className="level-procedure">Mức 3</span></td>
                      <td>UBND các quận, huyện</td>
                      <td>Dịch vụ thương mại</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp mới và cấp lại do hết hạn Giấy phép bán lẻ sản phẩm thuốc lá <span className="level-procedure">Mức 3</span></td>
                      <td>UBND các quận, huyện</td>
                      <td>Dịch vụ thương mại</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp sửa đổi, bổ sung giấy phép sản xuất rượu (mục đích kinh doanh), giấy phép kinh doanh bán lẻ sản phẩm rượu <span className="level-procedure">Mức 3</span></td>
                      <td>Dịch vụ thương mại</td>
                      <td>UBND các quận, huyện</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp lại giấy phép bán lẻ sản phẩm thuốc lá do mất rách, nát, bị cháy, bị tiêu hủy một phần hoặc toàn bộ Mức 3</td>
                      <td>Dịch vụ thương mại</td>
                      <td>UBND các quận, huyện</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp lại giấy phép bán lẻ sản phẩm thuốc lá do mất rách, nát, bị cháy, bị tiêu hủy một phần hoặc toàn bộ Mức 3</td>
                      <td>Dịch vụ thương mại</td>
                      <td>UBND các quận, huyện</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp lại giấy phép bán lẻ sản phẩm thuốc lá do mất rách, nát, bị cháy, bị tiêu hủy một phần hoặc toàn bộ Mức 3</td>
                      <td>Dịch vụ thương mại</td>
                      <td>UBND các quận, huyện</td>
                    </tr>
                    <tr>
                      <td>09</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp lại giấy phép bán lẻ sản phẩm thuốc lá do mất rách, nát, bị cháy, bị tiêu hủy một phần hoặc toàn bộ Mức 3</td>
                      <td>Dịch vụ thương mại</td>
                      <td>UBND các quận, huyện</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>T-DNG-286755-TT</td>
                      <td style={{color: '#0080fe'}}>Cấp lại giấy phép bán lẻ sản phẩm thuốc lá do mất rách, nát, bị cháy, bị tiêu hủy một phần hoặc toàn bộ Mức 3</td>
                      <td>Dịch vụ thương mại</td>
                      <td>UBND các quận, huyện</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination">
                <div className="pagination-left">
                  <span className="text-span">Xem</span>
                  <select className="pagination-dropdown icon-arrow1-bottom" name>
                    <option value>50</option>
                    <option value>2</option>
                    <option value>3</option>
                    <option value>4</option>
                    <option value>5</option>
                    <option value>6</option>
                    <option value>7</option>
                    <option value>8</option>
                  </select>
                  <span className="drop-pro icon-arrow1-bottom" />
                  <span className="text-span">Đang xem 1 đến 6 trong tổng số 160 mục</span>
                </div>
                <div className="pagination-right">
                  <button type="button" className="previou icon-double-arrow" name="button" />
                  <button type="button" className="page" name="button">01</button>
                  <button type="button" className="page" name="button">02</button>
                  <button type="button" className="page active" name="button">03</button>
                  <button type="button" className="next icon-double-arrow" name="button" />
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

export default FindProcedure;
