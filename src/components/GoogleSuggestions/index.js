import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onUpdateSearch = value => {
    this.setState({searchInput: value})
  }

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="main-img"
          />
        </div>
        <div className="search-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              placeholder="Search Google"
              type="search"
              className="search-input"
              onChange={this.onChangeEvent}
              value={searchInput}
            />
          </div>
          <ul>
            {filteredList.map(each => (
              <SuggestionItem
                key={each.id}
                list={each}
                onUpdateSearch={this.onUpdateSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
