import "./App.css";
import "./assets/css/font.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
import Landing from "./pages/landing";
import Layout from "./components/layout";
import Portfolio from "./components/portfolio";
import StyleGuid from "./pages/stypeGuid";
import Home from "./pages/home/Home";
import Mintkey from "./pages/mintkey/Mintkey";
import Dashboard from "./pages/dashboard/Dashboard";
import Stalking from "./pages/stalking/Stalking";
import Airdrop from "./pages/airdrop/Airdrop";

// axios.interceptors.request.use(
//   function (config: any) {
//     // Do something before request is sent
//     const token = window.localStorage.getItem("jwt-authenticationToken");
//     if (token && config?.headers) {
//       if (config && config.headers) {
//         config.headers.Authorization = `Bearer ${token}`;
//       } else {
//         config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//       }
//     }
//     return config;
//   },
//   function (error: any) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Landing />} />
        <Route path="lands" element={<Land />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mint-key" element={<Mintkey />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="stalking" element={<Stalking />} />
          <Route path="air-drop" element={<Airdrop />} />
          <Route path="style-guid" element={<StyleGuid />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
