import React from 'react'
import ResponsiveAppBar from '../components/Common/Navbar';
import { useUser } from '../hooks/user';

const MainPage = () => {
  const { user } = useUser();
  return (
    <div>
      <ResponsiveAppBar user={user}/>
    </div>
  )
}

export default MainPage;