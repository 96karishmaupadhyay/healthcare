import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import Download from "./Components/DownloadSection/Download";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
