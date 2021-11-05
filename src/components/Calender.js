import { React, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ja', ja);

const Calender = () => {
    const initialDate = new Date()
    const [startDate, setStartDate] = useState(initialDate)
    const handleChange = (date) => {
        setStartDate(date);
        return date;
    }

    return (
        <DatePicker
            selected={startDate}
            onChange={handleChange}
        />
    )
}
export default Calender;