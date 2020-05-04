import React, { Component } from "react";

class Checkbox extends Component {
  state = {
    isChecked: false,
  };

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onChange}
          />
          {this.state.isChecked
            ? this.props.labelActive
            : this.props.labelInactive}
        </label>
      </div>
    );
  }
}

export default Checkbox;