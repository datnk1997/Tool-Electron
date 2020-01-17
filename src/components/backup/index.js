import React, {Component} from "react";
import {connect} from "react-redux";
import { Tabs, Button } from 'antd';
import Dialog from 'react-dialog'


const { TabPane } = Tabs;


class index extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        };
    }
    componentDidMount(){
        
    }
    openDialog = () => this.setState({ isDialogOpen: true })
 
    handleClose = () => this.setState({ isDialogOpen: false })
    callback(key) {
        console.log(key);
      }
    onChange(e)  {
        console.log(e.target.files[0])
    }
    render() {
        return (
            <div className="container">
                <input type="file" onChange={this.onChange}/>
            </div>
        );
    }
}
export default (index)