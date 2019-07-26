import React from 'react';
import { Row, Col, Card, Button, Radio, Icon, Menu, Dropdown } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import ReactQMap from 'react-qmap';

class TxMap extends React.Component {
   
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="txMap" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                    {/* This is frist test page. */}
                                    <ReactQMap 
                                        center={{latitude: 30.53786, longitude: 104.07265}} 
                                        initialOptions={{zoomControl: true, mapTypeControl: true}} 
                                        apiKey="xxxxxx-xxxxx-xxxxx-xxxxxx"
                                        style={{height: 900}}    // 高度和宽度默认占父元素的100%
                                    />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <style>{`
                    .button-demo .ant-btn {
                        margin-right: 8px;
                        margin-bottom: 12px;
                    }
                `}</style>
            </div>
        )
    }
}

export default TxMap;
