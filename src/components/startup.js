import React, {Component} from "react";
import {connect} from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class startUp extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            checkConnect: false,
        };
    }
    componentDidMount() {
    // fetch("http://localhost:8080/database.json")
    //   .then(res => res.json())
    //   .then(res => this.setState({ data: res }))
    //   .catch(err => console.log(err));
  }

  componentWillReceiveProps(nextProps) {

    } 
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            if (e.target.textContent == "TestConnect") {
              fetch('http://localhost:8080/testconnect', {
                method: 'post',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                databaseName: values.databaseName,
                port: values.port,
                password: values.password,
                userName: values.userName
                })
            })
                .then(item => {
                  if (item.status == 200) {
                    this.setState({
                      checkConnect: true
                    })
                  }
                  else {
                    this.setState({
                      checkConnect: false
                    })
                  }
                })
                .catch(err => console.log(err))
            }
            else {
              fetch('http://localhost:8080/database', {
                method: 'post',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                databaseName: values.databaseName,
                port: values.port,
                password: values.password,
                userName: values.userName
                })
            }).then(response => {
              if(response.status === 200) {
                this.props.history.push("/backup")
              }
            }).catch(err => console.log(err))
            
            
            // .then(response => response.json())
            //     .then(item => this.setState({ data: item })
            //     )
            //     .catch(err => console.log(err))
            }
            }
        });
      };  
    render() {
        const { getFieldDecorator } = this.props.form;
        
        this.state.checkConnect ? console.log(this.state.checkConnect) : console.log("connectFalse");
        
        // if (this.state.data) {
        //   this.state.data.map((item)=> {
        //     console.log(item.id)
        // })
        // }
        
        return (
            <div style={{ textAlign: "center" }}>
              <Form>
                <Form.Item>
                  {getFieldDecorator('port')(
                    <Input
                      placeholder="Port"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('databaseName')(
                    <Input
                      placeholder="Database Name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('userName')(
                    <Input
                      placeholder="User Name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password')(
                    <Input
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary"
                    onClick={this.handleSubmit}
                  >
                    TestConnect
                  </Button>
                  <Button type="primary" 
                    onClick={this.handleSubmit}
                  >
                    Connect
                  </Button>
                </Form.Item>
              </Form>
            </div>
            
        );
      }
}
const startUpFormWrapper = Form.create({
    name: "start-up",
    mapPropsToFields(props) {
      return {
        port: Form.createFormField({
          value: 5432
        }),
        databaseName: Form.createFormField({
          value: "kaigo1"
        }),
        userName: Form.createFormField({
            value: "postgres"
        }),
        password: Form.createFormField({
        value: "12345"
        }),
      };
    },
  })(startUp);
  const mapStateToProps = (state) => {
    return {
      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
export default connect(null, null)(startUpFormWrapper);
