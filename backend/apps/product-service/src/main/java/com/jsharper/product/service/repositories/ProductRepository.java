package com.jsharper.product.service.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jsharper.product.service.models.Product;
public interface ProductRepository  extends JpaRepository<Product, Long>{
    
}
