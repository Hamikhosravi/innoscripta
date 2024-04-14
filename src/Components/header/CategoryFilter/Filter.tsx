import React ,{ useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from "../../../hooks/useStore";
import { selectedSubject } from "../../../store/filtered-slice";

const Filter= memo(({className}:string) => {
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState('Arts');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/" && category === "All-Selected") {
            setCategory('Arts');
            dispatch(selectedSubject("Arts"));
        }
    }, [location.pathname, category, dispatch]);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
        dispatch(selectedSubject(event.target.value));
    };

    return (
        <FormControl className={className} sx={{ mx: {sm: 1}, minWidth: {sm: "227px"}, width: { xs: "100%", sm: "auto" } }} size="small">
            <InputLabel id="select">Category</InputLabel>
            <Select
                labelId="select"
                value={category}
                label="Category"
                onChange={handleChange}
            >
                <MenuItem value="Arts">Arts</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Computers">Computers</MenuItem>
                <MenuItem value="Games">Games</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="All-Selected" sx={{ display: location.pathname.includes('customized-news') ? "block" : "none" }}>All-Selected</MenuItem>
            </Select>
        </FormControl>
    );
});

export default Filter;
