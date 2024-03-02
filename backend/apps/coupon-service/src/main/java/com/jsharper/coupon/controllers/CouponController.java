package com.jsharper.coupon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jsharper.coupon.models.Coupon;
import com.jsharper.coupon.repositories.CouponRepository;

@RestController
@RequestMapping("/api")
public class CouponController {
    @Autowired
    private CouponRepository couponRepository;

    @RequestMapping(value="/coupons", method = RequestMethod.POST)
    public Coupon create(@RequestBody Coupon coupon){
        return  couponRepository.save(coupon);
    }

    @RequestMapping(value="/coupons/{code}", method = RequestMethod.GET)
    public Coupon getByCode(@PathVariable("code") String code){
        return couponRepository.findByCode(code);
    }
}
