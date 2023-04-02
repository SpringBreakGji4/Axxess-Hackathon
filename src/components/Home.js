import React from "react";
import {Container, Grid, Link} from "@mui/material";
import Search from "./Search";
import Typography from "@mui/material/Typography";
import Introduction from "./Introduction";
import Results from "./Result";
import Stat from "./Stat";
export default function Home(){
    return(
        <Container maxWidth="false" component="div" sx={{ p: 3 }}>
            <Introduction/>
            <Search/>
            <Stat />
        </Container>
    )
}

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}