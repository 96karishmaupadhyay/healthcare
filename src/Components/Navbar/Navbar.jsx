import { Box ,Container,Stack,Typography,Button, IconButton,useMediaQuery} from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Navbar.module.css";
export default function Navbar() {
    const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
     <Box p={1} bgcolor="#007FFF">
     <Typography fontSize={14} textAlign="center" color="#fff">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
     </Box>
     <Container maxWidth='xl'>
        <Stack direction="row" 
        py={4}
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between">
            <Link to="/">
            <img src={logo} alt="Logo" height={37} />
            </Link>
    <Stack 
    direction={{md:"row",xs:"column"}}
    spacing={4}
    alignItems={{xs:'flex-start',md:"center"}}
    pt={{ xs: 12, md: 1 }}
    pb={{ xs: 4, md: 1 }}
    px={{ xs: 4, md: 0 }}
    className={[styles.navlinks, menuOpen && styles.active]}>
    <Link>Find Doctors</Link>
            <Link to="/search">Hospitals</Link>
            <Link>Medicines</Link>
            <Link>Surgeries</Link>
            <Link>Software for Provider</Link>
            <Link>Facilities</Link>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation >
                My Bookings
              </Button>
            </Link>
            {isMobile&&
            (<IconButton
              onClick={() => setMenuOpen(false)}
            sx={{ color: "#fff",position: "absolute",top: 0, right: 32,}}>
                <CloseIcon/>
            </IconButton>)}
    </Stack>  
    {isMobile&&
    (<IconButton onClick={()=>setMenuOpen(true)}>
        <MenuIcon/>
    </IconButton>

    )}      
        </Stack>
     </Container> 
    </div>
  )
}
