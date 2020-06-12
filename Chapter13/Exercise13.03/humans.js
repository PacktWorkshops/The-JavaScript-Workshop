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
}

let teacher = new Teacher('Gaurav Mehla', 24, 'Male', 'Math', 'A');

teacher.info();