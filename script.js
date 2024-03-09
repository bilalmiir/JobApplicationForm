function createTable() {
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");

    let name = firstName.value + " " + lastName.value;

    const phoneNumber = document.querySelector("#phone-no").value;
    const email = document.querySelector("#email-address").value;
    const educationLevel = document.querySelector("#highest-lvl-edu").value;
    const institute = document.querySelector("#institute-name").value;
    const studyArea = document.querySelector("#study-area").value;
    const skills = document.querySelector("#skills").value;
    const question = document.querySelector("#question").value;
    

    const tableBody = document.querySelector(".table-body");
    
    const bodyRow = document.createElement("tr");
    
    const nameVal = document.createElement("td");
    const phonNumberVal = document.createElement("td");
    const emailVal = document.createElement("td");
    const educationLevelVal = document.createElement("td");
    const instituteVal = document.createElement("td");
    const studyAreaVal = document.createElement("td");
    const skillsVal = document.createElement("td");
    const questionVal = document.createElement("td");
    
    tableBody.append(bodyRow);

    bodyRow.append(nameVal);
    bodyRow.append(phonNumberVal);
    bodyRow.append(emailVal);
    bodyRow.append(educationLevelVal);
    bodyRow.append(instituteVal);
    bodyRow.append(studyAreaVal);
    bodyRow.append(skillsVal);
    bodyRow.append(questionVal);

    nameVal.innerText = name;
    phonNumberVal.innerText = phoneNumber;
    emailVal.innerText = email;
    educationLevelVal.innerText = educationLevel;
    instituteVal.innerText = institute;
    studyAreaVal.innerText = studyArea;
    skillsVal.innerText = skills;
    questionVal.innerText = question;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    const form = document.querySelector("#job-application-form");
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{11}$/;

    if (validateFormInputs() === true){
        if (validateFormEmailnPhoneNo() === true){
            event.preventDefault();
            
            createTable();
    
            const formContainer = document.querySelector(".form-container"); 
            formContainer.style.display = "none";
        
            const innerContainer = document.querySelector(".inner-container");
            innerContainer.style.height = "464px";
            innerContainer.style.width = "95%";
        
            const viewTableButton = document.querySelector(".view-table-btn");
            viewTableButton.style.display = "block";
        
            window.scrollTo({ top: 0, behavior: 'instant' });
            
        }else{
            alert('Enter correct email and/or phone number in correct format');
        }
    }
    else {
        alert('Please fill in all fields/');
    }

    function validateFormInputs() {
        var inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                console.log("inside validateform");
                return false;
            }
        }
        return true;
    }

    function validateFormEmailnPhoneNo() {
        const isEmailValid = emailPattern.test(emailInput.value);
        const isPhoneValid = phonePattern.test(phoneInput.value);

        if (isEmailValid === true){
            console.log("email is ok");
            if (isPhoneValid === true){
                console.log("phone no is ok");
                return true;
            }else{
                console.log("phone no is not ok");
                return false;
            }
        }else{
            console.log("email is not ok");
            if (isPhoneValid === true){
                console.log("phone no is ok");
                return true;
            }else{
                console.log("phone no is not ok");
                return false;
            }
        }
    }
});

const viewTableBtn = document.querySelector(".view-table-btn");
viewTableBtn.addEventListener('click', () => {
    viewTableBtn.style.display = "none";

    const tableContainer = document.querySelector(".table-container");
    tableContainer.style.display = "block";
});