import React, { Component } from 'react';
import axios from 'axios';

class GSCal extends Component {
  state = {
    coefficients: [],
    values: [],
    k: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchCoefficients();
  }

  async fetchValues() {
    const values = await axios.get('/api/calcValues/recent');
    this.setState({ values: values.data });
  }

  async fetchCoefficients() {
    const coefficients = await axios.get('/api/values/recent');
    this.setState({
      coefficients: coefficients.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      k: this.state.k,
    });
    this.setState({ k: '' });
  };

  renderCoefficients() {
    return this.state.coefficients.map(({ k }) => k).join(', ');
  }

  renderValues() {
    const entries = [];

    this.state.values.forEach(calcV => {
      entries.push(
        <div key={calcV["k"]}>
          Dla k = {calcV["k"]}, wartość wyrazu o numerze k = {calcV["calcValue"]}
        </div>
      )
    })
    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Podaj współczynnik k:</label> <br />
          <input
            value={this.state.k}
            onChange={(event) => this.setState({ k: event.target.value })}
          />
          <button>Zatwierdź</button>
        </form>

        <h3>5 ostatnich współczynników k:</h3>
        {this.renderCoefficients()}

        <h3>5 ostatnich obliczeń dla ciągu 2^k:</h3>
        {this.renderValues()}
      </div>
    );
  }
}
export default GSCal;
