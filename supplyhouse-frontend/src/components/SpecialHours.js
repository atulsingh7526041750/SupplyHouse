import React, { useEffect, useState } from "react";
import { fetchSpecialHours } from "../services/api";
import './SupportInfo.css';

const SpecialHours = () => {
  const [specialHours, setSpecialHours] = useState([]);

  useEffect(() => {
    fetchSpecialHours().then((data) => setSpecialHours(data));
  }, []);

  return (
    <div>
      <h2>Special Hours</h2>
      <ul>
        {specialHours.map((hour) => (
          <li key={hour.id}>
            {hour.date} ({hour.reason}): {hour.openingTime} - {hour.closingTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialHours;
