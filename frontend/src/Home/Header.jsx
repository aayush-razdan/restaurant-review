import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import orderFood  from "./orderFood";
import { Menu, Row, Col, Icon, Button, Popover, Badge } from 'antd';


const searchEngine = 'Google';

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  }
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleSelectFilter = (value, option) => {
    const optionValue = option.props['data-label'];
    return optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1;
  }

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? 'inline' : 'horizontal';
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    const menu = [
      <Button className="header-lang-button" ghost size="small" key="lang">
        Sign Up
      </Button>,
      <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav">
        <Menu.Item key="home">
        <a
            href="/home"
            className="header-link"
            // target="_blank"
            rel="noopener noreferrer"
            component={orderFood}
          >
          HOME
          </a>
        </Menu.Item>
        <Menu.Item key="docs/spec">
        <a
            href="/restaurants"
            className="header-link"
            // target="_blank"
            rel="noopener noreferrer"
            component={orderFood}
          >
          RESTAURANTS
          </a>
        </Menu.Item>
        <Menu.Item key="docs/react">
        <a
            href="/blog"
            className="header-link"
            // target="_blank"
            rel="noopener noreferrer"
            component={orderFood}
          >
          BLOG
          </a>
        </Menu.Item>
        <Menu.Item key="docs/pattern">
          <a
            href="/orderFood"
            className="header-link"
            // target="_blank"
            rel="noopener noreferrer"
            component={orderFood}
          >
          ORDER FOOD
          </a>
        </Menu.Item>
        {}
        {/* <Menu.Item key="pro">
          <a
            href=""
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRO
            <span style={{
              display: 'inline-block', position: 'relative', top: -2, width: 18,
            }}
            >
              <Badge dot />
            </span>
          </a>
        </Menu.Item> */}
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <a id="logo">
              <img alt="logo" src="https://cdn.dribbble.com/users/3306608/screenshots/9042257/media/1b9a44ea9f560143c0f665b39508d12d.jpg" />
              <span>Noobs</span>
            </a>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}
