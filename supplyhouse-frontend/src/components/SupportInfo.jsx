
import React, { useContext, useState } from 'react';
import { Phone, MessageSquare, MessageCircle, Mail } from 'lucide-react';
import './SupportInfo.css';
import AddSpecialHours from './AddSpecialHours';
import { mockRegularHours, mockSpecialHours } from '../services/api';
import { Modal } from 'antd';
import { FormContext } from './FormContext';
const SupportInfo = () => {
    const [showAddSpecialHours, setShowAddSpecialHours] = useState(false);
    const [specialHours, setSpecialHours] = useState(mockSpecialHours);
   const [isFormVisible,setIsFormVisible]=useContext(FormContext);

    const contactMethods = [
        {
            icon: <Phone className="icon" />,
            label: 'Call',
            value: '888-551-7600',
            availability: 'Available 8am',
        },
        {
            icon: <MessageSquare className="icon" />,
            label: 'Text',
            value: '888-551-7600',
            availability: 'Available 8am',
        },
        {
            icon: <MessageCircle className="icon" />,
            label: 'Live Chat',
            value: '',
            availability: 'Available 8am',
        },
        {
            icon: <Mail className="icon" />,
            label: 'Email',
            value: '',
            availability: 'Response by Sun',
            isEmail: true
        }
    ];

    const hours = {
        special: {
            label: 'Special Hours',
            time: '8:45am-7:45pm'
        },
        regular: [
            {
                days: 'Monday – Thursday',
                hours: '8am-7:45pm'
            },
            {
                days: 'Friday',
                hours: '9am-7:45pm'
            },
            {
                days: 'Saturday',
                hours: '9am-5:45pm'
            },
            {
                days: 'Sunday',
                hours: '9am-5:45pm'
            }
        ]
    };

    const handleAddSpecialHours = (newSpecialHours) => {
        setSpecialHours([...specialHours, newSpecialHours]);
        setShowAddSpecialHours(false);
       
        
    };

    return (
        <div className="support-container">
            {/* Header Section */}
            <div className="support-header">
                <div className="profile-container">
                    <img
                        src="/api/placeholder/64/64"
                        alt="Support representative"
                        className="profile-image"
                    />
                </div>

                <h2 className="header-title">Questions?</h2>

                <p className="header-message">
                    Our Customer Support will be opening late today. We apologize
                    for any inconvenience.
                </p>
            </div>
            <div className="add-special-hours-button">
                <button onClick={() =>{ setIsFormVisible(true); setShowAddSpecialHours(true)}}>Add Special Hours</button>
            </div>
            {/* Contact Methods Section */}
            <Modal visible={isFormVisible}
                onCancel={() =>{ setIsFormVisible(false); setShowAddSpecialHours(false)}}
                footer={null}
            >
                <AddSpecialHours></AddSpecialHours>
            </Modal>
            <div className="contact-section">
                {contactMethods.map((method, index) => (
                    <div key={index} className="contact-item" >
                        <div className="contact-icon">
                            {method.icon}
                        </div>
                        <div className="contact-info">
                            <div className="contact-header">
                                <span className={`contact-label ${method.isEmail ? 'email' : ''}`}>
                                    {method.label}
                                </span>
                                {method.value && (
                                    <span className="contact-value">{method.value}</span>
                                )}
                            </div>
                            <div className="contact-availability">
                                {method.availability}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hours-section" >
                <div style={{ margin: '0px 50px' }}>
                    <div className="special-hours" style={{margin:'0px'}}>
                        <h3 className="special-hours-title" style={{margin:'0px'}}>Special Hours</h3>
                        {/* <p className="special-hours-time" >{specialHours[0].openingTime+" To "+specialHours[0].closingTime}</p> */}
                    </div>

                    {/* Display the added special hours */}
                    <div className="special-hours-list" style={{margin:'0px'}}>
                        {specialHours.length > 0 && specialHours.map((special, index) => (
                            <div key={index} className="schedule-item" style={{margin:'0px'}}>
                                <div  style={{color:'red',margin:'0px'}} >{special.dayOfWeek}</div>
                                <div  style={{color:'red',margin:'0px'}}>{`${special.openingTime} To ${special.closingTime}`}</div>
                            </div>
                        ))}
                    </div>

                    {/* Regular hours */}
                    <div className="regular-hours" style={{marginTop:'10px'}}>
                        {mockRegularHours.map((schedule, index) => (
                            <div key={index} className="schedule-item">
                                <div className="schedule-days">{schedule.dayOfWeek}</div>
                                <div className="schedule-hours">{`${schedule.openingTime} To ${schedule.closingTime}`}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Button to show the Add Special Hours form */}


            {/* Show the Add Special Hours Form */}
            {showAddSpecialHours && <AddSpecialHours onAddSpecialHours={handleAddSpecialHours} />}
        </div>
    );
};

export default SupportInfo;