package com.supplyhouse.CustomerSupport.service;
import com.supplyhouse.CustomerSupport.entity.CustomerServiceHours;
import com.supplyhouse.CustomerSupport.entity.SpecialHours;

import java.util.List;

/**
 * Service interface for handling business logic related to customer service hours.
 */
public interface HoursService {

    List<CustomerServiceHours> getRegularHours();

    List<SpecialHours> getSpecialHours();

    SpecialHours addSpecialHours(SpecialHours specialHours);


}
