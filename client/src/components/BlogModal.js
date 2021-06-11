import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { connect } from "react-redux";
import { addBlog } from "../actions/blogActions";
import PropTypes from "prop-types";

class BlogModal extends Component {
  state = {
    modal: false,
    name: "",
    title: "",
    body: "",
    image: "",
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      name: this.state.name,
      title: this.state.title,
      body: this.state.body,
      image: this.state.image,
    };
    this.props.addBlog(newBlog);

    this.toggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Blog
          </Button>
        ) : (
          <h4 className="mb-3 ml-4">Please Login to add Blog</h4>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                {/* <Label for="name">Item</Label> */}
                <Input
                  type="text"
                  name="name"
                  //id="name"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="title"
                  //id="title"
                  value={this.state.title}
                  placeholder="Title of the Blog"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="image"
                  //id="image"
                  value={this.state.image}
                  placeholder="Title of the Blog"
                  onChange={this.onChange}
                />
                <Input
                  type="textarea"
                  name="body"
                  //id="body"
                  value={this.state.body}
                  placeholder="Content"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Blog
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  blog: state.blog,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addBlog })(BlogModal);
