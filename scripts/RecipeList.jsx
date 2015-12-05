var React = require('react');
var ReactDOM = require('react-dom');
var Recipe = require('../scripts/Recipe.jsx');

module.exports = React.createClass({
  render: function() {
   var recipes = [
      {
        id: 1,
        title: "My least favorite recipe",
        description: "This is an OK recipe",
        ingredients: [{
          name: 'Wheat',
          quantity: '10lbs'
        },{
          name: 'Barley',
          quantity: '4 oz'
        }],
        instructions: [
          "Light the beer on fire", "celebrate!"
        ]
      },
      {
        id: 2,
        title: "My MOST favorite recipe",
        description: "This is a GREAT recipe",
        ingredients: [{
          name: 'Bread',
          quantity: '6 lbs'
        },{
          name: 'Other',
          quantity: '12 oz'
        }],
        instructions: [
          "Go have lunch", "come back", "eat the beer"
        ]
      }
    ];
    var recipeNodes = recipes.map(function(recipe) {
      return (
        <Recipe key={recipe.id} recipe={recipe} />
      );
    }.bind(this));
    return (
      <div className="recipeList">
        {recipeNodes}
      </div>
    )
  }
});