import Autosuggest from 'react-autosuggest';
import React from 'react';
import './header.css'
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
    'Nike','Puma', 'Adidas','Fila', 'Lee','United Colors of Benetton','Wrangler','Fastrack','Woodland','Yepme','Levis','Tommy Hilfiger','peter-england','fabindia','nike shoes tops','shirts','jackets','myntra coupons','kurtis','shoes','tunics','dresses','Watches','saree','kurtas','bags','T-shirts','designer saree','sunglasses','jeans','trousers','adidas shoes','casual shoes','sports shoes','fastrack watches','ethnic wear','woodland-shoes','mobile app','puma shoes','accessories', 'anarkali suit','running shoes','reebok','formal wear','cat','jewellery'
  ]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

export default class Suggestion extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex }) {
    console.log('all values', suggestion, suggestionValue, suggestionIndex, this.props)
    this.props.props.history.push('/='+suggestion)
    // this.props.props.history.push('/login')
  }
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for product,brands and more..',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
        <div>
            <div className="AutoSuggestContainer">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>this.onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method })}
                inputProps={inputProps}
            />
            </div>
        </div>
    );
  }
}