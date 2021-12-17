import { Component } from 'react';

class Section extends Component {
  render() {
    const { children } = this.props;

    return <section>{children}</section>;
  }
}

export default Section;
