import React from 'react';
import marked from 'marked';
import constants from './constants.js';
import './main.scss';

// workaround needed to pass the freecodecamp tests
window.marked = marked;

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    App.displayName = 'App';

    const defaultState = {
      text: constants.dummyText
    };
    this.state = defaultState;
  }
  getInput = (e) => {
    this.setState({text: e.target.value});
  }
  renderPreview = () => {
    return {__html: marked(this.state.text)};
  }

  render() {
    const {text} = this.state;
    return (
      <React.StrictMode>
        <div className="column-left">
          <textarea
            id="editor"
            value={text}
            onChange={this.getInput}
          />
        </div>
        <div className="column-right">
          <p id="preview" dangerouslySetInnerHTML={this.renderPreview()} />
        </div>
      </React.StrictMode>
    );
  }
}
export default App;
