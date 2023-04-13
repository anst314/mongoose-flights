const React = require("react");
function Index(props) {
    const { flights} = props;

    return (
        <div>
          <nav>
            <a href="/flights/new">Create a New <Flight></Flight></a>
          </nav>
          
          <h1>Index Page</h1>
    
          <ul>
            {fruits.map((flight, i) => {
              return (
                <li key={flight._id}>
                 {flight.airline}
                 {flight.flightNo}
                 {Date(flight.departs)}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    
    module.exports = Index;