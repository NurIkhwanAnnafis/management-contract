import { lazy } from "react";
import Login from '../components/Layout/Login'
import Main from '../components/Layout/Main'

const menu = [
  {
    path: '/login',
    exact: true,
    page: 'Login',
    component: lazy(() => import('../containers/Login')),
    layout: Login,
    role: []
  },
  {
    path: '/admin',
    page: ['Admin'],
    exact: true,
    component: lazy(() => import('../containers/Main/Admin')),
    layout: Main,
    role: []
  },
  {
    path: '/user',
    page: ['User'],
    exact: true,
    component: lazy(() => import('../containers/Main/Users')),
    layout: Main,
    role: []
  },
]

export { menu };