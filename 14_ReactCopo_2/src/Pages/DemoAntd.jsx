import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { DatePicker, Space, Rate, Badge, Dropdown, Table } from 'antd';

const items = [
    {
        key: '1',
        label: 'Action 1',
    },
    {
        key: '2',
        label: 'Action 2',
    },
];

export default function DemoAntd() {

    const expandedRowRender = () => {
        const columns = [
            {
                title: 'Ngày tháng',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Status',
                key: 'state',
                render: () => {
                    return <i className='fa fa-heart text-danger'></i>
                },
            },
            {
                title: 'Upgrade Status',
                dataIndex: 'upgradeNum',
                key: 'upgradeNum',
            },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        <a>Pause</a>
                        <a>Stop</a>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a>
                                More <DownOutlined />
                            </a>
                        </Dropdown>
                    </Space>
                ),
            },
        ];
        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i.toString(),
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Nền tảng',
            dataIndex: 'platform',
            key: 'platform',
        },
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: 'Upgraded',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
        },
        {
            title: 'Creator',
            dataIndex: 'creator',
            key: 'creator',
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Action',
            key: 'operation',
            render: () => <a>Publish</a>,
        },
    ];
    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i.toString(),
            name: 'Screen',
            platform: 'iOS',
            version: '10.3.4.5654',
            upgradeNum: 500,
            creator: 'Jack',
            createdAt: '2014-12-24 23:12:00',
        });
    }

    const onChange = (date, dateString) => {
        /*
            date ở đây là một object để ta có thể format lại ngày tháng năm theo server.
            api quy định format là DD/MM/YYYY
            client: MM/DD/YYYY => Dùng date chuyển về format backend cần.
        */


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
                <DatePicker onChange={onChange} format={'DD/MM/YYYY'} showTime={true} showToday={true} />
                <DatePicker onChange={onChange} format={'MM/DD/YYYY'} showTime={true} showToday={true} />
                <Rate style={{ color: 'purple' }} allowHalf defaultValue={2.5} onChange={(value) => {
                    console.log(value);
                }} />
            </Space>

            <Table
                columns={columns}
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
            />
            
        </div>
    )
}
