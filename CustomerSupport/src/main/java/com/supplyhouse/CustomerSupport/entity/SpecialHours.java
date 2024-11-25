package com.supplyhouse.CustomerSupport.entity;



import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.NonNull;

import java.time.LocalDateTime;

/**
 * Entity representing special customer service hours for specific dates.
 */
@Entity
public class SpecialHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime date;


    @Column(nullable = false)
    @NotNull(message = "Opening Time can not be null")
    private LocalDateTime openingTime;

    @Column(nullable = false)
   @NotNull(message = "Closing time can not be null")
    private LocalDateTime closingTime;

    @Column(nullable = false)
    @Size(max = 255, message = "Reason cannot exceed 255 characters.")
    private String reason;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
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

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public SpecialHours(Long id, LocalDateTime date, LocalDateTime openingTime, LocalDateTime closingTime, String reason) {
        this.id = id;
        this.date = date;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.reason = reason;
    }

    public SpecialHours() {
    }
}
