import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Popover, Layout } from 'antd';
import classnames from 'classnames';
import styles from './Header.less';
import Menus from './Menu'

const { SubMenu } = Menu;

const Header = ({
  user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu,
}) => {
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenkeys,
  }

  return (
    <Layout.Header className={styles.Header}>
      {
        isNavbar ?
          <Popover
            placement="bottomLeft"
            onVisibleChange={switchMenuPopover}
            visible={menuPopoverVisible}
            overlayClassName={styles.popvermenu}
            trigger="click"
            content={
              <Menus {...menusProps} />
            }>
            <div className={styles.button}>
              <Icon type="bars" />
            </div>
          </Popover>
          :
          <div className={styles.button} onClick={switchSider}>
            <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
          </div>
      }
      <Menu mode="horizontal" onClick={handleClickMenu}>
        <SubMenu
          style={{ float: right }}
          title={<span><Icon type="user" />{user.username}</span>}
        >
          <Menu.Item key="logout">
            Sign out
        </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Header>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: Proptypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenkeys: PropTypes.func,
}

export default Header;
