import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import CreateEmployee from './pages/createEmployee/CreateEmployee'
import Login from './pages/login/Login'
import UncontrolledLogin from './pages/unControlledLogin/UnControlledLogin'
import NotFound from './pages/notFound/NotFound'
import EmployeeLayout from './components/EmployeeLayout/EmployeeLayout'
import EmployeeContentLayout from './components/EmployeeContentLayout/EmployeeContentLayout'
import Header from './components/EmployeeContentLayout/Header/Header'
import EmployeeForm from './components/EmployeeContentLayout/EmployeeForm/EmployeeForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login/uncontrolled",
    element: <UncontrolledLogin />
  },
  {
    path: "/employees/create",
    element: <EmployeeLayout />,
    children: [
      {index: true, element: <EmployeeContentLayout>
                <Header title='Create Employee' />
                <EmployeeForm />
            </EmployeeContentLayout>}
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App