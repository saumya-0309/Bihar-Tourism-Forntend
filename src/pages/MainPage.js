import React from 'react'
import ResponsiveAppBar from '../components/Common/Navbar';
import { useUser } from '../hooks/user';
import MainPageCrousel from '../components/MainPage/MainPageCrousel';
import TouristPlaces from '../components/MainPage/TouristPlaces';
import OurTourGuide from '../components/MainPage/OurTourGuide';

const MainPage = () => {
  const { user } = useUser();
  return (
    <>
      <ResponsiveAppBar user={user} />
      <MainPageCrousel/>
      <TouristPlaces/>
      <OurTourGuide/>
    </>
  )
}

export default MainPage;