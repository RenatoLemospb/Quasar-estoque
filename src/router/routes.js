const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', nome: 'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'login', nome: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', nome: 'register', component: () => import('pages/Register.vue') },
      { path: 'email-confirmation', nome: 'email-confirmation', component: () => import('pages/EmailConfirmation.vue') },
      { path: 'me', nome: 'me', component: () => import('pages/Me.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
