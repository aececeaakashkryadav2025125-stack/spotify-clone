package com.spotify.spotifybackend.controller;

import com.spotify.spotifybackend.entity.Song;

import com.spotify.spotifybackend.service.SongService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/songs")

@CrossOrigin("*")
public class SongController {

    @Autowired

    private SongService songService;

    /* Get All Songs */

    @GetMapping

    public List<Song> getAllSongs() {

        return songService.getAllSongs();
    }

    /* Add Song */

    @PostMapping

    public Song addSong(
            @RequestBody Song song
    ) {

        return songService.addSong(
                song
        );
    }
}