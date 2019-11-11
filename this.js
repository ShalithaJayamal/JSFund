function Investor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  let st2 = new Investor("Eleven", 15);
  let st3 = new Investor("Robin", 21);
  
  st2.nationality = 'British';
  console.log(st2);