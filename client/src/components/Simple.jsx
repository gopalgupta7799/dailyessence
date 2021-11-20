import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

class Simple extends Component {
  render() {
    return (
      <ChatBot
        steps=
        {
          [
            {
              id: 'intro',
              message: 'Hi, What can i help you with?',
              trigger: 'intro-user',
            },
            {
              id: 'intro-user',
              options: [
                { value: 'Track', label: 'I want to track my order', trigger: 'Track' },
                { value: 'Manage', label: 'I want to manage my order', trigger: 'Manage' },
                { value: 'Refunds', label: 'I want help with refunds ', trigger: 'Refunds' },
              ]
            },
            {
              id: 'Track',
              message: 'Select your Query',
              trigger: 'Track-user',
            },
            {
              id: 'Track-user',
              options: [
                { value: 'Order', label: 'How do I track my Order', trigger: 'Order' },
                { value: 'Dilevery', label: 'How do I track my Delivery', trigger: 'Delivery' },
                { value: 'Order Details', label: 'How do I find my order details', trigger: 'Order Details' },
                { value: 'Miss Dilevery', label: 'What if I miss my delivery', trigger: 'Miss Delivery' },
              ]
            },
            {
              id: 'Order',
              message: 'Please go to My Order > Track my order ',
              end: true,
            },
            {
              id: 'Delivery',
              message: 'Please go to My Order > Track my Delivery',
              end: true,
            },
            {
              id: 'Order Details',
              message: 'Please wait, we will mail your order details on your registered email address shortly',
              end: true,
            },
            {
              id: 'Miss Delivery',
              message: 'If you miss your delivery,you will be given the delivery executive number to schedule the time of delivery again',
              end: true,
            },
            {
              id: 'Manage',
              message: 'Please wait, while we connect you to our customer executive to change your address/date and more',
              end: true,
            },
            {
              id: 'Refunds',
              message: 'Please wait, while we connect you to our customer executive for further assistance',
              end: true,
            },
          ]
        }
        {...config}
      />

    );
  }

}

export default Simple;