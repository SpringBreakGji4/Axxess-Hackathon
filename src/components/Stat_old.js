import React, {useState, useEffect} from "react";
import {Box, Chip, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Stat(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/evaluate')
            .then(response => response.json())
            .then(data => setData(data))
            .then(console.log(data))
            .catch(error => console.error(error));
    }, []);

    return(
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            my: 2
        }}>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={7}>
                    <Typography variant="h5"
                                justifyContent="center"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                gutterBottom
                    >Statistics</Typography>
                </Grid>
                <Grid item container row xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Sensitivity </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body1">{data[0]}%</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Specificity </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body1">{data[1]}%</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Accuracy </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body1">{data[2]}%</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Precision </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body1">{data[3]}%</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
