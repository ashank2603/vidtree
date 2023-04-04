import { Stack, Typography } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2}
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >   
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" height={45} />
            <Typography variant="h4" fontWeight={500}  color="white" ml={{ sm: "100px"}}>
                VidTree
            </Typography>
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navbar