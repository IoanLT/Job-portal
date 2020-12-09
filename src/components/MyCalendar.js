import React, { Component } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './MyCalendar.css';
import 'react-calendar/dist/Calendar.css';

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const MyCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <h1>Calendar</h1>
            {/* <img
                    src="https://www.pilotonline.com/resizer/2OpTLKC3OF9OswVc8FkeHheHU6Y=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/TSOIZTNY7NH4JLGPN6HL6VEXFY.png"
                    alt="Calendar"
                /> */}
            <Calendar
                // className="react-calendar"
                onChange={onChange}
                value={value}
                calendarType="US"
                onClickDay={(value) =>
                    alert(
                        'On ' +
                            monthNames[value.getMonth()] +
                            ', ' +
                            value.getDate() +
                            ' you have saved 7 jobs, applied 5 jobs and sent 2 emails'
                    )
                }
            />
        </div>
    );
};

export default MyCalendar;
