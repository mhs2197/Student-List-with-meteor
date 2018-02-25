import {
  Template
} from 'meteor/templating';

import {
  Students
} from '../imports/api/students.js';

import './main.html';

Template.body.helpers({
  students() {
    return Students.find({});
  },
});
Template.addStudent.events({
  'submit .add-form': function() {
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const target2 = event.target;
    const target3 = event.target;
    const target4 = event.target;
    const newName = target.newName.value;
    const newEmail = target2.newEmail.value;
    const newPhone = target3.newPhone.value;
    const newDOB = target4.newDOB.value;

    // Insert a students into the collection
    // Students.insert({
    //   Name: newName,
    //   Email: newEmail,
    //   Phone: newPhone,
    //   DOB: newDOB
    // });
    if (newName == "" || newPhone == "" || newPhone == "" || newDOB == "")
    {
      alert("Empty Field Detected");
    }
    else
    {
      Meteor.call('students.insert', newName, newEmail, newPhone, newDOB);
      target.newName.value = "";
      target2.newEmail.value = "";
      target3.newPhone.value = "";
      target4.newDOB.value = "";
      $('#addStudentModal').modal('close');
    }

  }
});
