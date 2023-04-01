import {Component} from 'react'

import MemeBox from './styledComponents'
import TopAndBottomText from './styledComponents'

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
  state = {topText: '', bottomText: ''}

  render() {
    return (
      <div className="meme-generator-container">
        <h1 className="main-heading">Meme Generator</h1>
        <MemeBox>
          <TopAndBottomText>{}</TopAndBottomText>
          <TopAndBottomText>{}</TopAndBottomText>
        </MemeBox>
        <form>
          <label htmlFor="img-url">Image URL</label>
          <input type="text" id="img-url" />
        </form>
      </div>
    )
  }
}

export default MemeGenerator
