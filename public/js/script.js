//Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email) {
  //Check if email was provided
  if (email === null || email === undefined){
      return 'Email not provided!'
      }
  //Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the list to the participants;
  participants.push(email)
  //Notify them via email
  //return response
  return 'Participant added!';
}

addParticipant('ericapph@gmail.com'); 


// Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets
alphabets.join(' ');
alphabets.join(' ').split(' ');











