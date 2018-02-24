import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
export const Students = new Mongo.Collection('students');


Meteor.methods({
  'students.insert'(newName, newEmail, newPhone, newDOB) {
    check(newName, String);
    check(newEmail, String);
    check(newPhone, String);
    check(newDOB, String);

    Students.insert({
      Name: newName,
      Email: newEmail,
      Phone: newPhone,
      DOB: newDOB
    });
  }
});
