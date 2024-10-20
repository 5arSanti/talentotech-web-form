//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

// CSS
import './App.css'
import './App.css'
import "./styles.css"

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { AppProvider } from "../../Context";

//Screens
import { Home } from "../Screens/Home";

// Utils
import { scrollToValue } from "../../utils/scrollToValue";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GovNavbar } from "../components/GovNavbars";
import { TalentoTechNav } from "../components/TalentoTechNav";
import { WrapperContainer2 } from "../components/WrapperContainers";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {

    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/*", element: <Navigate replace to={"/home"}/>},


    ]);
    
    return routes;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <WrapperContainer2 className="main-container relative" padding={0} gap={0} flexDirection="column" justifyContent="center" alignItems="center">
                        <GovNavbar/>
                        <TalentoTechNav/>
                        <AppRoutes/>
                    </WrapperContainer2>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

