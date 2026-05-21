package com.spotify.spotifybackend.service;

import com.spotify.spotifybackend.entity.Song;

import com.spotify.spotifybackend.repository.SongRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {

    @Autowired

    private SongRepository songRepository;

    /* Get All Songs */

    public List<Song> getAllSongs() {

        return songRepository.findAll();
    }

    /* Add Song */

    public Song addSong(
            Song song
    ) {

        return songRepository.save(
                song
        );
    }
}