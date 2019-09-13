import React from "react";
import {
  Row,
  Col,
  Form,
  // FormInput,
  // FormSelect,
  FormGroup,
  InputGroup,
  // InputGroupAddon,
  // InputGroupText,
  Container,
  FormTextarea,
  Card,
  ListGroupItem,
  Button,
  Progress
  // CardHeader
} from "shards-react";
// import firebase from "../config/config";
// import MainView from '../App';
const InitialState = {
  // email: '',
  search: '',
  shown:false,
  
}


class TweetTabel extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { ...InitialState}
    
    // this.onLoginPress = this.onLoginPress.bind(this);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      shown: true
    })
}


  
  // onLoginPress = (e) => {
  //   e.preventDefault();
  //   // this.props.history.push({});
  //   // <MainView/>
  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
  //     // this.setState({ }); 
    
  //     this.props.history.push('Add_New')
  //   }).catch(function (error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     if (errorCode === 'auth/wrong-password') {
  //       alert('Wrong password.');
  //     } else {
  //       alert(errorMessage);
  //     }
  //     //console.log(error);
  //   }).then(() => {
  //     this.setState({ ...InitialState });
     
  //   })
  // }

  onInputChange = e => {
    const search = e.target.value;
    this.setState(() => ({ search }));
  };
  // onPasswordChange = x => {
  //   const password = x.target.value;
  //   this.setState(() => ({ password }));
  // };


  
  render() { 
    return ( 
      // <Route>
      <div className ="view" style={{
    // background: 'linear-gradient(to right , #9CECFB, #65C7F7, #0052D4)'    

      }} >
  
  <Container  fluid className="main-content-container px-4">
  <Row  style={{
                    // padding:"0",
                    // margin:"0",
                    // height:'40vh',
                    width:'700px'
                  // alignItems:"center",
                  //  flexDirection:"column"
                   }}>  
              {/* <Row style={{justifyContent:"flex-start" }} noGutters className="page-header py-4">
                  <PageTitle
                      sm="4"
                      title=""
                      subtitle="Fake News identification"
                      className="text-sm-left"
                  />
              </Row> */}
              
    <Col sm="8" md="5">
        
    <Card small className="mb-4">
  
  
    <ListGroupItem className="p-3" >
      <Form  onSubmit={this.onLoginPress}>
      <strong className="text-muted d-block mb-2">Test News Credibility</strong>
    
    
        <FormGroup>
          <InputGroup className="mb-3">
           <FormTextarea placeholder="type here." rows ="8" value={this.state.search}
         onChange={this.onInputChange}/>

          </InputGroup>
        </FormGroup>
        <Row form style={{justifyContent:"flex-end"}}>
          <Col md="-8">
          <Button theme="success"  className="mb-2 mr-1">Search</Button>
          </Col>         
        </Row>
                    <Row>
                      <Col>

                        <div className="progress-wrapper">
                          {this.state.shown ?<Progress multi  > 
                          <Progress bar theme="success" 
                           
                            // className="progress-sm"
                            value="40"
                          >40%
                            <span className="progress-value">
                              {/* {this.state.Loadprogress}% */}
                              
                          </span>
                          </Progress>
                          
                          <Progress bar theme="danger" value="60">60%</Progress>
                           {/* <Progress bar value="40" /> */}
                          </Progress> : null}
                        </div>
                      </Col>
                    </Row>
      </Form>
      
      </ListGroupItem>
      </Card>
    </Col>
    </Row>
  
    </Container>
    {/* <Route path="/about" component={About} /> */}
    </div>
    // </Route>
    )
  }
};
 
export default TweetTabel;












