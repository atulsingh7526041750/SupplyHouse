package com.supplyhouse.CustomerSupport.exception;



import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

/**
 * A custom structure for error responses.
 */
public class ErrorResponse {
    private String message;
    private HttpStatus status;
    private LocalDateTime timestamp;

    public ErrorResponse(String message, HttpStatus status, LocalDateTime timestamp) {
        this.message = message;
        this.status = status;
        this.timestamp = timestamp;
    }

    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        System.out.println("this is called");
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
