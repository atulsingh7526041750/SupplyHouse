export const mockRegularHours = [
    { id: 1, dayOfWeek: "Monday-Thursday", openingTime: "08:00 am", closingTime: "07:45 pm" },
    { id: 2, dayOfWeek: "Friday", openingTime: "09:00 am", closingTime: "07:45 pm" },
    {id:3, dayOfWeek:"Saturday", openingTime:"09:00 am", closingTime: "05:45 pm" },
    {id:3, dayOfWeek:"Sunday", openingTime:"09:00 am", closingTime: "05:45 pm" }
  ];


  export const mockSpecialHours = [
    { id: 1, date: "2024-12-25", reason: "Holiday Hours", openingTime: "10:00 am", closingTime: "02:00 pm" },
  ];
  
  // Fetch regular hours
  export const fetchRegularHours = () => Promise.resolve(mockRegularHours);
  
  // Fetch special hours
  export const fetchSpecialHours = () => Promise.resolve(mockSpecialHours);
  
  // Add special hours
  export const addSpecialHours = (data) => {
    mockSpecialHours.push({ id: mockSpecialHours.length + 1, ...data });
    return Promise.resolve(data);
  };
  