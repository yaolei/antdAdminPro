import React from 'react';
import {Col, Card, Input, Cascader, Icon, Dropdown } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import ReactQMap from 'react-qmap';
import city from './cityData';


const { Search } = Input;

function onChange(value) {
    console.log(value);
}

class TxMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            jsonDatas :'',
            jsonDataDetail :[]
        }
    } 

    onSearch(val) {
        
    }

    genCity() {
        var cityDas = [];
        if(this.state.jsonDataDetail.length > 0) {
            for (var i = 0; i< this.state.jsonDataDetail.length; i++) {
                cityDas.push(
                    <div key={i}>
                        {this.state.jsonDataDetail[i]}
                    </div>
                )
            }
        }
    }

        // componentDidUpdate(props) {
        //     this.state.jsonDataDetail
        // }
    getProvinceData = () => {
        var res = [];
        var len = city.provinces.length;
        for(let i = 0; i < len; i++) {                        
          res.push(
              <div key={i}>
                <div onClick={() => {this.getCityData(city.provinces[i].name, city.provinces[i].code)}}>
                    {city.provinces[i].name} <Icon type="down" />
                </div>
                <div id={city.provinces[i].code}></div>
            </div>

              );
        }

        this.setState({
            jsonDatas: res
        })
      };

      getCityData = (name, proId) => {
        // var proviDatas = [];
        var citysDatas = [];
        var provinceDatas = city.provinces;
        var len1 = provinceDatas.length;
        
        for(let i = 0; i < len1; i++) {
            var provName = provinceDatas[i].name;
            if (name === provName) {
               for (let j = 0; j < provinceDatas[i].cities.length; j++) {
                    citysDatas.push(
                        <div key={i}>
                            <div style = {{ width: 10, height: 10}} >
                                {provinceDatas[i].cities[j].name}
                            </div>
                        </div>
                    );
                } 
            }
        }
        var str = document.getElementById(proId).innerHTML(citysDatas);
        console.log(str);
        // var str = document.getElementById(proId);
        // str.innerHTML(citysDatas)
        // this.setState({
        //     jsonDataDetail: citysDatas
        // })
        // this.forceUpdate();
      };

    render() { 
        console.log(this.state.jsonDataDetail, 'hhhhhhh')
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="txMap" />
                {/* <Row gutter={16}> */}
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

                                    <div style={{ width: 10 }} > </div>

                                    <div>
                                        <div id = "province" onClick = {this.getProvinceData.bind(this)}>请选择省份<Icon type="down" /></div>
                                        <div id = "allProvince">
                                            {this.state.jsonDatas}                                  
                                        </div>
                                        
                                    </div>

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
                {/* </Row> */}
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
