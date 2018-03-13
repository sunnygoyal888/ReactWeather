var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few exampe locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Delhi'>Delhi, India</Link>
        </li>
        <li>
          <Link to='/?location=amumbai'>Mumbai, India</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
