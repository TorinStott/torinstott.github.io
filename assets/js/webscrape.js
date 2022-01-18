'use strict';

const e = React.createElement;

class webscrape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      appVersion: ''
    }
  }

  render() {
    return(
    <div>
      <h1>Hello World!</h1>
      <button>TEST BUTTON</button>
    </div>
    )
  }
}
const domContainer = document.querySelector('#react_main');
ReactDOM.render(e(webscrape), domContainer);