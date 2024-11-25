package com.supplyhouse.CustomerSupport.exception;





/**
 * Custom exception for handling cases when a resource is not found.
 */
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
