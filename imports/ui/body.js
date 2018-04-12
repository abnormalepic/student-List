import { Template } from 'meteor/templating';

import './task.js';
import { Tasks } from '../api/tasks.js';
 
import './body.html';
 
Template.body.helpers({
   tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});
Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const dob = target.dob.value;
 
    // Insert a task into the collection
    Tasks.insert({
      text,
      email,
      phone,
      dob,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
    target.email.value = '';
    target.phone.value = '';
    target.dob.value = '';
  },
});