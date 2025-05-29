import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

import './App.css'
import Login from './pages/login/Login'
import UncontrolledLogin from './pages/unControlledLogin/UnControlledLogin'
import NotFound from './pages/notFound/NotFound'
import EmployeeLayout from './components/EmployeeLayout/EmployeeLayout'
import EmployeeDetails from './components/EmployeeContent/EmployeeDetails/EmployeeDetails'
import EmployeeList from './components/EmployeeContent/EmployeeList/EmployeeList'
import CreateEmployee from './pages/createEmployee/CreateEmployee'
import UpdateEmployee from './pages/updateEmployee/updateEmployee'


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
    path: "/employees",
    element: <EmployeeLayout />,
    children: [
      {index: true, element: <EmployeeList />},
      {path: "create", element: <CreateEmployee />},
      {path: ":id", element: <EmployeeDetails />},
      {path: ":id/update", element: <UpdateEmployee />}
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