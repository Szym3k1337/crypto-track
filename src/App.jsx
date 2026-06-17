import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CryptoPrice from './components/CryptoPrice.jsx';

import CryptoDetail from "./Components/CryptoDetail.jsx";

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