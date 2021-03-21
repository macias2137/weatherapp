import React from 'react';

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondaryData: []
        }
    }

    componentDidMount() {
        let secondaryUrl = `http://api.openweathermap.org/data/2.5/find?lat=${this.props.lat}&lon=${this.props.lon}&cnt=10&units=metric&appid=${this.props.apiKey}`;
        fetch(secondaryUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({ secondaryData: data.list });
                console.log(data)
            })
            .then(data => {
                // setSecondaryData({ data });
                console.log(this.state.secondaryData)
            })
            .catch(() => alert('error!'))
    }

    render() {
        return (
            <div className="box weather-list" >
                <h3>Pogoda w okolicy:</h3>
                <ul>
                    {this.state.secondaryData.map(item =>
                        <li>
                            {item.name}
                            {Math.round(item.main.temp)}&#176;C
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="dupa" />
                        </li>
                    )
                    }
                </ul>
            </div>
        )
    }
}
export default WeatherList;