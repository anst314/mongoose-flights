const React = require('react')

function New(){
    return(
        <div>
            <h1>New Page</h1>
            <form action='/flights' method='POST'>
                Airline:<input type='text' name='airline'/>
                <br/>
                flightNumber:<input type='number' name='flightNo'/>
                <br/>
                Departure: <input type='datetime-local' name='departs'/>
                <br/>
                <input type='submit' value='Create New Flight'/>
            </form>
        </div>
    )
}
module.exports = New
