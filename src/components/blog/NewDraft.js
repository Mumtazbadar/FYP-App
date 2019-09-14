import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  // FormInput,
  FormTextarea,
  Row,Col,
  Button,
  Progress
} from "shards-react";

const InitialState = {
  // email: '',
  search: '',
  shown:false,
  
}

class NewDraft extends React.Component {
  state = {...InitialState}

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      shown: true
    })
}

onInputChange = e => {
  const search = e.target.value;
  this.setState(() => ({ search }));
};
  render() {
    return (
      <div style={{height:'48vh'}}>
         <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
    {/* <i class="material-icons">twitter</i> */}
      <h6 className="m-0">Check News Credibility</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form" >
        {/* Title */}

        {/* Body */}
        <FormGroup >
          <FormTextarea rows="7" placeholder="Type OR Past NEWS here..." />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0"  style={{justifyContent:"flex-end"}}>
        <Row form >
          <Col md="-8">
          <Button theme="success"  className="mb-2 mr-1">Search</Button>
          </Col>         
        </Row>

        </FormGroup>

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
    </CardBody>
  </Card>
      </div>
      
    );
  }
}

// export default NewDraft;



// const NewDraft = ({ title,shown }) => (
//   <Card small className="h-100">
//     {/* Card Header */}
//     <CardHeader className="border-bottom">
//       <h6 className="m-0">{title}</h6>
//     </CardHeader>

//     <CardBody className="d-flex flex-column">
//       <Form className="quick-post-form">
//         {/* Title */}

//         {/* Body */}
//         <FormGroup>
//           <FormTextarea placeholder="Type OR Past NEWS here..." />
//         </FormGroup>

//         {/* Create Draft */}
//         <FormGroup className="mb-0"  style={{justifyContent:"flex-end"}}>
//         <Row form >
//           <Col md="-8">
//           <Button theme="success"  className="mb-2 mr-1">Search</Button>
//           </Col>         
//         </Row>

//         <Row>
//                       <Col>

//                         <div className="progress-wrapper">
//                           {this.state.shown ?<Progress multi  > 
//                           <Progress bar theme="success" 
                           
//                             // className="progress-sm"
//                             value="40"
//                           >40%
//                             <span className="progress-value">
//                               {/* {this.state.Loadprogress}% */}
                              
//                           </span>
//                           </Progress>
                          
//                           <Progress bar theme="danger" value="60">60%</Progress>
//                            {/* <Progress bar value="40" /> */}
//                           </Progress> : null}
//                         </div>
//                       </Col>
//                     </Row>
//         </FormGroup>
//       </Form>
//     </CardBody>
//   </Card>
// );

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  shown: PropTypes.bool
};

NewDraft.defaultProps = {
  title: "Test News Credibility",
  shown:false
};

export default NewDraft;
