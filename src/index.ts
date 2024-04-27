class Student {
  constructor(
    public name: string,
    public age: number,
    public major: string,
    public hobbies: string[]
  ) {}

  displayInfo() {
    let hobbiesString = '';
    if (this.hobbies.length === 1) {
      hobbiesString = this.hobbies[0];
    } else if (this.hobbies.length > 1) {
      hobbiesString = this.hobbies.slice(0, -1).join(", ") + " and " + this.hobbies[this.hobbies.length - 1];
    }
    return `
      Hello, ${this.name}!
      You are ${this.age} years old.
      You'r major is ${this.major}.
      You like ${hobbiesString}
    `;
  }
}

function gatherStudentInfo() {
  const nameInput = document.querySelector("#name") as HTMLInputElement;
  const ageInput = document.querySelector("#age") as HTMLInputElement;
  const majorInput = document.querySelector("#major") as HTMLInputElement;
  const hobbiesInput = document.querySelector("#hobbies") as HTMLInputElement;

  const name = nameInput.value;
  const age = parseInt(ageInput.value, 10);
  const major = majorInput.value;
  const hobbies = hobbiesInput.value.split(",").map(item => item.trim());

  return new Student(name, age, major, hobbies);
}

function handleSubmit(event: Event) {
  event.preventDefault(); // Prevent form submission

  const student = gatherStudentInfo();
  const infoContainer = document.querySelector(".infoContainer");

  if (infoContainer instanceof HTMLElement) {
    // Display student information
    infoContainer.textContent = student.displayInfo();
  } else {
    console.error("Info container not found");
  }
}

// Add event listener to form submission
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", handleSubmit);
} else {
  console.error("Form not found");
}