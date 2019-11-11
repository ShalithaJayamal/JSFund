/*In the ES6 Way*/
class Millie {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  class Eleven extends Millie {
    constructor(character, power = 'telekenesis') {
      super(character);
      this.power = power;
    }
    speak(){
      console.log('UK Accent');
    }
  }
  let el = new Eleven('Friends Don\'t lie');
  el.speak()