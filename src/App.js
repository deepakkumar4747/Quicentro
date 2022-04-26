import { Grid } from '@mui/material'
import React, { Component } from 'react'
import Carousel from './components/Carousel'
import Footer from './Dash/Footer'
import Hheader from './Dash/Nav'

export default function App()  {
  
    return (
      <Grid>
        <Hheader/>
        <Carousel/>
        <Footer/>
      </Grid>
    )
  }

