// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts';
import { bxAnaalyse } from '@/core/icons';

export const RouteView = {
    name: 'RouteView',
    render: h => h('router-view')
};

export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        meta: { title: 'menu.home' },
        redirect: '/dashboard',
        children: [
            {
              path: '/dashboard',
              name: '仪表盘',
              redirect: '/dashboard/workplace',
              component: RouteView,
              meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
              children: [
                {
                  path: '/dashboard/workplace',
                  name: '仪表盘',
                  component: () => import('@/views/dashboard/Workplace'),
                  meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: [ 'dashboard' ] }
                }
              ]
            },

            // 隐藏基础路由
            {
                path: '/account',
                component: RouteView,
                redirect: '/account/settings',
                name: 'account',
                hidden: true,
                meta: { title: '个人页', hidden: true, icon: 'user', keepAlive: true, permission: ['user'] },
                children: [
                    {
                        path: '/account/settings',
                        name: 'settings',
                        component: () => import('@/views/account/settings/Index'),
                        meta: { title: '个人设置', hideHeader: true, hidden: true },
                        redirect: '/account/settings/base',
                        hideChildrenInMenu: true,
                        children: [
                            {
                                path: '/account/settings/base',
                                name: 'BaseSettings',
                                component: () => import('@/views/account/settings/BaseSetting'),
                                meta: { title: '基本设置', hidden: true }
                            },
                            {
                                path: '/account/settings/security',
                                name: 'SecuritySettings',
                                component: () => import('@/views/account/settings/Security'),
                                meta: { title: '安全设置', hidden: true, keepAlive: true }
                            },
                            {
                                path: '/account/settings/custom',
                                name: 'CustomSettings',
                                component: () => import('@/views/account/settings/Custom'),
                                meta: { title: '个性化设置', hidden: true, keepAlive: true }
                            },
                            {
                                path: '/account/settings/binding',
                                name: 'BindingSettings',
                                component: () => import('@/views/account/settings/Binding'),
                                meta: { title: '账户绑定', hidden: true, keepAlive: true }
                            },
                            {
                                path: '/account/settings/notification',
                                name: 'NotificationSettings',
                                component: () => import('@/views/account/settings/Notification'),
                                meta: { title: '新消息通知', hidden: true, keepAlive: true }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
];

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
            },
            {
                path: 'register-result',
                name: 'registerResult',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
            },
            {
                path: 'recover',
                name: 'recover',
                component: undefined
            }
        ]
    },

    {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
    }
];
