import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({
            input: evt.target.value
        })
    }

    render() {
        return (<div>
            <FilterInput handleChange={this.handleChange} />
            <Artists artists={this.props.artists.filter(artist => artist.name.includes(this.state.input))} />
        </div>)
    }
}

export default FilterableArtists;