

export default {
    path: '/cinema',
    component: () => import('@/views/Cinema'),
    children:[
      {
        path:'cinemaList',
        component: () => import('@/components/CinemaList'),
      },
      {
        path:'cinemaBrand',
        component: () => import('@/components/CinemaBrand'),
      },
      {
        path:'cinemaCharacteristic',
        component: () => import('@/components/CinemaCharacteristic'),
      },
      {
        path:'/cinema',
        redirect:'/cinema/cinemaList'
      }
    ]
  }

