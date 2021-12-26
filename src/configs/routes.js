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
    path: '/salary',
    page: ['Salary'],
    exact: true,
    component: lazy(() => import('../containers/Main/Salary')),
    layout: Main,
    role: []
  },
  {
    path: '/products',
    page: ['Products'],
    exact: true,
    component: lazy(() => import('../containers/Main/Products')),
    layout: Main,
    role: []
  },
  {
    path: '/cash-flow-statement',
    page: ['Cash Flow Statement'],
    exact: true,
    component: lazy(() => import('../containers/Main/CashFlowStatement')),
    layout: Main,
    role: []
  },
  {
    path: '/invoice/approval',
    page: ['Invoice', 'Approval'],
    exact: true,
    component: lazy(() => import('../containers/Main/Invoice/Approval')),
    layout: Main,
    role: []
  },
  {
    path: '/roles',
    page: ['Roles'],
    exact: true,
    component: lazy(() => import('../containers/Main/Roles')),
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