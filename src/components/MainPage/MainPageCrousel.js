import { Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

const MainPageCrousel = () => {
  return (
    <Carousel stopAutoPlayOnHover={false} indicators={false}>
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
  )
}

export default MainPageCrousel