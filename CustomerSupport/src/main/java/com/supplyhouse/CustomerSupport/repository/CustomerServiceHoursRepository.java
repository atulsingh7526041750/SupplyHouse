package com.supplyhouse.CustomerSupport.repository;


import com.supplyhouse.CustomerSupport.entity.CustomerServiceHours;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for managing CustomerServiceHours entities.
 */
public interface CustomerServiceHoursRepository extends JpaRepository<CustomerServiceHours, Long> {}
