import React from 'react'

import App from '../App'
import HomePage from './HomePage'
import UsersPage from './UsersPage'
import AdminsPage from './AdminsPage'
import NotFoundPage from './NotFoundPage'

const routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersPage,
        path: '/users',
      },
      {
        ...AdminsPage,
        path: '/admins',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]

export default routes
