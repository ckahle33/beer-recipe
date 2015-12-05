var React = require('react');
var ReactDOM = require('react-dom');
var IngredientsSection = require('../scripts/IngredientsSection.jsx');
var RecipeList = require('../scripts/RecipeList.jsx');

module.exports = React.createClass({
  render: function() {
  	return (
  		<div className="recipeForm">
  			<div className="form-group">
	  			<label htmlFor="name">Recipe Name:</label>
	  			<input type="text" className="form-control" id="name" />
  			</div>
  			<div className="form-group">
	  			<label htmlFor="description">Description:</label>
	  			<input type="text" className="form-control" id="description" />
  			</div>
          <IngredientsSection></IngredientsSection>  
          <h2>Saved Recipes</h2>
          <RecipeList></RecipeList>
  		</div>
  	)
  }
});
