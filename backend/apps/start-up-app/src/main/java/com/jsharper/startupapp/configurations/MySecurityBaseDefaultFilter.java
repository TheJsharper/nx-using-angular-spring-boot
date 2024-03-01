package com.jsharper.startupapp.configurations;

import java.io.IOException;

import org.springframework.web.filter.GenericFilterBean;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

public class MySecurityBaseDefaultFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
                System.out.println(" MySecurityBaseDefaultFilter Before");
                chain.doFilter(request, response);
                System.out.println("MySecurityBaseDefaultFilter After");
    }
    
}
