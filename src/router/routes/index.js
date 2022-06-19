import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Forex Comparator'

// ** Default Route
const DefaultRoute = '/default'

// ** Merge Routes
const Routes = [
  {
    path: '/:id?',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/default',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
