package com.spotify.spotifybackend.controller;

import com.spotify.spotifybackend.model.Song;
import com.spotify.spotifybackend.repository.SongRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/songs")

@CrossOrigin("*")

public class SongController {

    @Autowired
    private SongRepository songRepository;

    @GetMapping
    public List<Song> getSongs() {

        return songRepository.findAll();
    }

    @PostMapping
    public Song addSong(
            @RequestBody Song song
    ) {

        return songRepository.save(song);
    }
}