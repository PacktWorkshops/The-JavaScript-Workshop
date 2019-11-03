class Humans {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  info() {
    return console.log(this);
  }
}

// Encapsulation
class Teacher extends Humans {
  constructor(name, age, gender, subject, grade) {
    super(name, age, gender);
    this.subject = subject;
    this.grade = grade;
  }

  info() {
    console.log(this);
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

let teacher = new Teacher('Gaurav Mehla', 24, 'Male', 'Math', 'A');

teacher.subject = 'Science'; // Setter Function
teacher.info(); // Print Everything
