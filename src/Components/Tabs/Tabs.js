// components/TabsComponent.js

import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabsComponent = ({ tabData }) => {
    return (
        <Tabs tabPosition="right" type='card'defaultActiveKey="1">
            {tabData.map((tab, index) => (
                <TabPane tab={tab.title} key={index + 1}>
                    {tab.content}
                </TabPane>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
