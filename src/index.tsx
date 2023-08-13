import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/global.scss";
import "typeface-roboto";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./app/index";
import PrivacyPolicyPage from "./app/privacyPolicy";
import ChangelogPage from "./app/changelog";
import ContactPage from "./app/contact";

let element = document.getElementById("root");

if(!element) {
    element = document.createElement("div");
    element.id = "root";

    document.body.append(element);
}

const root = ReactDOM.createRoot(element);

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage/>
    },

    {
        path: "/contact",
        element: <ContactPage/>
    },

    {
        path: "/changelog",
        element: <ChangelogPage/>
    },

    {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage/>
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
