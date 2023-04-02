import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Introduction() {
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            mb: 2
        }}>
            <Typography variant="h4" sx={{p:1}}>Early stage diabetes risk prediction</Typography>
            <Typography variant="body1" sx={{p:1}}>{intro}</Typography>
        </Box>
    );
}

const intro = "Early stage diabetes risk prediction is the process of identifying people who are at risk of developing diabetes before they show any symptoms. This can be done by looking at a person's risk factors, such as their age, weight, and family history.";