import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }
  render() {
    setTimeout(() => {
      this.setState({thitle: "Welcome Will!"});
    }, 2000);
    return (
      <div>
        <Header title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
