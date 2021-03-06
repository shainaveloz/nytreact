var React = require('react');

// utlizing the axios library to perform GET/POST requests
var axios = require('axios');

var search = React.createClass({

    var getInitialState: function(){
        return {
            title: '',
            date: '',
            url: ''
        };
    },


    handleChange: function(event) {
        this.setState({ value: event.target.value });
    },

    render: function(){
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Placeholder" id="topic" type="text" className="validate" onChange={this.handleChange}>
                                <label for="topic">Topic</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="start_year" type="text" className="validate" onChange={this.handleChange}>
                                <label for="start_year">Start Year</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="end_year" type="text" className="validate" onChange={this.handleChange}>
                                <label for="end_year">Start Year</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleClick}>Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
})

