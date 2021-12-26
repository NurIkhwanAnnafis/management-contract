import { Fragment, lazy } from "react";
import Login from '../components/Layout/Login'
import Main from '../components/Layout/Main'
import NotFound from '../components/Layout/NotFound'
import ContextProviderAdmin from "../containers/Main/Admin/context/ContextProviderAdmin";

const noContext = ({ children }) => <Fragment>{children}</Fragment>;

const menu = [
  {
    path: '/login',
    exact: true,
    page: ['Login'],
    component: lazy(() => import('../containers/Login')),
    layout: Login,
    role: [],
    context: noContext
  },
  {
    path: '/admin',
    page: ['Admin'],
    exact: true,
    component: lazy(() => import('../containers/Main/Admin')),
    layout: Main,
    role: [],
    context: ContextProviderAdmin
  },
  {
    path: '/admin/create',
    page: ['Admin', 'Create'],
    exact: true,
    component: lazy(() => import('../containers/Main/Admin/create')),
    layout: Main,
    role: [],
    context: ContextProviderAdmin
  },
  {
    path: '/user',
    page: ['User'],
    exact: true,
    component: lazy(() => import('../containers/Main/Users')),
    layout: Main,
    role: [],
    context: noContext
  },
  {
    path: '/salary',
    page: ['Salary'],
    exact: true,
    component: lazy(() => import('../containers/Main/Salary')),
    layout: Main,
    role: [],
    context: noContext
  },
  {
    path: '/products',
    page: ['Products'],
    exact: true,
    component: lazy(() => import('../containers/Main/Products')),
    layout: Main,
    role: [],
    context: noContext
  },
  {
    path: '/cash-flow-statement',
    page: ['Cash Flow Statement'],
    exact: true,
    component: lazy(() => import('../containers/Main/CashFlowStatement')),
    layout: Main,
    role: [],
    context: noContext
  },
  {
    path: '/invoice/approval',
    page: ['Invoice', 'Approval'],
    exact: true,
    component: lazy(() => import('../containers/Main/Invoice/Approval')),
    layout: Main,
    role: [],
    context: noContext
  },
  {
    path: '/roles',
    page: ['Roles'],
    exact: true,
    component: lazy(() => import('../containers/Main/Roles')),
    layout: Main,
    role: [],
    context: noContext
  },
  {
    path: '/not-found',
    exact: true,
    page: ['Not Found'],
    component: lazy(() => import('../containers/NotFound')),
    layout: NotFound,
    role: [],
    context: noContext
  },
]

export { menu };