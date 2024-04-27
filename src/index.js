var Student = /** @class */ (function () {
    function Student(name, age, major, hobbies) {
        this.name = name;
        this.age = age;
        this.major = major;
        this.hobbies = hobbies;
    }
    Student.prototype.displayInfo = function () {
        var hobbiesString = '';
        if (this.hobbies.length === 1) {
            hobbiesString = this.hobbies[0];
        }
        else if (this.hobbies.length > 1) {
            hobbiesString = this.hobbies.slice(0, -1).join(", ") + " and " + this.hobbies[this.hobbies.length - 1];
        }
        return "\n      Hello, ".concat(this.name, "!\n      You are ").concat(this.age, " years old.\n      You'r major is ").concat(this.major, ".\n      You like ").concat(hobbiesString, "\n    ");
    };
    return Student;
}());
function gatherStudentInfo() {
    var nameInput = document.querySelector("#name");
    var ageInput = document.querySelector("#age");
    var majorInput = document.querySelector("#major");
    var hobbiesInput = document.querySelector("#hobbies");
    var name = nameInput.value;
    var age = parseInt(ageInput.value, 10);
    var major = majorInput.value;
    var hobbies = hobbiesInput.value.split(",").map(function (item) { return item.trim(); });
    return new Student(name, age, major, hobbies);
}
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    var student = gatherStudentInfo();
    var infoContainer = document.querySelector(".infoContainer");
    if (infoContainer instanceof HTMLElement) {
        // Display student information
        infoContainer.textContent = student.displayInfo();
    }
    else {
        console.error("Info container not found");
    }
}
// Add event listener to form submission
var form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", handleSubmit);
}
else {
    console.error("Form not found");
}
