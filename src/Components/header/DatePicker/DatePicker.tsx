import React, { useState, memo } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { IconButton, Modal, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { useAppDispatch } from "../../../hooks/useStore";
import { pickedDates } from "../../../store/filtered-slice";
import formatDate from "../../../plugins/changeDateFormat";
import "./DatePicker.css"

const DateRangePickerWithIcon = memo(() => {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleIconClick = () => {
        setShowModal(true);
    };

    const handleSelect = (ranges) => {
        // Update state with selected date range
        setDateRange([ranges.selection]);
    };

    const closeModal = () => {
        setShowModal(false);
        const startDate = formatDate(dateRange[0].startDate);
        const endDate = formatDate(dateRange[0].endDate);
        dispatch(pickedDates({ startDate, endDate }))
    }

    return (
        <div>
            <IconButton onClick={handleIconClick} sx={{ '&:focus': { outline: "unset" } }}>
                <CalendarTodayIcon />
            </IconButton>
            <Modal
                open={showModal}
                onClose={closeModal}
                aria-labelledby="date-range-modal"
                aria-describedby="select-date-range"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'auto'
                }}
            >
                <Box sx={{
                    width: 'auto', // Adjust the width as needed
                    maxHeight: '80vh', // Adjust the height as needed
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    position: "relative",
                    p: 4,
                }}>
                    <IconButton
                        aria-label="close"
                        onClick={closeModal}
                        sx={{ position: 'absolute', right: 0, top: 0, zIndex: 1 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DateRangePicker
                        ranges={dateRange}
                        onChange={handleSelect}
                        maxDate={new Date()} // Disable future dates
                    />
                </Box>
            </Modal>
        </div>
    );
});

export default DateRangePickerWithIcon;
