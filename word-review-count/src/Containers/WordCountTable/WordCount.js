import React, {Component} from "react"
import data from '../../Data/reviews.json';

class WordCount extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.setState({
      data: this.data
    })
  }

  render() {


    return (
      <div>
      <div>{this.data}</div>
      <p>hello</p>
      </div>
    )
  }
}

export default WordCount;
