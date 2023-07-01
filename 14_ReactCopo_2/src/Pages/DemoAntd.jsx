import React from 'react';
import { DatePicker, Space } from 'antd';



export default function DemoAntd() {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className='container'>
            <Space direction="vertical">
                {/* <DatePicker onChange={onChange} />
                <DatePicker onChange={onChange} picker="week" />
                <DatePicker onChange={onChange} picker="month" />
                <DatePicker onChange={onChange} picker="quarter" />
                <DatePicker onChange={onChange} picker="year" /> */}
                <DatePicker onChange={onChange} format={'DD/MM/YYYY'} showTime={true} showToday={true}></DatePicker>
                <DatePicker onChange={onChange} format={'MM/DD/YYYY'} showTime={true} showToday={true}/>
            </Space>
        </div>
    )
}
