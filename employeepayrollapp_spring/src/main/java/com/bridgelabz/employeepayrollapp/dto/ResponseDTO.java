/**
 * ResponseDTO.java
 */
package com.bridgelabz.employeepayrollapp.dto;

import lombok.*;


public @Data class ResponseDTO {
    private String message;
    private Object data;

    public ResponseDTO(String message, Object data) {
        this.message = message;
        this.data = data;
    }
}
