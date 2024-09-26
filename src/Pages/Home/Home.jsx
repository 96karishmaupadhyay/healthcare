import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import SearchHospitalSection from '../../Components/SearchHospitalSection/SearchHospitalSection'
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import Offer from '../../Components/OfferSection/Offer'
import { Container, Box, Stack } from "@mui/material";
import Specialization from '../../Components/SpecializationSection/Specialization'
import Specialists from '../../Components/SpecialistSection/Speciallist'
import Caring from '../../Components/PatientCaringSection/Caring'
import Blog from '../../Components/BlogSection/Blog'
import Family from '../../Components/FamiySection/Family'
import Faq from '../../Components/FaqSection/Faq'
import Download from '../../Components/DownloadSection/Download'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
             "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <Navbar />
        <Container maxWidth="xl">
          <HeroSection/>
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -20, md: 20, lg: -20, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <ServicesSection/>
            <SearchHospitalSection />
          </Stack>
        </Container>
      </Box>

      <Offer />
      <Specialization/>
      <Specialists/>
      <Caring/>
      <Blog/>
      <Family/>
      <Faq/>
      <Download/>
      <Footer/>
    </Box>
  );
}
