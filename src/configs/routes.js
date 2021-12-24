import { lazy } from "react";
import Login from '../components/Layout/Login'
import Main from '../components/Layout/Main'
import NotFound from '../components/Layout/NotFound'

const menu = [
  {
    path: '/login',
    exact: true,
    page: ['Login'],
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
  {
    path: '/not-found',
    exact: true,
    page: ['Not Found'],
    component: lazy(() => import('../containers/NotFound')),
    layout: NotFound,
    role: []
  },
]

export { menu };