const firebaseConfig = {
    apiKey: "AIzaSyDT8lW2lDfo7lnvkWQBtb0OtTnScmGdYR4",
    authDomain: "contactform-9f9fd.firebaseapp.com",
    databaseURL: "https://contactform-9f9fd-default-rtdb.firebaseio.com",
    projectId: "contactform-9f9fd",
    storageBucket: "contactform-9f9fd.firebasestorage.app",
    messagingSenderId: "255836708143",
    appId: "1:255836708143:web:eb31bd09dcabb05dd4d5da"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };