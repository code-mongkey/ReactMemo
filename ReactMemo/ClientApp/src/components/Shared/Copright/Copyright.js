import React, { Component } from "react";

export class Copyright extends Component {
  render() {
    let date = new Date();
    return (
      <div className="text-center">
        Copyright &copy; 2020-{date.getFullYear()} <em>ReactMemo</em> all right reserved.
      </div>
    );
  }
}
