var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

module.exports = React.createClass({
	getInitialState: function(){
	  return {
 	    open: false,
 	    class: "recipe"
	  };
	},
	handleClick: function(){
	  if(this.state.open) {
	    this.setState({
	      open: false,
	      class: "recipe"
	    });
	  }else{
	    this.setState({
	      open: true,
	      class: "recipe open"
	    });
	  }
	},
	render: function() {
		return (
			<div className={this.state.class}>
				<div className="sectionhead" onClick={this.handleClick}>
				  <h3 className="recipeTitle">
				    Title: {this.props.recipe.title}
				  </h3>
			  </div>
			  <div className="articlewrap">
				  <h4 className="recipeDescription">Description: {this.props.recipe.description}</h4>
				  <ul className="ingredientsList">
					  <h4 className="ingredientsTitle">Ingredients</h4>
					  // this.props.recipe is an object, not sure how you were map()ing before over it..
				  	{ Object.keys(this.props.recipe).map(function(ingredient) {
							return (
								<li className="ingredient" key={ingredient.name}>{ ingredient.name + " " + ingredient.quantity }</li>
							)
						}) 
				  }
				  </ul>
			    <ul className="instructionsList">
			  	  <h4 className="instructionsTitle">Instructions</h4>
			    	{Object.keys(this.props.recipe).map(function(instruction, index) {
								return (
									<li className="instruction" key={index}>{index+1}. {instruction}</li>
								)
							})
			    	}
			    </ul>
			  </div>
			</div>
		)
	}
})

