import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../images/Doctor.png";
import pharmacyIcon from "../../images/Drugstore.png";
import hospitalIcon from "../../images/Hospital.png";
import capsuleIcon from "../../images/Capsule.png";
import ambulanceIcon from "../../images/Ambulance.png";
import IconBox from "../IconBox/IconBox";
import { useMemo } from "react";

export default function ServicesSection() {
    const Services = useMemo(
        () => [
          { img: doctorIcon, title: "Doctors" },
          { img: pharmacyIcon, title: "Labs" },
          { img: hospitalIcon, title: "Hospitals", active: true },
          { img: capsuleIcon, title: "Medical Store" },
          { img: ambulanceIcon, title: "Ambulance" },
        ],
        []
      );
  return (
    <div>
        <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconBox
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
   
    </div>
  )
}
