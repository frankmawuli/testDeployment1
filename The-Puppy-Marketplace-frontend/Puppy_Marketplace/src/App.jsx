import Home from './Home';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import VerifyEmail from './Components/VerifyEmail';
import Verified from './Components/Verified';
import ForgotPassword from './Components/ForgotPassword';
import VerifyEmailForgotPassword  from './Components/VerifyEmailForgotPassword';
import CreateNewPassword from './Components/CreateNewPassword';
import Dashboard from './UserDashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/login/forgot-password" element={<ForgotPassword />} />
        <Route path="/login/forgot-password/verify-email-forgotpassword" element={<VerifyEmailForgotPassword />} />
        <Route path="/login/forgot-password/verify-email-forgotpassword/create-new-password" element={<CreateNewPassword />} />
        <Route path="/login/user-dashboard" element={<Dashboard />} />
        <Route path="/signup/verify-email" element={<VerifyEmail />} />
        <Route path="/signup/verify-email/verified" element={<Verified />} />
        <Route path="/signup/verify-email/verified/user-dashboard" element={<Dashboard />} />

        

    

        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
