//1

let dog = {
    name: "Spot",
    numLegs: 4
    };

//2

let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog.name);
  console.log(dog.numLegs);

  //3
  
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){return "This dog has " + dog.numLegs+ " legs.";}
  };
  
  dog.sayLegs();
  
  //4
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  //5
  function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

  //6
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog();

  //7
  function Dog(name, color) {
    this.name = name;
    this.numLegs = 4;
    this.color = color;
    }
    let terrier = new Dog("Chac", 'red');

  //8
  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse = {
   numBedrooms:2,
  } 
  myHouse instanceof House;
  // Only change code below this line
  