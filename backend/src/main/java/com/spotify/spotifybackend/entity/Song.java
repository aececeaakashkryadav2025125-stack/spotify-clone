package com.spotify.spotifybackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "songs")
public class Song {

    @Id

    @GeneratedValue(
            strategy =
            GenerationType.IDENTITY
    )

    private Long id;

    private String title;

    private String artist;

    private String image;

    private String file;

    public Song() {
    }

    public Song(

            String title,

            String artist,

            String image,

            String file

    ) {

        this.title = title;

        this.artist = artist;

        this.image = image;

        this.file = file;
    }

    public Long getId() {
        return id;
    }

    public void setId(
            Long id
    ) {

        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(
            String title
    ) {

        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(
            String artist
    ) {

        this.artist = artist;
    }

    public String getImage() {
        return image;
    }

    public void setImage(
            String image
    ) {

        this.image = image;
    }

    public String getFile() {
        return file;
    }

    public void setFile(
            String file
    ) {

        this.file = file;
    }
}