import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admindashboard from './AdminComponents/admindashboard';
import Userdashboard from './UsersComponents/userdashboard';
import LoginRegister from './LoginRegister/loginregister';
import BookProvider from './UsersComponents/BookContext';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Preloader from './components/preloader';
import Wrongroute from './components/wrongroute';
import AuthProvider from './Protected/Authencontext';
import ProtectedRoute from './Protected/ProtectedRoute';


const App = () => {  
   // const[loader, setloader] =useState(true);
   
   // useEffect(()=>{
   //    const timer = setTimeout(()=>setloader(false),3000)
   //    return()=> setloader(timer)
   // },[]);

   // if(loader){
   //    return(
   //       <Preloader/>
   //    )
   // }

   return (
      <AuthProvider>
         <BookProvider>
         <Router>
         <Routes>
            <Route path="/" element={<LoginRegister/>} />
            <Route path="/admin-dashboard" element={<ProtectedRoute><Admindashboard/></ProtectedRoute>} />
            <Route path="/user-dashboard" element={<ProtectedRoute><Userdashboard/></ProtectedRoute>} />
            <Route path="/login" element={<LoginRegister/>}/>
            <Route path="*" element={<Wrongroute/>} />
         </Routes>
      </Router>
       </BookProvider>
      </AuthProvider>
       
   );
};

export default App;
