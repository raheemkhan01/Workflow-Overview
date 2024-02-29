import React, { useEffect, useState } from 'react';
import { Avatar, Card, Col, Row, Typography, Tooltip, Button, Progress, Radio } from 'antd';
import { CheckCircleOutlined, IssuesCloseOutlined, ClockCircleOutlined, StopOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
import api from '@/api';
const DashCards = () => {
  const [size, setSize] = useState('large');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const result = await axios.get('https://jp2malu3r8.execute-api.us-east-1.amazonaws.com/dev/org_projects_overview');
        const result = await api.get('/org_projects_overview');
        setData(result.data);
        console.log(result.data)
      } catch (error) {
        // handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>

      <Row gutter={16} className='gap-6 mt-4 w-full' >
        <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px',height:'fit-content' ,padding: '0px' }}>
          <Card className='w-full h-[15rem]'
            bordered={false}
            style={{
              boxShadow: 0
            }}>
              <div className='flex flex-col'>
            <div className="flex items-center justify-between">
              <Title level={4}>Total Projects </Title> <CheckCircleOutlined style={{ color: '#1890FF' }} />
            </div>
            <Title level={4}>{data.total_projects}</Title>
            <Title level={5}>Progress {data.percentage_completed}%</Title>
            <Progress type="line" percent={data.percentage_completed} strokeWidth={9}  strokeColor="#F8D236" trailColor='#F6EEFF' />
            <Paragraph>Total Task {data.total_tasks}</Paragraph>
            </div>
          </Card>
        </Col>

        <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px',height: 'fit-content', padding: '0px' }}>
          <Card className='w-full '
            bordered={false}>
            <div className="flex items-center justify-between">
              <Title level={4}>Completed Projects </Title> <IssuesCloseOutlined style={{ color: '#52C41A' }} />
            </div>
            <Title level={2}>{data.completed}</Title>
            <Progress type="line" percent={`${Math.round((data.completed / data.total_projects) * 100)}`} strokeWidth={9} strokeLinecap='square' strokeColor="#52C41A" trailColor='#F6EEFF' />
            <Paragraph className='my-9'>Completed Before 05 Days</Paragraph>
          </Card>
        </Col>

        <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px',height: "fit-content", padding: '0px' }}>
          <Card className='w-full'
            bordered={false}>
            <div className="flex items-center justify-between">
              <Title level={4}>Inprogress Projects </Title> <ClockCircleOutlined style={{ color: '#FAAD14' }} />
            </div>
            <Title level={2}>{data.in_progress}</Title>
            <Progress type="line" percent={`${Math.round((data.in_progress / data.total_projects) * 100)}`} strokeWidth={9} strokeLinecap='square' strokeColor="#F8D236" trailColor='#F6EEFF' />
            <Paragraph className='my-9'>View Details</Paragraph>
          </Card>
        </Col>

        <Col span={5} style={{ boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)", borderRadius: '5px', height: 'fit-content', padding: '0px' }}>
          <Card className='w-full'
            bordered={false}>
            <div className="flex items-center justify-between">
              <Title level={4}>Unassign Projects </Title> <StopOutlined style={{ color: '#FF4D4F' }} />
            </div>
            <Title level={2}>{data.unassigned}</Title>
            {/* <Progress type="line" percent={30} strokeWidth={16} strokeLinecap='square' strokeColor="#FF4D4F" trailColor='#F6EEFF' /> */}
            <Progress type="line" percent={`${Math.round((data.unassigned / data.total_projects) * 100)}`} strokeWidth={16} strokeLinecap='square' strokeColor="#FF4D4F" trailColor='#F6EEFF' />
            <Paragraph className='my-9'>view Details</Paragraph>
          </Card>
        </Col>

      </Row>

    </>
  )
};
export default DashCards;
