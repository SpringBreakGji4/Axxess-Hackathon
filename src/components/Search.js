import React, {useState} from "react";
import {
    Grid,
    TextField,
    Box,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel, Radio, Checkbox, FormGroup, Chip
} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Search() {

    //const [formData, setFormData] = useState({});
    const [gender, setGender] = useState(0);
    const [polyuria, setPolyuria] = useState(0);
    const [polydipsia, setPolydipsia] = useState(0);
    const [suddenWeightLoss, setSuddenWeightLoss] = useState(0);
    const [weakness, setWeakness] = useState(0);
    const [polyphagia, setPolyphagia] = useState(0);
    const [genitalThrush , setGenitalThrush] = useState(0);
    const [visualBlurring, setVisualBlurring] = useState(0);
    const [itching, setItching] = useState(0);
    const [irritability, setIrritability] = useState(0);
    const [delayedHealing, setDelayedHealing] = useState(0);
    const [partialParesis, setPartialParesis] = useState(0);
    const [muscleStiffness, setMuscleStiffness] = useState(0);
    const [alopecia, setAlopecia] = useState(0);
    const [obesity, setObesity] = useState(0);
    const formData = {gender, polyuria, polydipsia, suddenWeightLoss, weakness, polyphagia, genitalThrush, visualBlurring, itching, irritability, delayedHealing, partialParesis, muscleStiffness, alopecia,  obesity  };
    const [result, setResult] = useState('no');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => setResult(data.predictions))
            .then(console.log("RES: " + result))
            .catch(error => console.error(error));
    };


    return (
        <div>
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
                        <form onSubmit={handleSubmit} name='sendQuery'>
                            <FormControl fullWidth>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="0" control={<Radio/>} label="Female" onChange={(e) => setGender(e.target.value)}/>
                                    <FormControlLabel value="1" control={<Radio/>} label="Male" onChange={(e) => setGender(e.target.value)}/>
                                </RadioGroup>
                                <FormLabel id="demo-row-radio-buttons-group-label">Select your match condition</FormLabel>
                                <FormGroup aria-label="position" row>
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Polyuria"
                                        labelPlacement="Polyuria"
                                        onChange={(e) => setPolyuria(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Polydipsia"
                                        labelPlacement="Polydipsia"
                                        onChange={(e) => setPolydipsia(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="sudden weight loss"
                                        labelPlacement="sudden weight loss"
                                        onChange={(e) => setSuddenWeightLoss(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="weakness"
                                        labelPlacement="weakness"
                                        onChange={(e) => setWeakness(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Polyphagia"
                                        labelPlacement="Polyphagia"
                                        onChange={(e) => setPolyphagia(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Genital thrush"
                                        labelPlacement="Genital thrush"
                                        onChange={(e) => setGenitalThrush(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="visual blurring"
                                        labelPlacement="visual blurring"
                                        onChange={(e) => setVisualBlurring(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Itching"
                                        labelPlacement="Itching"
                                        onChange={(e) => setItching(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Irritability"
                                        labelPlacement="Irritability"
                                        onChange={(e) => setIrritability(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="delayed healing"
                                        labelPlacement="delayed healing"
                                        onChange={(e) => setDelayedHealing(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="partial paresis"
                                        labelPlacement="partial paresis"
                                        onChange={(e) => setPartialParesis(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="muscle stiffness"
                                        labelPlacement="muscle stiffness"
                                        onChange={(e) => setMuscleStiffness(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Alopecia"
                                        labelPlacement="Alopecia"
                                        onChange={(e) => setAlopecia(e.target.value)}
                                    />
                                    <FormControlLabel
                                        value="1"
                                        control={<Checkbox/>}
                                        label="Obesity"
                                        labelPlacement="Obesity"
                                        onChange={(e) => setObesity(e.target.value)}
                                    />
                                </FormGroup>
                                <Button variant="contained" size="large" type="submit">Go</Button>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
            </Box>
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

        </div>

    )
}

function showResult(result) {
    if (result == 'yes'){
        return <Chip label="You have high chance diabetes" color="error"  />
    } else {
        return <Chip label="You have low chance diabetes" color="success"  />
    }
}
