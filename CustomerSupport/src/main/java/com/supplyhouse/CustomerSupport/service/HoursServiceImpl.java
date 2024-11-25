package com.supplyhouse.CustomerSupport.service;


import com.supplyhouse.CustomerSupport.entity.CustomerServiceHours;
import com.supplyhouse.CustomerSupport.entity.SpecialHours;
import com.supplyhouse.CustomerSupport.exception.ResourceNotFoundException;
import com.supplyhouse.CustomerSupport.repository.CustomerServiceHoursRepository;
import com.supplyhouse.CustomerSupport.repository.SpecialHoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Service implementation for handling business logic related to customer service hours.
 */


@Service
public class HoursServiceImpl implements HoursService {

    private final CustomerServiceHoursRepository customerServiceHoursRepository;
    private final SpecialHoursRepository specialHoursRepository;
    @Autowired
    public HoursServiceImpl(CustomerServiceHoursRepository customerServiceHoursRepository, SpecialHoursRepository specialHoursRepository) {
        this.customerServiceHoursRepository = customerServiceHoursRepository;
        this.specialHoursRepository = specialHoursRepository;
    }

    @Override
    public List<CustomerServiceHours> getRegularHours() {
        List<CustomerServiceHours> hours = customerServiceHoursRepository.findAll();
        if (hours.isEmpty()) {
            throw new ResourceNotFoundException("No regular hours found.");
        }
        return hours;
    }

    @Override
    public List<SpecialHours> getSpecialHours() {
        List<SpecialHours> hours = specialHoursRepository.findByDateAfter(LocalDateTime.now());
        if (hours.isEmpty()) {
            throw new ResourceNotFoundException("No special hours found for future dates.");
        }
        return hours;
    }

    @Override
    public SpecialHours addSpecialHours(SpecialHours specialHours) {
        if (specialHours.getOpeningTime().isAfter(specialHours.getClosingTime())) {
            throw new IllegalArgumentException("Opening time cannot be after closing time.");
        }
        return specialHoursRepository.save(specialHours);
    }


}
