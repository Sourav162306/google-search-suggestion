import './index.css'

const SuggestionItem = props => {
  const {list, onUpdateSearch} = props
  const {suggestion} = list

  const onUpdate = () => {
    onUpdateSearch(suggestion)
  }
  return (
    <li className="list-item">
      <div className="list-item-card-container">
        <p className="sug-paragraph">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
          onClick={onUpdate}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
