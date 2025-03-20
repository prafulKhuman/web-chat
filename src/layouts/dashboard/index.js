import { Navigate, Outlet } from "react-router-dom";
import { Stack } from '@mui/material';
import SideBar from "./SideBar";
import { useSelector } from "react-redux";


const DashboardLayout = () => {
const isAuthenticated = useSelector((state) => state.auth.authToken);

if(isAuthenticated?.lenth < 1){
  return <Navigate to='/auth/login'/>;
}

  return (
    <Stack direction='row'>
      {/* SideBar */}
      <SideBar/>
      <Outlet />
    </Stack>
    
  );
};

export default DashboardLayout;
