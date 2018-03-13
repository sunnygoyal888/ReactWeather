var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
  return (
    <h3 className="text-center">It is {temp} degree Celcius in {location}.</h3>
  );
};

module.exports = WeatherMessage;
