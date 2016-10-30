import React from 'react';
import {render} from 'react-dom';

import $ from 'jquery';
window.$ = $;

class Carousel extends React.Component {
  render () {
    return(
      <div><p>Hello Dolly!</p></div>
    );
  }
}

$('body').prepend("<div id='app'>Hi!</div>")
// $('div#MainScreen_Inner').css('display', 'none');
render(<Carousel/>, document.getElementById('app'));
