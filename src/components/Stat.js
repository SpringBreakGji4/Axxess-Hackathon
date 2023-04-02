import React, {useState, useEffect} from "react";
import {Box, Chip, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Stat(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://example.com/api/data')
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
                        <Typography variant="h6">Sensitivity : 95.77%</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Specificity : 87.87%</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Accuracy : 93.26% </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={12} md={7}>
                    <Grid>
                        <Typography variant="h6">Precision : 94.44% </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
