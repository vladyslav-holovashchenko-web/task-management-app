import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import './styles/index.css'
import { Loading } from './components/ui/Loading'
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import { PrivateRoute } from './components/layouts/PrivateRoute'
import { Dashboard } from './pages/Dashboard'
import { Layout } from './components/layouts/Layout'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const LoginPage = lazy(() => import('./pages/Auth/Login'))
const RegisterPage = lazy(() => import('./pages/Auth/Register'))

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </PrivateRoute>
    ),
  },
  { path: '*', element: <NotFound /> },
]

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
