import React from 'react';
import { Row, Col, Card, Button, Radio, Icon, Menu, Dropdown } from 'antd';

class GenerDdl extends React.Component {
    state = {
        size: 'default',
        loading: false,
        iconLoading: false,
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };
    handleMenuClick = (e) => {
        console.log('click', e);
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
    render() {
        return (
            <div className="gutter-example button-demo">
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                    This is frist test page.
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

export default GenerDdl;
