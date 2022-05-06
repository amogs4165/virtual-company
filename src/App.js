
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import Dashboard from "./screens/admin/dashboard";
import SignIn from "./screens/admin/signIn";
import Companies from "./screens/users/companies";
import CompanyInfo from "./screens/users/companyDetails";
import Home from "./screens/users/home";
import Chat from "./screens/users/message";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/admin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/companyinfo" element={<CompanyInfo/>}/>
          <Route path="/messages" element={<Chat/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
