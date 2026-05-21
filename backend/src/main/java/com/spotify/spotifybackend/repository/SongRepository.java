package com.spotify.spotifybackend.repository;

import com.spotify.spotifybackend.model.Song;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository
        extends JpaRepository<Song, Long> {
}