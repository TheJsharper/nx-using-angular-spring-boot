package main.java.com.jsharper.product.service.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import main.java.com.jsharper.product.service.models.Product;
import main.java.com.jsharper.product.service.repositories.ProductRepository;
@RestController
@RequestMapping("/api")
public class ProductController {


    @Autowired
    private ProductRepository productRepository;


    @RequestMapping(value="/products", method=RequestMethod.GET)
    public List<Product> getAll(){
        return productRepository.findAll();
    }
    
    @RequestMapping(value="/products",  method = RequestMethod.POST)
    public Product create(@RequestBody Product product){
        System.out.println("====>x"+product);
        return productRepository.save(product);
    }




}
