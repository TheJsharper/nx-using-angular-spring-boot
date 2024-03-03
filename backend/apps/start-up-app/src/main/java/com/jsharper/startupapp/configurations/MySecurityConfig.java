package com.jsharper.startupapp.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
public class MySecurityConfig {

 /*    @Bean
    UserDetailsService userDetailsService() {
        InMemoryUserDetailsManager detailsManager = new InMemoryUserDetailsManager();
        UserDetails userDetails = User.withUsername("user").password(passwordEncoder().encode("12345"))
                .authorities("read")
                .build();
        detailsManager.createUser(userDetails);
        return detailsManager;
    } */

    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @SuppressWarnings("removal")
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
       http.httpBasic(Customizer.withDefaults());
        //http.formLogin(Customizer.withDefaults());
        //http.authorizeHttpRequests(authorite-> authorite.anyRequest().authenticated());
        http.authorizeHttpRequests().requestMatchers("/user/").authenticated();//.anyRequest().denyAll();
        http.addFilterBefore(new MySecurityFilter(), BasicAuthenticationFilter.class);
        http.addFilterBefore(new MySecurityBaseDefaultFilter(), BasicAuthenticationFilter.class);
        http.addFilterBefore(new MySecurityBaseOnceFilter(), BasicAuthenticationFilter.class);
        return http.build();
    }
}