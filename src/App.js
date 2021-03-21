import React from 'react';
import './index.css';
import Box from './components/WeatherBox/Box.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      apiKey: '0f93316aa7be9b531c476732c3bfbd9a',
      cityIds: [3099434, 7530983, 7530858],
      primaryWeather: [],
    };
  }


  componentDidMount() {
    let primaryUrl = `http://api.openweathermap.org/data/2.5/group?id=${this.state.cityIds.join()}&units=metric&appid=${this.state.apiKey}`;
    fetch(primaryUrl)
      .then(response => response.json())
      .then(function (data) {
        console.log(data);
        return data
      })
      .then(data => {
        this.setState({ primaryWeather: data.list });
        console.log(this.state)
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.primaryWeather.map(weatherData =>
          <Box
            city={weatherData.name.toUpperCase()}
            temp={weatherData.main.temp}
            weather={weatherData.weather[0].main}
            icon={weatherData.weather[0].icon}
            lat={weatherData.coord.lat}
            lon={weatherData.coord.lon}
            apiKey={this.state.apiKey} />
        )
        }
      </div>
    )
  }
}

export default App;
