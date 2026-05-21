package com.spotify.spotifybackend.service;

import com.spotify.spotifybackend.entity.User;
import com.spotify.spotifybackend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /* Signup */

    public User signup(User user) {

        Optional<User> existingUser =
                userRepository.findByEmail(
                        user.getEmail()
                );

        if (existingUser.isPresent()) {

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        return userRepository.save(user);
    }

    /* Login */

    public User login(
            String email,
            String password
    ) {

        Optional<User> existingUser =
                userRepository.findByEmail(
                        email
                );

        if (

                existingUser.isPresent()

                        &&

                        existingUser.get()
                                .getPassword()
                                .equals(password)

        ) {

            return existingUser.get();
        }

        return null;
    }
}