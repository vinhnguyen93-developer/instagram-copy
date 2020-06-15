import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',,
      userId: '',
      file: null
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    this.setState({
      userId: decoded._id
    });
  }

  onChange(event) {
    this.setState({
      caption: event.target.value,
      file: event.target.files[0]
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const newPost = {
      caption: this.state.caption,
      file: this.state.file,
      userId: this.state.userId
    }

    axios.post('http://localhost:5000/api/posts/create', newPost)
      .then(res => {
        this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center pt-5">
          <div className="col-12 col-sm-6 col-md-6">
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Label for="caption" sm={2}>Caption:</Label>
              <Col sm={10}>
                <Input 
                type="textarea" 
                name="caption" 
                id="caption" 
                value={this.state.caption}
                onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={2}>Picture:</Label>
              <Col sm={10}>
                <Input 
                type="file" 
                name="file" 
                id="exampleFile" 
                onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button color="primary" type="submit">Post</Button>
              </Col>
            </FormGroup>
          </Form>
          </div>
        </div>
      </div>
    );
  }
}