import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { IconButton, Modal, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateRangePickerWithIcon = () => {
    const [showModal, setShowModal] = useState(false);
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    console.log('dateRange', dateRange);

    const handleIconClick = () => {
        setShowModal(true);
    };

    const handleSelect = (ranges) => {
        // Update state with selected date range
        setDateRange([ranges.selection]);
        // Do not close the modal after selecting dates
        // setShowModal(false);
        // Handle the date change
        console.log('Selected date range:', ranges.selection);
    };

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]; // Extract YYYY-MM-DD from ISO format
    };

    const closeModal = () => {
        setShowModal(false);
        console.log("yessssss", formatDate(dateRange[0].endDate));
    }


    return (
        <div>
            <IconButton onClick={handleIconClick}>
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
                    p: 4,
                }}>
                    <DateRangePicker
                        ranges={dateRange}
                        onChange={handleSelect}
                        maxDate={new Date()} // Disable future dates
                    />
                </Box>
            </Modal>
        </div>
    );
};

export default DateRangePickerWithIcon;
