import React, { useEffect, useState } from "react";
import { fetchRegularHours } from "../services/api";
import './SupportInfo.css';

const RegularHours = () => {
  const [regularHours, setRegularHours] = useState([]);

  useEffect(() => {
    fetchRegularHours().then((data) => setRegularHours(data));
  }, []);

  return (
    <div>
      <h2>Regular Customer Service Hours</h2>
      <ul>
        {regularHours.map((hour) => (
          <li key={hour.id}>
            {hour.dayOfWeek}: {hour.openingTime} - {hour.closingTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegularHours;
