import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function SearchBox() {
    return(
        <TextField
            size="small"
            label="Search"
            variant="outlined"
            sx={{
                '& label.Mui-focused': {
                    color: 'inherit', // Maintain label color when focused
                },
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'inherit', // Maintain outline color when focused
                    },
                },
            }}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
        />
    );
}
