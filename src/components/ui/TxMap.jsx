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
            jsonDataDetail :[],
            IP : '',
            latitudeNum : '',
            longitudeNum : '',
            nation : '',
            province: '',
            cityName : '',
            adcode: '',
            searchText: ''
        }
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
        };

        // var str = document.getElementById(proId);
        // str.innerHTML(citysDatas)
        // this.setState({
        //     jsonDataDetail: citysDatas
        // })
        // this.forceUpdate();
      };

    componentDidMount () {
        // alert('已经进入到该函数')
        // 获取地理位置
        fetch('http://apis.map.qq.com/ws/location/v1/ip?key=FGRBZ-PJ76Q-S475Q-GM425-4CV5Q-CTBVK').then((res)=>{
        // alert('测试fetch')
          if(res.ok){
            // alert('进if条件')
            res.text().then((data)=>{
                // alert(data)
              const detail=JSON.parse(data)
              this.setState({
                IP: detail.result.ip,
                latitudeNum: detail.result.location.lat,
                longitudeNum: detail.result.location.lng,
                nation: detail.result.ad_info.nation,
                province: detail.result.ad_info.province,
                cityName: detail.result.ad_info.city,
                adcode: detail.result.ad_info.adcode
              })
            })
          }
        }).catch((res)=>{
          console.log(res.status);
        });
      };

      searchLocation = (value) => {
        this.setState({
            searchText: value
        })
        // var searchURL = 'https://apis.map.qq.com/ws/geocoder/v1/?address=' +value+ '&key=FGRBZ-PJ76Q-S475Q-GM425-4CV5Q-CTBVK'
        // alert(searchURL)
        // fetch('searchURL').then((res)=>{
            fetch('https://apis.map.qq.com/ws/geocoder/v1/?address=' +value+ '&key=FGRBZ-PJ76Q-S475Q-GM425-4CV5Q-CTBVK').then((res)=>{
             alert('测试方法里fetch')
              if(res.ok){
                alert('进方法if条件')
                res.text().then((data)=>{
                     alert(data)
                //   debugger
                  const detailInfo=JSON.parse(data)
                  this.setState({
                    latitudeNum: detailInfo.result.location.lat,
                    longitudeNum: detailInfo.result.location.lng
                  })
                })
              }
            }).catch((res)=>{
              console.log(res.status);
            });


      }


    
    render() { 
        // alert('当前搜寻内容为：'+ this.state.searchText)
        // console.log(this.state.jsonDataDetail, 'hhhhhhh')
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
                                        // onSearch={value => console.log(value)}
                                        onSearch={this.searchLocation.bind(this)}
                                        style={{ width: 200 }}
                                    /> 

                                    <div style={{ width: 10 }} > </div>

                                    <div>
                                        <div onClick = {this.getProvinceData.bind(this)}>请选择省份<Icon type="down" /></div>
                                        <div>
                                            {this.state.jsonDatas}                                  
                                        </div>
                                        
                                    </div>

                                </div>
                            
                                <br />
                                        {/* <div onClick = {this.getIp.bind(this)}>获取ip</div> */}
                                        <div>
                                        <div style={{fontSize:20}}>定位用户当前所在城市具体信息：</div>
                                        <div>当前用户ip地址：{this.state.IP}</div>
                                        <div>location：lat-{this.state.latitudeNum}  lng- {this.state.longitudeNum}</div>
                                        <div>具体位置为：{this.state.nation}-{this.state.province}-{this.state.cityName} </div>
                                        <div>当前adcode为：{this.state.adcode}</div>
                                        </div>


                                        <ReactQMap 
                                            center={{latitude: this.state.latitudeNum, longitude: this.state.longitudeNum}} 
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
