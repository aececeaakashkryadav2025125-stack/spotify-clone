package com.spotify.spotifybackend.model;

import jakarta.persistence.*;

@Entity
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String artist;

    private String imageUrl;

    private String songUrl;

    public Song() {
    }

    public Song(
            Long id,
            String name,
            String artist,
            String imageUrl,
            String songUrl
    ) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.imageUrl = imageUrl;
        this.songUrl = songUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getSongUrl() {
        return songUrl;
    }

    public void setSongUrl(String songUrl) {
        this.songUrl = songUrl;
    }
}