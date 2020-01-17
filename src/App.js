import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {store} from "./store";
import {Provider} from "react-redux";
import StartUp from "./components/startup";
import BackupPage from "./components/backup/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",    
    };
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={StartUp}/>
              <Route path="/backup" component={BackupPage}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: []
  //   };
  // }
  // componentDidMount() {
  //   fetch("http://localhost:8080/api.json")
  //     .then(res => res.json())
  //     .then(res => this.setState({ data: res }))
  //     .catch(err => console.log(err));
  // }
  // onChange = e => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  // render() {
  //   return (
  //     <Radio.Group onChange={this.onChange} value={this.state.value}>
  //       <Radio value={1}>A</Radio>
  //       <Radio value={2}>B</Radio>
  //       <Radio value={3}>C</Radio>
  //       <Radio value={4}>D</Radio>
  //     </Radio.Group>
  //   );
  // }
//   render() {
//     return (
//       <div>
//         <h1>Database API</h1>
//           <h2>Data</h2>
//           {this.state.data.map((item, i) => {
//             return (
//               <Row>
//                 <Col span={4}>
//                   {item.id}
//                 </Col>
//                 <Col span={3}>
//                   {item.uid}
//                 </Col>
//               </Row>
              
//             );
//           })}
//       </div>
        
//     );
//   }
// }
}
export default App;
