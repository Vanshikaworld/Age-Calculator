function calculateAge() {
  var birthDate = new Date(document.getElementById('birthdate').value);
  var currentDate = new Date(document.getElementById('currentdate').value);
  
  var timeDifference = currentDate.getTime() - birthDate.getTime();
  
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);
  
  var hours = Math.floor(timeDifference / (1000 * 60 * 60));
  var minutes = Math.floor(timeDifference / (1000 * 60));
  var seconds = Math.floor(timeDifference / 1000);
  
  document.getElementById('result').innerHTML = `
  
   <h2>Your Age is</h2>
   <p>${years} Years</p>
    <p>${months} Months</p>
    <p>${days} Days</p>
    <p>${hours} Hours</p>
    <p>${minutes} Minutes</p>
    <p>${seconds} Seconds</p>
  `;
}
function resetForm() {
  document.getElementById('birthdate').value = '';
  document.getElementById('currentdate').value = '';
  document.getElementById('result').innerHTML = '';
}