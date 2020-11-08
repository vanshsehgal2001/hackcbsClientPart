import React, { Component, Fragment } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Container } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";

class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      file: {},
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
      file: files[0],
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.file) {
      console.log(this.state.file);
    }
    window.open("http://localhost:1000/result", "_blank");
  }

  render() {
    return (
      <Fragment>
        <ScrollAnimation animateIn="fadeIn">
          <h1
            style={{
              textAlign: "center",
              marginTop: "40px",
              letterSpacing: "15px",
              wordSpacing: "200px",
              fontWeight: "bolder",
              marginBottom: "50px",
              color: "white",
            }}
          >
            Select A Video
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceIn">
          <Container
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              width: "70%",
              marginBottom: 20,
            }}
          >
            <DropzoneArea
              acceptedFiles={[
                "video/mp4",
                "video/ogg",
                "video/avi",
                "video/wmv",
                "video/mpg",
                "video/m4p",
                "video/m4v",
                "video/webm",
              ]}
              onChange={this.handleChange.bind(this)}
            />
            <form onSubmit={(e) => this.onSubmit(e)}>
              <input
                type="submit"
                className="btn btn-danger btn-block mt-5"
                value="Upload"
              />
            </form>
          </Container>
        </ScrollAnimation>
      </Fragment>
    );
  }
}

export default DropzoneAreaExample;
