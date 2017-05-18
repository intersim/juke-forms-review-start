import React, { Component } from 'react';
import Songs from './Songs';
import AddSongFormContainer from '../containers/AddSongFormContainer';

class Playlist extends Component {
    componentDidMount() {
        const playlistId = this.props.routeParams.playlistId;
        const selectPlaylist = this.props.selectPlaylist;
        const getAllSongs = this.props.getAllSongs;

        selectPlaylist(playlistId);
        getAllSongs();
    }

    componentWillReceiveProps(nextProps) {
        const nextPlaylistId = nextProps.routeParams.playlistId;
        const currentPlaylistId = this.props.routeParams.playlistId;
        const selectPlaylist = this.props.selectPlaylist;
        if (nextPlaylistId !== currentPlaylistId) selectPlaylist(nextPlaylistId);
    }

    render() {
        const playlist = this.props.selectedPlaylist;

        return (
        <div>
            <h3>{ playlist.name }</h3>
            <AddSongFormContainer songs={this.props.songs} />
            <Songs songs={playlist.songs} />
            { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
            <hr />
        </div>
    )}
}

export default Playlist;