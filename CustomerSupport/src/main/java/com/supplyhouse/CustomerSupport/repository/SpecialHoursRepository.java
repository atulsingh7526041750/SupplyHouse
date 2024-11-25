package com.supplyhouse.CustomerSupport.repository;


import com.supplyhouse.CustomerSupport.entity.SpecialHours;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Repository for managing SpecialHours entities.
 */
public interface SpecialHoursRepository extends JpaRepository<SpecialHours, Long> {

    /**
     * Finds all special hours scheduled after a given date.
     *
     * @param now The date after which special hours are retrieved.
     * @return List of special hours.
     */
    List<SpecialHours> findByDateAfter(LocalDateTime now);
}
