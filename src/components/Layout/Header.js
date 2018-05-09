import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Menu, Icon, Popover, Layout } from 'antd';
import classnames from 'classnames';
import styles from './Header.less';
import Menus from './Menu'

const { SubMenu } = Menu;

const Header = ({ app, location }) => {

  const { user, menuPopoverVisible, siderFold, isNavbar, menu, navOpenKeys, darkTheme } = app;

  const switchSider = () => {

  }

  const switchMenuPopover = () => {

  }

  const changeOpenKeys = () => {

  }

  const logout = () => {

  }

  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  }

  return (
    <Layout.Header className={styles.header}>
      {
        // isNavbar ?
        // <Popover
        //   placement="bottomLeft"
        //   onVisibleChange={switchMenuPopover}
        //   visible={menuPopoverVisible}
        //   overlayClassName={styles.popvermenu}
        //   trigger="click"
        //   content={
        //     <Menus {...menusProps} />
        //   }>
        //   <div className={styles.button}>
        //     <Icon type="bars" />
        //   </div>
        // </Popover>
        // :
        <div className={styles.button} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>
      }
      {/* <Menu mode="horizontal" onClick={handleClickMenu}>

        <SubMenu
          style={{ float: right }}
          title={<span><Icon type="user" />{user.username}</span>}
        >
          <Menu.Item key="logout">
            Sign out
        </Menu.Item>
        </SubMenu>
      </Menu> */}
    </Layout.Header>
  )
}

Header.propTypes = {

}

export default withRouter(connect(({ app }) => ({ app }))(Header));
