import React from 'react';
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

const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let today = new Date();

const MyCalendar = (props) => {
    const [value, onChange] = useState(new Date());
    const [modal, showModal] = useState(false);

    const openModal = () => showModal(true);
    const exitModal = () => showModal(false);

    return (
        <div className="calendar-section">
            <h1 className="calendar-heading">Calendar</h1>
            {/* <img
                    src="https://www.pilotonline.com/resizer/2OpTLKC3OF9OswVc8FkeHheHU6Y=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/TSOIZTNY7NH4JLGPN6HL6VEXFY.png"
                    alt="Calendar"
                /> */}
            <div className="calendar-container">
                <Calendar
                  className="react-calendar"
                  onChange={onChange}
                  value={value}
                  calendarType="US"
                  onClickDay={openModal}

                />
                {modal && value.getDate() === today.getDate() ? (
                    <div className="calendar-modal">
                        <span className="exit-sign" onClick={exitModal}>
                            &#x2E3;
                        </span>
                        <p>
                            Today you have applied to {props.jobsArray.length}{' '}
                            jobs
                        </p>
                    </div>
                ) : modal &&
                  fakeData.includes(value.getDate()) &&
                  value.getMonth() === 11 ? (
                    <div className="calendar-modal">
                        <span className="exit-sign" onClick={exitModal}>
                            &#x2E3;
                        </span>
                        <p>
                            On {value.getDate()} of{' '}
                            {monthNames[value.getMonth()]} you have applied for{' '}
                            {Math.floor(Math.random() * 8)} jobs
                        </p>
                    </div>
                ) : (
                    modal && (
                        <div className="calendar-modal">
                            <span className="exit-sign" onClick={exitModal}>
                                &#x2E3;
                            </span>
                            <p>
                                On {value.getDate()} of{' '}
                                {monthNames[value.getMonth()]} you haven't
                                applied for shit!
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default MyCalendar;
