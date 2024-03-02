package com.jsharper.coupon.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsharper.coupon.models.Coupon;

public interface CouponRepository extends JpaRepository< Coupon, Long>{

    Coupon findByCode(String code);

}
