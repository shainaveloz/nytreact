// Include React
var React = require('react');

// Here we include all of the sub-components
var saved = require('./Children/saved');
var search = require('./Children/search');

// Helper Function
var helpers = require('./utils/helpers.js');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route} from 'react-router'

var Main = React.createClass({
    getInitialState: function(){
        return {
            searchTerm: '',
            results: ''
        }
    },

    setTerm: function(term){
        this.setState({
            searchTerm: term
        })
    },

    componentDidUpdate: function(prevProps, prevState){

        if(prevState.searchTerm != this.state.searchTerm){
            console.log("UPDATED");

            helpers.runQuery(this.state.searchTerm)
                .then(function(data){
                    if (data != this.state.results)
                    {
                        console.log("HERE");
                        console.log(data);

                        this.setState({
                            results: data
                        })
                    }
                }.bind(this))
        }
    },
})