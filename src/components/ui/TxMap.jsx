import React from 'react';
import { Row, Col, Card, Input, Menu, Dropdown, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import ReactQMap from 'react-qmap';


const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);


class TxMap extends React.Component {
    render() {
        
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="txMap" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div>
                                    <Search
                                        id = "searchId"
                                        placeholder="input search text"
                                        onSearch={value => console.log(value)}
                                        style={{ width: 200 }}
                                    />

                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" href="http://localhost:3000/#/app/ui/txMap">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择城市 <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </div>
                            
                                <br />
                                        {/* This is frist test page. */}
                                        <ReactQMap 
                                            center={{latitude: 30.53786, longitude: 104.07265}} 
                                            initialOptions={{zoomControl: true, mapTypeControl: true}} 
                                            apiKey="FGRBZ-PJ76Q-S475Q-GM425-4CV5Q-CTBVK"
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
