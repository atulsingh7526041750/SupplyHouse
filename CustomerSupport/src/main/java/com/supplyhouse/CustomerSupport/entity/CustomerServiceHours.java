package com.supplyhouse.CustomerSupport.entity;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

/**
 * Entity representing the regular customer service hours.
 */
@Entity
public class CustomerServiceHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotNull(message = "Day of the weak can not be nuull")
    private String dayOfWeek;

    @Column(nullable = false)
    @NotNull(message = "Opening Time can not be null")
    private LocalDateTime openingTime;

    @Column(nullable = false)
    @NotNull(message = "Closing time can not be null")
    private LocalDateTime closingTime;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public LocalDateTime getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(LocalDateTime openingTime) {
        this.openingTime = openingTime;
    }

    public LocalDateTime getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(LocalDateTime closingTime) {
        this.closingTime = closingTime;
    }

    public CustomerServiceHours(Long id, String dayOfWeek, LocalDateTime openingTime, LocalDateTime closingTime) {
        this.id = id;
        this.dayOfWeek = dayOfWeek;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }

    public CustomerServiceHours() {
    }

}
