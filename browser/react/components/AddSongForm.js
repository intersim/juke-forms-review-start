import React, { Component } from 'react';

export default props => (
  <div className="well">
    <form className="form-horizontal" noValidate name="songSelect">
      <fieldset>
        <legend>Add to Playlist</legend>
        <div className="form-group">
          <label htmlFor="song" className="col-xs-2 control-label">Song</label>
          <div className="col-xs-10">
            <select className="form-control" name="song">
                {
                    props.songs.map(song => <option key={song.id} value={song.id}>{song.name}</option>)
                }
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success">Add Song</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
)