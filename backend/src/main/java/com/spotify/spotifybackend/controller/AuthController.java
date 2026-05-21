package com.spotify.spotifybackend.controller;

import com.spotify.spotifybackend.entity.User;

import com.spotify.spotifybackend.jwt.JwtUtil;

import com.spotify.spotifybackend.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/auth")

@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    /* Signup API */

    @PostMapping("/signup")

    public User signup(
            @RequestBody User user
    ) {

        return userService.signup(
                user
        );
    }

    /* Login API */

    @PostMapping("/login")

    public String login(
            @RequestBody User user
    ) {

        User existingUser =

                userService.login(

                        user.getEmail(),

                        user.getPassword()
                );

        if (existingUser != null) {

            return jwtUtil.generateToken(

                    existingUser.getEmail()
            );
        }

        return "Invalid Credentials";
    }
}