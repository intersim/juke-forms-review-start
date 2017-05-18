import React, { Component } from 'react';

const NewPlaylist = props => (
    <div className="well">
        <form className="form-horizontal" onSubmit={props.handleSubmit}>
            <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
                <label className="col-xs-2 control-label">Name</label>
                <div className="col-xs-10">
                {!props.value.length && !props.isPristine ? <div className="alert alert-warning">Please enter a name</div> : null}
                {props.value.length > 16 ? <div className="alert alert-warning">Playlist names cannot be more than 16 characters long</div> : null}
                <input className="form-control" type="text" onChange={props.handleChange} value={props.value} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={props.isInvalid}>Create Playlist</button>
                </div>
            </div>
            </fieldset>
        </form>
    </div>
)

export default NewPlaylist;