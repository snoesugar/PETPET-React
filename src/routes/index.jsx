import { createHashRouter } from 'react-router-dom'
import { Home, Layout, Login, PetSitting, Services, User } from '../pages/pages' // 分頁元件

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'petSitting',
        element: <PetSitting />,
      },
      {
        path: 'services',
        element: <Services />,
      },
    ],
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/user',
    element: <User />,
  },
])

export default router
