package com.fullstackbackend.fullstackbackend.controller;

import com.fullstackbackend.fullstackbackend.exception.UserNotFoundException;
import com.fullstackbackend.fullstackbackend.model.User;
import com.fullstackbackend.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin ("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return  userRepository.save(newUser);

    }
    @GetMapping("/usersdetails")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/usersdetails/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));

    }
    @PutMapping("/usersdetails/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id ){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());

                    return  userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/usersdetails/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+"has been deleted sucessfully";

    }

}
