import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Switch } from 'antd';
import config from '../../utils/config';
import styles from './Layout.less';
import Menus from './Menu';

const Sider = ({ siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu }) => {

  return (

    <div>
      <div className={styles.logo}>
        <img alt="logo" src={config.logo} />
        {siderFold ? '' : <span>{config.name}</span>}
      </div>
      <Menus
        menu={menu}
        siderFold={siderFold}
        darkTheme={darkTheme}
        location={location}
        navOpenKeys={navOpenKeys}
        changeOpenKeys={changeOpenKeys}
      />
    </div>
  )
}

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Sider;
