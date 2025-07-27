import { useEffect, useState, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import { createRoot } from "react-dom/client";
import "./index.css";
import FloaterEmailJs from "./components/FloaterEmailJs";
import ScrollToTop from "./utils/ScrollToTop";
import { delayedDisplay } from "./utils/utility";
import AnimateElement from "./components/AnimateElement";
import { useLocation } from "react-router-dom";
import { ProviderMethodContext } from "./MyFunction";

function App() {
  const [activePage, setActivePage] = useState(getPathLabel(useLocation()));

  function getPathLabel(url) {
    const lastSegment = url.pathname.split("/");
    return lastSegment[1] || "home";
  }

  useEffect(() => {
    // This is where you can add any side effects or initializations
    // For example, you might want to fetch some data or set up event listeners
    console.log("App component mounted");
    delayedDisplay();
    // Cleanup function to run when the component unmounts
    return () => {
      console.log("App component unmounted");
    };
  }, []);

  return (
    <div className="app">
      <Header activePage={activePage} setPage={setActivePage}></Header>
      <ProviderMethodContext.Provider value={{ myFunction: setActivePage }}>
        <Outlet></Outlet>
      </ProviderMethodContext.Provider>
      <ScrollToTop />
      <Footer activePage={activePage} setPage={setActivePage}></Footer>
      <div className="emailJsFloaterContainer">
        <div>
          <FloaterEmailJs></FloaterEmailJs>
        </div>
      </div>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

function callback(e) {
  e.forEach((e) => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.animation =
        "aboutUsAniLeftToRight 1s ease-in-out forwards";
    }
  });
}
const observer = new IntersectionObserver(callback, options);
allTheEleAnimBottUp.forEach((ele) => {
  observer.observe(ele);
});
export default App;
