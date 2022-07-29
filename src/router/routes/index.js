import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Forex Comparator'

// ** Default Route
const DefaultRoute = '/default'

// ** Merge Routes
const Routes = [
  {
    path: '/:id?',
    exact: false,
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/default',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/faq/:type?',
    exact: true,
    component: lazy(() => import('../../views/faq'))
  }
  // {
  //   path: '/login',
  //   component: lazy(() => import('../../views/Login')),
  //   layout: 'BlankLayout',
  //   meta: {
  //     authRoute: true
  //   }
  // },
  // {
  //   path: '/faq',
  //   component: lazy(() => import('../../views/Error')),
  //   layout: 'BlankLayout'
  // }
]

export { DefaultRoute, TemplateTitle, Routes }
