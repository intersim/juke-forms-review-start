import React, { Component } from 'react';
import AddSongForm from '../components/AddSongForm';

class AddSongFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    handleSelect(e) {

    }

    render() {
        return (
            <AddSongForm {...this.props} />
        )
    }
}

export default AddSongFormContainer;