const ageCalculatorForm = document.getElementById('ageCalculator');


function calculateAge() {
    
    const today = new Date();
    const birthdateInput = document.getElementById('birthday').value;
    const birthdateParts = birthdateInput.split('-');
    const birthDay = birthdateParts[0]; 
    const birthMonth = birthdateParts[1] - 1; //due to the index starting at 0 
    const birthYear = birthdateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    //checnking if the date is valid
    const isValidDate = (date) =>{
        return(
            Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
        );
    };

    if(!isValidDate(birthDate)){
        alert('Invalid Date format: Please enter a valid date');
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.35);
    
    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById('result');

    resultContainer.innerHTML= `
    <div class="result-item">
    <h3>Age: </h3>
    <p>${ageInYears} Years ${ageInMonths %12} months ${ageInDays % 30} days</p>
    </div>
    <div class="result-item">
    <h3>Age in Months: </h3>
    <p> ${ageInMonths} months</p>
    </div>
    <div class="result-item">
    <h3>Age in Weeks: </h3>
    <p>${ageInWeeks} weeks</p>
    </div>
    <div class="result-item">
    <h3>Days Passed: </h3>
    <p>${ageInDays} days</p>
    </div>
    <div class="result-item">
    <h3>Hours Passed: </h3>
    <p>${ageInHours} </p>
    </div>
    <div class="result-item">
    <h3>Minutes Passed: </h3>
    <p>${ageInMinutes} </p>
    </div>
    <div class="result-item">
    <h3>Seconds Passed: </h3>
    <p>${ageInSeconds} </p>
    </div>
    `;
    resultContainer.style.display = 'block';

}

ageCalculatorForm.addEventListener('submit', (event) =>{

    event.preventDefault();
    calculateAge();
});