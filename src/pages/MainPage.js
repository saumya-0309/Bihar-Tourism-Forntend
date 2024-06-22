import React from 'react'
import ResponsiveAppBar from '../components/Common/Navbar';
import { useUser } from '../hooks/user';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const MainPage = () => {
  const { user } = useUser();
  return (
    <div>
      <ResponsiveAppBar user={user} />
      <Carousel indicators={false}>
      <Paper>
        <img
          src={"/banner1.png"}
          alt="banner"
          fill
          className="imgbanner"
        />
      </Paper>
      <Paper>
        <img
          src={"/banner3.jpeg"}
          alt="banner"
          fill
          className="imgbanner"
        />
      </Paper>
      <Paper>
        <img
          src={"/banner4.jpeg"}
          alt="banner"
          fill
          className="imgbanner"
        />
      </Paper>
      </Carousel>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </div>
  )
}

export default MainPage;