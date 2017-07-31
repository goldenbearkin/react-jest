import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

type PropsT = {
  onClick: () => void
};

class Button extends React.Component<PropsT> {
  render() {
    return <RaisedButton onClick={this.props.onClick} label="Testing" />;
    // return <button onClick={this.props.onClick}>Testing</button>;
  }
}

export default Button;