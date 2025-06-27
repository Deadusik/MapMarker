import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"

const Settings = () => {
    const [theme, setTheme] = useState('')

    const temeChangedHandler = () => {

    }

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theme}
                    label="Age"
                    onChange={temeChangedHandler}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Settings