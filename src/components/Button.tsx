import * as React from 'react';

type PropsT = {
  onClick: () => void
};

class Button extends React.Component<PropsT> {
  render() {
    return <button onClick={this.props.onClick}>Testing</button>;
  }
}

export default Button;