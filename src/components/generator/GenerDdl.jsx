import React from 'react';
import { Upload, Icon, message } from 'antd';

class GenerDdl extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fileName: ''
        }
    }

    handleReturn =(file,fileList)=>{
        debugger
        // this.setState({file,fileList})
    };
    
    render() {
        const { Dragger } = Upload;
        const props = {
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                  message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              },
              beforeUpload:this.handleReturn
        }
        return (
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
                </p>
          </Dragger>
        )
    }
}

export default GenerDdl;
