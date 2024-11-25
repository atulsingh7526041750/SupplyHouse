// AddSpecialHours.jsx
import React, { useContext, useState } from 'react';
// import { addSpecialHours } from './api';
import { addSpecialHours } from '../services/api'; // Assume this service exists for API calls
import { Button, DatePicker, Form, Input, TimePicker } from 'antd';
import { FormContext } from './FormContext';

const AddSpecialHours = () => {
     const [form]=Form.useForm();
  const [formData, setFormData] = useState({
    date: '',
    reason: '',
    openingTime: '',
    closingTime: '',
  });
const format="HH:mm";
const [isFormVisible,setIsFormVisible]=useContext(FormContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (values) => {
    const openingTimeFormated=convertTime(new Date(values.openingTime).toISOString())
    const closingTimeFormated=convertTime(new Date(values.closingTime).toISOString())
    values.openingTime=openingTimeFormated;
    values.closingTime=closingTimeFormated;
    setIsFormVisible(false)
    addSpecialHours(values).then(() => { form.resetFields(); alert('Special hours added successfully!')});
  
  };
  const convertTime=(isoTime)=>{
    const date=new Date(isoTime);
    let hours = date.getHours();
const minutes = date.getMinutes().toString().padStart(2, '0');
const ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12 || 12; 
const timeString = `${hours}:${minutes} ${ampm}`;
return timeString;

  }

  return (
    <div className="add-special-hours-form">
      <h2>Add Special Hours</h2>
      <Form onFinish={handleSubmit}
      form={form}
      >
        <Form.Item
        onCha
        name={"date"}
        label="Date"
        rules={[{
            required:true,
            message:"Date Is Required"
        }]}
        
        >
            <DatePicker ></DatePicker>
        </Form.Item>
        <Form.Item
        name={"reason"}
        label="Reason"
        rules={[{
            required:true,
            message:"Reason Is Required"
        }]}
        >
            <Input></Input>
        </Form.Item>
        <div>


        <Form.Item
        name={"openingTime"}
        label="Opeaning Time"
        rules={[{
            required:true,
            message:"Date Is Required"
        }]}
        >
        <TimePicker
            format={"HH:mm:A"}
          />
        </Form.Item>
        </div>
        <Form.Item
       label="Closing Time"
       name="closingTime"
        rules={[{
            required:true,
            message:"Closing Time Is Required"
        }]}
        >
        <TimePicker
            format={"HH:mm:A"}
            required
          />
        </Form.Item>
        <Form.Item>
        <Button htmlType="submit" onSubmit={handleSubmit}>Add</Button>
        </Form.Item>
        
      </Form>
    </div>
  );
};

export default AddSpecialHours;