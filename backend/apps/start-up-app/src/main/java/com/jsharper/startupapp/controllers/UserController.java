package com.jsharper.startupapp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/user")
public class UserController{


    @GetMapping("/")
    public String test(){
        return "Hello World";
    }
    @GetMapping("/bye")
    public String bye(){
        return "Hello World";
    }
}