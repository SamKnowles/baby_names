function displayName(){
  var fullName = document.getElementById('output');
  var lastName = document.getElementById('lastName').value;
  var middleName = middleNames[Math.floor(Math.random () * middleNames.length)];
  var sexName;
  if (document.getElementById('boyRadio').checked === false && document.getElementById('girlRadio').checked === false) {
    alert("Please select Male or Female");
    return false;
  }
  if (document.getElementById('boyRadio').checked) {
    document.body.style.backgroundColor = "#00FFFF";
    sexName = maleNames[Math.floor(Math.random () * maleNames.length)];
  }
  else if (document.getElementById('girlRadio').checked) {
    sexName = femaleNames[Math.floor(Math.random () * femaleNames.length)];
    document.body.style.backgroundColor = "#FFB6C1";
  }
  document.getElementById('lastName').value = "";
  if (lastName === ""){
    alert("Please enter a last name.");
  }
  else {
  fullName.innerText = sexName + " \"" + middleName + "\" " + lastName;
}
}
