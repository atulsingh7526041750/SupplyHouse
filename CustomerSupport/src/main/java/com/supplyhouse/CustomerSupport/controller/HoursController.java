package com.supplyhouse.CustomerSupport.controller;

import com.supplyhouse.CustomerSupport.entity.CustomerServiceHours;
import com.supplyhouse.CustomerSupport.entity.SpecialHours;
import com.supplyhouse.CustomerSupport.service.HoursService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for managing customer service hours.
 */
@RestController
@RequestMapping("/api/hours")
public class HoursController {

    private final HoursService hoursService;
@Autowired
    public HoursController(HoursService hoursService) {
        this.hoursService = hoursService;
    }

    /**
     * Endpoint to retrieve regular customer service hours.
     *
     * @return List of regular customer service hours.
     */
    @GetMapping("/regular")
    public ResponseEntity<List<CustomerServiceHours>> getRegularHours() {
        List<CustomerServiceHours> hours = hoursService.getRegularHours();
        return ResponseEntity.ok(hours);
    }



    /**
     * Endpoint to retrieve special hours.
     *
     * @return List of special hours.
     */
    @GetMapping("/special")
    public ResponseEntity<List<SpecialHours>> getSpecialHours() {
        List<SpecialHours> hours = hoursService.getSpecialHours();
        return ResponseEntity.ok(hours);
    }



    /**
     * Endpoint to add new special hours.
     *
     * @param specialHours The special hours to add.
     * @return The added special hours.
     */
    @PostMapping("/special")
    public ResponseEntity<SpecialHours> addSpecialHours(@RequestBody @Valid SpecialHours specialHours) {
        SpecialHours createdHours = hoursService.addSpecialHours(specialHours);
        return ResponseEntity.ok(createdHours);
    }
}
