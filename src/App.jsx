import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl">404 - Page Not Found 😵</h1>
        </div>
      ),
      children: [
        { path: "/", 
          element:  <div className="scroll-smooth">
                    <Home />
                    </div> },
        { path: "/projects", element: <Projects /> },

      ],
    },
  ]);

  const App = () => {
    return <RouterProvider router={router} />;
  };

  export default App;