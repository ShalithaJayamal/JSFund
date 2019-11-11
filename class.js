class Employee {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    // Getter
    get name() {
      return this.fullName();
    }
  
    // Method
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const e1 = new Employee('Krunal', 'Lathiya');
  console.log(e1.name);