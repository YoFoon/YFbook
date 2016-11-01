var React = require("react");


export default React.createClass({

  render: function () {

    return (
    	<div>
	      <h1>Hello world!</h1>
	      {this.props.children}
	    </div>
    )
      
  }

});
