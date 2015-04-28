
var React = require('react-native');

var { TouchableOpacity, Image, } = React;

class PlusButton extends React.Component {

  constructor(props){
    this.state = {
      toggle: props.intialToggleState || false
    };
  }

  render(){

    var xImageSource = {uri: 'http://i.imgur.com/baqD8a8.png'};
    var plusImageSource = {uri: 'http://i.imgur.com/UaJpmco.png'};
    var buttonSource = this.state.toggle ? xImageSource : plusImageSource;

    return (
      <TouchableOpacity onPress={this._toggle.bind(this)}>
        <Image
          source={buttonSource}
          style={{width:35, height:35}}
        />
      </TouchableOpacity>
    );
  }

  _toggle(){
    this.setState({
      toggle:this.state.toggle ? false : true
    });
  }

};

module.exports = PlusButton;
