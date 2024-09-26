import offer1 from '../../images/offer1.png'
import offer2 from '../../images/offer2.png'
import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={
                        {
                            767: {
                                slidesPerView: 3
                            }
                        }
                    }
                    style={{
                              paddingBottom: '40px', 
                            }}
                >

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} 
                            sx={{
                                   maxWidth: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   margin: '0 auto',
                              }}                             
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} 
                            sx={{
                                   maxWidth: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   margin: '0 auto',
                              }} 
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} 
                            sx={{
                                   maxWidth: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   margin: '0 auto',
                              }} 
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} 
                            sx={{
                                   maxWidth: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   margin: '0 auto',
                              }} 
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} 
                            sx={{
                                   maxWidth: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   margin: '0 auto',
                              }} 
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} 
                            sx={{
                                   maxWidth: '100%',
                                   height: 'auto',
                                   display: 'block',
                                   margin: '0 auto',
                              }} 
                        />
                    </SwiperSlide>

                </Swiper>
            </Container>
        </Box>
    )
}