// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const lightDarkContainer = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'light Mode' : 'Dark Mode'

    return (
      <div className="main_container">
        <div className={`container ${lightDarkContainer}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
