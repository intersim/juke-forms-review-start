import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class NewPlaylistContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            isInvalid: true,
            isPristine: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ isPristine: false })
        if (e.target.value.length > 16) this.setState({ isInvalid: true });
        else this.setState({ input: e.target.value, isInvalid: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.input);

        this.props.addPlaylist(this.state.input);
        this.setState({ input: '', isInvalid: false, isPristine: true });
    }

    render() {
        return (
            <NewPlaylist 
                value={this.state.input} 
                isInvalid={this.state.isInvalid}
                isPristine={this.state.isPristine}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit} />
        )
    }
}

export default NewPlaylistContainer