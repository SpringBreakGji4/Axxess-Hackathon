import React, {useState, useEffect} from "react";
import {Box, Chip, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Result() {

    const [result, setResult] = useState(new Boolean(false));

    useEffect(() => {
        fetch('https://example.com/api/data')
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
        }}>
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} md={7}>
                    <Typography variant="h5"
                                justifyContent="center"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                gutterBottom
                    >Result</Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{mb: 2}}
                         justifyContent="center"
                         display="flex"
                         justifyContent="center"
                         alignItems="center"
                    >
                        {showResult(result)}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

function showResult(result) {
    if (result == true){
        return <Chip label="You have high chance diabetes" color="error"  />
    } else {
        return <Chip label="You have low chance diabetes" color="success"  />
    }
}