import React ,{ useState, useEffect, memo } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useAppDispatch, useAppSelector} from "../../../hooks/useStore";
import {selectedSource} from "../../../store/filtered-slice";

const SourceFilter= memo(({className}:string) => {
    const dispatch = useAppDispatch();
    const [source, setSource] = useState([]);
    const [open, setOpen] = useState(false); // State to control the menu open state
    const sourceQuery = useAppSelector(state => state.filtered.source); // Get sourceQuery from the store

    useEffect(() => {
        setSource(sourceQuery);
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setSource(event.target.value);
        dispatch(selectedSource(event.target.value));
        setOpen(false); // Close the menu after selection
    };

    return (
        <FormControl className={className} sx={{ mx: {sm: 1}, minWidth: {sm: "227px"}, width: { xs: "100%", sm: "auto" } }} size="small">
            <InputLabel id="select">Source</InputLabel>
            <Select
                labelId="select"
                value={source}
                label="Source"
                multiple
                open={open} // Control the menu open state
                onOpen={() => setOpen(true)} // Open the menu
                onClose={() => setOpen(false)} // Close the menu
                onChange={handleChange}
            >
                <MenuItem value="Newsapi.ai">Newsapi.ai</MenuItem>
                <MenuItem value="New York Times">New York Times</MenuItem>
                <MenuItem value="Guardian">Guardian</MenuItem>
                <MenuItem value="Newsapi.org">Newsapi.org</MenuItem>
            </Select>
        </FormControl>
    );
});

export default SourceFilter;
