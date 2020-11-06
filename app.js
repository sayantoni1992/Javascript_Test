  class Person {

    //Defining the constructor to get the values from the user
    constructor(name,age,address,contact) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.contact = contact;
    }

    //Function to get the value of age
    age() {
      return this.age;
    }

    //Function to get the hobbies of the user
    getHobbies() {
        console.log("Inside Get Hobbies");
        var hobbies = ["Reading", "Travelling","Coding","Singing"];
        var hobbies_text = "<h3>My Hobbies</h3>";
        hobbies_text += "<ul>";

        //Print the hobbies in the form to list for better display
        for(let i= 0; i < hobbies.length; i++) {
            hobbies_text += "<li>" + hobbies[i] + "</li>";
        }
        hobbies_text += "</ul>";

        //Creating the element for the hobbies
        const recordHobbies = document.createElement('div');
        recordHobbies.setAttribute('class', 'record-hobbies content');
        recordHobbies.innerHTML = hobbies_text;
        document.getElementById("demo").appendChild(recordHobbies);
        return;
    }

    //Function to get the address passed by the user
     getAddress() {
        return this.address;

    }

    //Function to set the adress to a new one
    setAddress(new_address) {
        this.address = new_address;
        return;

    }

    //Function to display the addresss
    displayAddress() {

        //Creating the div of the address element
        const recordAddress = document.createElement('div');
        recordAddress.setAttribute('class', 'record-address content');
        recordAddress.innerHTML = "<h3>My Address</h3>";
        recordAddress.innerHTML += this.getAddress();
        document.getElementById("demo").appendChild(recordAddress);
        return;
    }

    //Function to get the contact passed by the user
    getContact() {
        return this.contact;

    }

    //Function to set the contact info passed by the user- this will overwrite the existing content
    setContact(new_contact) {
        this.contact = new_contact;
        return;

    }

    //Function to get the contact passed by the user and append to the existing value
    getLatestAddedContacts(contact_info) {
        this.contact += "<br>" + contact_info;
        return;
    }


    //Function to display the contact passed by the user
    displayContact() {

        //Creating the div for the contact information
        const recordContact = document.createElement('div');
        recordContact.setAttribute('class', 'record-contact content');
        recordContact.innerHTML = "<h3>Contact Information</h3>";
        recordContact.innerHTML += this.getContact();
        document.getElementById("demo").appendChild(recordContact);
        return;
    }


    //Function to get the work experience of the user
    getWorkExperience() {

        //Ctreating the div for the work experience to display it in the main page
        const recordExperience = document.createElement('div');
        recordExperience.setAttribute('class', 'record-experience content');

        //The Hardcoded experience details
        recordExperience.innerHTML = `<h3>Work Experience</h3>
        <p>
        <p><strong>Data Engineer at Tata Consultancy Services<br>
        <small>Sep 2014 - Feb 2019</small></strong></p>
        <p><strong>Project: </strong>Transform of Citi Mortgage Servicing System known as Mortgage Transform</p>
        <p><strong>Client : </strong>Citibank, North America</p>
        <p><strong>Responsibilities :</strong></p>
            <ul>
                <li>Studying and analyzing the Functional Requirement Document.</li>
                <li>Preparing the ETL design and construction using ETL tool Ab Initio and Spark(using Scala).</li>
                <li>DEV and UAT testing of the developed code.</li>
                <li>Preparing AutoSys jobs.</li>
                <li>Preparing master document having necessary information (source
                    system, source file/table, object list, migration tag, and AutoSys job
                    information) for the production team.</li>
                <li>Preparing master document having necessary information (source
                    system, source file/table, object list, migration tag, and AutoSys job
                    information) for the production team.</li>
                <li>Part of the team during the production run of the delivered jobs</li>
                <li>Regular interaction with client and onshore team to discuss about
                    Issues/implementation plans.</li>
            </ul>
         </p>`;
         document.getElementById("demo").appendChild(recordExperience);
         return;
    }

    
    //Function to print the details of the user
    aboutMe() {
        //Creating the element and appending it to the main div
        const recordMe = document.createElement('div');
        recordMe.setAttribute('class', 'record-me content');
        recordMe.innerHTML =`<h3>About Me</h3>
                    <p>Hi, This is Sayantoni.<br>
                    I am currently living in Helsingborg, Sweden. Its been a little over 1.5 years since 
                        I moved here. I am actively looking for jobs in Sweden.<br>
                    I have worked with <strong>Tata Consultancy Services (India)</strong> as a <strong>Data Engineer</strong> 
                        for the past 4.4 years with exposure in Banking and Finance Domain.<br>
                    Currently I am pursuing Grundläggande Programmering course from 
                        Komvux Helsingborg</p>`;
        document.getElementById("demo").appendChild(recordMe);
        return;
    }
  }
  
  //Creating an object for the class with the given arguments
  let myPerson = new Person("Sayantoni Coomer",28,"Mariehällsvägen 1 lgh 1202<br>Helsingborg 25449","sayantoni.coomer@gmail.com");

  //Taking the name of the user and displaying it in the header dynamically

  document.getElementById("header-name").innerHTML= myPerson.name;

  //Adding the CV
  document.getElementById("demo").innerHTML=
  `<h2 class="center-pos">CURRICULUM VITAE</h2>`;

//Calling different methods in the class to get the details of the user
  myPerson.aboutMe();
  myPerson.getWorkExperience();
  myPerson.getHobbies();
  myPerson.getAddress();
  //myPerson.setAddress("1");
  myPerson.getContact();
  myPerson.getLatestAddedContacts("+46 764423828");
  //myPerson.setContact("1");
  myPerson.displayContact();
  myPerson.displayAddress();
 
  



  //getHobbies, getWorkExperiens, getLatestAddedContacts, setNewContact, getAdress
