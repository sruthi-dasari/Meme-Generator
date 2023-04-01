import {Component} from 'react'

import {MemeBox, TopAndBottomText} from './styledComponents'

import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    imgUrl: '',
    fontSize: '',
    showMeme: false,
  }

  onChangeImageUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({imgUrl: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    this.setState({showMeme: true})
  }

  render() {
    const {topText, bottomText, imgUrl, fontSize, showMeme} = this.state
    return (
      <div className="meme-generator-container">
        <h1 className="main-heading">Meme Generator</h1>
        {showMeme ? (
          <MemeBox imageUrl={imgUrl} data-testid="meme">
            <TopAndBottomText fontSize={fontSize}>{topText}</TopAndBottomText>
            <TopAndBottomText fontSize={fontSize}>
              {bottomText}
            </TopAndBottomText>
          </MemeBox>
        ) : null}

        <form className="form-container" onSubmit={this.onClickGenerate}>
          <div className="input-box-container">
            <label htmlFor="img-url" className="label">
              Image URL
            </label>
            <input
              type="text"
              id="img-url"
              className="input-text-container"
              onChange={this.onChangeImageUrl}
            />
          </div>
          <div className="input-box-container">
            <label htmlFor="top-text" className="label">
              Top Text
            </label>
            <input
              type="text"
              id="top-text"
              className="input-text-container"
              onChange={this.onChangeTopText}
            />
          </div>
          <div className="input-box-container">
            <label htmlFor="bottom-text" className="label">
              Bottom Text
            </label>
            <input
              type="text"
              id="bottom-text"
              className="input-text-container"
              onChange={this.onChangeBottomText}
            />
          </div>
          <div className="input-box-container">
            <label htmlFor="font-size" className="label">
              Font Size
            </label>
            <select
              id="font-size"
              className="input-text-container select-text"
              onChange={this.onChangeSelect}
            >
              {fontSizesOptionsList.map(eachItem => (
                <Option optionDetails={eachItem} key={eachItem.optionId} />
              ))}
            </select>
          </div>
          <button type="submit" className="generate-btn">
            Generate
          </button>
        </form>
      </div>
    )
  }
}

export default MemeGenerator

const Option = props => {
  const {optionDetails} = props
  const {optionId, displayText} = optionDetails

  return <option value={optionId}>{displayText}</option>
}
