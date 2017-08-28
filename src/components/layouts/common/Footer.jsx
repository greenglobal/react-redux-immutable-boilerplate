import React from 'react';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  gotoPage(page) {
    this.context.router.history.push(page);
  }

  render() {
    return (
      <footer className="footer footer-pdf">
        <div className="container">
          <button className="btn-icon home btn-action-back" id="btn-back-home" onClick={this.gotoPage.bind(this, '/')}><i className="icon icon-home"/><span className="space-home">Trang chủ</span></button>
          <div id="box-modal" className="modal popup">
            <div className="modal-back-home">
              <img className="btn-close-modal close-modal" src={require('assets/images/icon/close.svg')} />
              <h3 className="notification">
                Bạn có muốn rời khỏi trang này
              </h3>
              <div className="button-notification">
                <button className="btn message-no btn-action-cancel btn-cancel">Không</button>
                <button className="btn message-yes btn-action-back">Có</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.contextTypes = {
  router: React.PropTypes.object
};

export default Footer;
