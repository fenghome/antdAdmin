import React from 'react';
import PropTypes from 'prop-types';
import { arrayToTree, queryArray } from 'utils';

const Menus = ({
  siderFold, darkTheme, navOpenKeys, changeOpenKeys, menu, location,
}) => {

  //生成树状
  const menuTree = arrayToTree(menu.filter(_ => _.mpid !== '-1'), 'id', 'mpid');
  const levelMap = {};

  //递归生成菜单
  const menuItems = getMenus(menuTree, siderFold);

  const getMenus = (menuTreeN, siderFoldN) => {
    return menuTreeN.map((item) => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid;
        }
      }
      return (
        <Menu.SubMenu
          key={item.id}
          title={
            <sapn>
              {item.icon && <Icon type={item.icon} />}
              {(!siderFoldN || !menuTree.includes(items)) && item.name}
            </sapn>
          }
        >
          {getMenus(item.children, siderFoldN)}
        </Menu.SubMenu>
      );
      return (
        <Menu.Item key={item.id}>
          <Link to={item.route || '#'} style={siderFoldN ? { width: 10 } : {}}>
            {item.icon && <Icon type={item.icon} />}
            {item.name}
          </Link>
        </Menu.Item>
      )
    })
  }

  // 保持选中
  const getAncestorKeys = (key) => {
    let map = {}
    const getParent = (index) => {
      const result = [String(levelMap[index])]
      if (levelMap[result[0]]) {
        result.unshift(getParent(result[0])[0])
      }
      return result
    }
    for (let index in levelMap) {
      if ({}.hasOwnProperty.call(levelMap, index)) {
        map[index] = getParent(index)
      }
    }
    return map[key] || []
  }

  let menuProps = !siderFold ? {
    onOpenChange,
    openKeys: navOpenKeys,
  } : {}

  return (
    <Menu
      {...menuProps}
      mode={siderFold ? 'vertical' : 'inline'}
      theme={darkTheme ? 'dark' : 'light'}
      selectedKeys={defaultSeletedKeys}
    >
      {menuItems}
    </Menu>
  )
}

Menus.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
  location: PropTypes.object,
}
export default Menus;
