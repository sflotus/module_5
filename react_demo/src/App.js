import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {PageNotFound} from "./redux/components/PageNotFound";
import {List} from "./redux/components/List";
import {Create} from "./redux/components/Create";
import {Update} from "./redux/components/Update";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from "./redux/components/Layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
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

export default App;
