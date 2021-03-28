import { asyncRouterMap, constantRouterMap, RouteView } from '@/config/router.config'

// /**
//  * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
//  *
//  * @param permission
//  * @param route
//  * @returns {boolean}
//  */
// function hasPermission (permission, route) {
//   if (route.meta && route.meta.permission) {
//     let flag = false
//     for (let i = 0, len = permission.length; i < len; i++) {
//       flag = route.meta.permission.includes(permission[i])
//       if (flag) {
//         return true
//       }
//     }
//     return false
//   }
//   return true
// }

/**
//  * 单账户多角色时，使用该方法可过滤角色不存在的菜单
//  *
//  * @param roles
//  * @param route
//  * @returns {*}
//  */
// // eslint-disable-next-line
// function hasRole(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return route.meta.roles.includes(roles.id)
//   } else {
//     return true
//   }
// }

// function filterAsyncRouter (routerMap, roles) {
//   const accessedRouters = routerMap.filter(route => {
//     // if (hasPermission(roles.permissionList, route)) {
//     if (hasPermission([], route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, roles)
//       }
//       return true
//     }
//     return true
//   })
//   return accessedRouters
// }

/**
 * 根据接口数据构造符合router的路由表
 * @param {*} menu 
 */
function resolveRouter(menu) {
    let router = {
      path: menu.url,
      name: menu.name,
      hidden: menu.hidden == 1 ? true : false,
      component: menu.component ? () => import(`@/${menu.component}`) : RouteView,
      meta: { title: menu.name, keepAlive: true, icon: menu.icon ? menu.icon : 'user'},
    }

    if(menu.children) {
      router.redirect = menu.children[0].url
    }
    return router
}

/**
 * 将后端返回的menu 挂载到路由表中
 * @param {} menus 
 */
function appendRouterForMenus(menus) {
    return menus.map((menu) => {
      let currentMenu = resolveRouter(menu)
      if(menu.children){
        currentMenu.children = appendRouterForMenus(menu.children)
      }
      return currentMenu
    })
}


const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      console.log(state.routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { menus } = data
        const asyncRemoteRouterMap = appendRouterForMenus(menus)
        let childRenRouter = asyncRouterMap[0].children
        childRenRouter = childRenRouter.concat(asyncRemoteRouterMap)

        asyncRouterMap[0].children = childRenRouter
        console.log("asyncRouterMap :", asyncRouterMap)

        commit('SET_ROUTERS', asyncRouterMap)
        resolve()
      })
    }
  }
}

export default permission
