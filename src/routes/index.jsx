import { createHashRouter } from 'react-router-dom'
import { Home, Layout, PetSitting, Services } from '../pages/pages' // 分頁元件

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
])

export default router
