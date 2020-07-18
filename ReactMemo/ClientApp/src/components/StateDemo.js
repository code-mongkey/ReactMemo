import React, { Component } from "react";

export class StateDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: "state 개체를 사용하여 클래스 컴포넌트에서 상태 관리",
    };
  }

  render() {
    return (
      <div>
        <h1>상태값: {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "2번상태" });
          }}
        >
          변경
        </button>
      </div>
    );
  }
}
