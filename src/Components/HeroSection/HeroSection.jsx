
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Typography,Box,Stack,Button} from '@mui/material'
import {Link} from "react-router-dom"
import 'swiper/css';
import img from "../../images/hero_image.png"
export default function HeroSection() {
  return (
    <div>
      <Swiper>
        <SwiperSlide>
            <Stack direction={{sx:"column",md:"row"}} spacing={6}  pt={2} alignItems="center" style={{ marginTop: "-50px" }}>
                <Box>
                <Typography variant='h3' component='h1'>Skip the travel! Find Online</Typography>
                        <Typography variant='h1' component='h1' mb={1}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span></Typography>
                        <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                 </Typography>
                 <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation>
                                Find Centers
                            </Button>
                </Link>
                </Box>
                <Box
                     component={'img'}
                     src={img}
                     width={{ xs: 1, md: "50%" }}
                     
                />
            </Stack>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
