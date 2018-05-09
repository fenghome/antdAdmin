import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Switch } from 'antd';
import { connect } from 'dva';
import config from '../../utils/config';
import styles from './Layout.less';
import Menus from './Menu';

const Sider = ({ app }) => {

  const { siderFold, darkTheme } = app;

  const changeTheme = ()=>{

  }

  return (

    <div>
      <div className={styles.logo}>
        <img alt="logo" src={config.logo} />
        {siderFold ? '' : <span>{config.name}</span>}
      </div>
      <Menus />
      {
        !siderFold ?
        <div className={styles.switchtheme}>
          <span><Icon type="bulb" />Switch Theme</span>
          <Switch
           onChange={changeTheme}
           defaultChecked={darkTheme}
           checked="Dark"
           unCheckedChildren="Light"
          />
        </div>
        :''
      }
    </div>
  )
}

Sider.propTypes = {
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool
}

export default connect(({app})=>({app}))(Sider);
