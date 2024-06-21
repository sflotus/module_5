import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Layout} from "./ss5/Layout";
import {List} from "./ss5/List";
import {Create} from "./ss5/Create";
import {Update} from "./ss5/Update";
import {PageNotFound} from "./ss5/PageNotFound";
import {Provider} from "react-redux";
import store from "./ss5/store";

function AppV2() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<List/>}/>
                            <Route path="create" element={<Create/>}/>
                            <Route path="update/:id" element={<Update/>}/>
                        </Route>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default AppV2;
