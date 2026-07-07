import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CryptoPrice from './Components/CryptoPrice.tsx';

import CryptoDetail from "./Components/CryptoDetail.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CryptoPrice />,
  },
  {
    path: "/crypto/:id",
    element: <CryptoDetail />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;