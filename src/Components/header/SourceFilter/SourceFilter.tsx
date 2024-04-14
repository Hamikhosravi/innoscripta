import React ,{ useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from "../../../hooks/useStore";
import { selectedSource } from "../../../store/filtered-slice";

const SourceFilter= memo(({className}:string) => {
    const dispatch = useAppDispatch();
    const [source, setSource] = useState(["Newsapi.ai", "Guardian"]);

    const handleChange = (event: SelectChangeEvent) => {
        setSource(event.target.value);
        dispatch(selectedSource(event.target.value));
    };

    return (
        <FormControl className={className} sx={{ mx: {sm: 1}, minWidth: {sm: "227px"}, width: { xs: "100%", sm: "auto" } }} size="small">
            <InputLabel id="select">Source</InputLabel>
            <Select
                labelId="select"
                value={source}
                label="Source"
                multiple
                onChange={handleChange}
            >
                <MenuItem value="Newsapi.ai">Newsapi.ai</MenuItem>
                <MenuItem value="Newsapi.org">Newsapi.org</MenuItem>
                <MenuItem value="Guardian">Guardian</MenuItem>
            </Select>
        </FormControl>
    );
});

export default SourceFilter;
