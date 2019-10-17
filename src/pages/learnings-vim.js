import React from "react"
import axios from "axios"

export default class LearningsVim extends React.Component {
  state = {
    entries: [],
  }

  componentDidMount() {
    axios
      .get(
        `https://spreadsheets.google.com/feeds/cells/1wXR4Ji3gFAZ2eIwZFgZScwz7Fif9NEz4gHI05JFt2UM/1/public/full?alt=json`
      )
      .then(res => {
        const entries = res.data.feed.entry

        this.setState({ entries })
      })
  }

  render() {
    console.log("entries>>>>", this.state.entries)
    return (
      <ul>
        {this.state.entries.map(entry => (
          <li>{entry.gs$cell.inputValue}</li>
        ))}
      </ul>
    )
  }
}
