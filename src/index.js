import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/** Improting toastContainer */
import { ToastContainer } from "react-toastify";
/** Importing CSS configruation */
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
            <App />
            <ToastContainer/>
    </div>


);
