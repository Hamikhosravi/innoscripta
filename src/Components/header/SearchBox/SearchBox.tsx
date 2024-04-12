import {useState} from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {useAppDispatch} from "../../../hooks/useStore";
import {searchBox} from "../../../store/filtered-slice";

export default function SearchBox() {
    const [searchInput, setSearchInput] = useState<string>("");
    const dispatch = useAppDispatch();

    function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchInput(event.target.value);
    }

    function handleSearch() {
        dispatch(searchBox(searchInput));
    }

    return (
        <TextField
            size="small"
            label="Search"
            variant="outlined"
            sx={{mx: 1}}
            // sx={{
            //     '& label.Mui-focused': {
            //         color: 'inherit', // Maintain label color when focused
            //     },
            //     '& .MuiOutlinedInput-root': {
            //         '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            //             borderColor: 'inherit', // Maintain outline color when focused
            //         },
            //     },
            // }}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon onClick={handleSearch}
                                                                             sx={{cursor: "pointer"}}/></InputAdornment>,
            }}
            onChange={searchHandler}
            onBlur={handleSearch} // Dispatch action when focus is lost from the input field
            value={searchInput}
        />
    );
}
