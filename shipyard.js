// Step 12 - Bonus Step: Refactor!
// You have probably typed out Ship.prototype.functionName enough times to realize this isn't very DRY, and your function assignments might be all over the code and it's hard to tell what functions our prototype has, refactor your Ship constructor / prototype to consolidate and clean up your code.

// YOUR CODE GOES HERE
function Ship(name) {
  this.name = name;
  this.crew = [];
  this.propulsion = null;
}

Ship.prototype.mountPropulsion = function(propulsion) {
  this.propulsion = propulsion;
  console.log("Propulsion mounted!");
};

Ship.prototype.takeoff = function() {
  if (this.propulsion.fire()) {
    console.log("PCHOOOOOOooooo!");
  } else {
    console.log("Takeoff failed to fire.");
  }
};

Ship.prototype.loadCrew = function(crewList) {
  for (var i = 0; i < crewList.length; i++) {
    this.crew.push(crewList[i]);
    console.log("Welcome aboard, " + crewList[i].name);
  }
};

Ship.prototype.captain = function() {
  var number = this.crew.length;
  var randomNumber = Math.floor(Math.random()*number);
  var captain = this.crew[randomNumber];
  return captain;
};

var ourShip = new Ship("Space-Wizards");

var crewNames = ["Mary Elaine", "Myles", "Steve", "Noah", "Keyan", "Jeff", "Brady", "Russ", "Liz", "Charlie", "Nick"];

function CrewMember(name) {
  this.name = name;
  this.trained = false;
}

function trainCrew(crew) {
  var trainedCrew = [];
  for (var i = 0; i < crew.length; i++) {
    var member = new CrewMember(crew[i]);
    member.trained = true;
    trainedCrew.push(member);
  }
  return trainedCrew;
}

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  addFuel: function(amount) {
    this.fuel += amount;
    console.log(this.fuel);
  },
  fire: function() {
    if (this.fuel >= 1) {
      this.fuel--;
      console.log("The engines have fired!");
      console.log("The amount of fuel left is: " + this.fuel);
      return true;
    } else {
      console.log("The engines failed to fire.");
      return false;
    }
  }
};

var launchPad = function(ship, crewList, rocket) {
  console.log("Bike shedding");
  console.log("Welcome to the " + ship.name);
  ship.loadCrew(crewList);
  console.log("Your captain is " + ship.captain().name);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(10);
  ship.takeoff();
};

var fleet = {
  ships: [],
  name: "The Grand Fleet",
  build: function(array) {
    for (var i = 0; i < array.length; i++) {
      ship = new Ship(array[i]);
      this.ships.push(ship);
      console.log("Greetings, all crewmembers of the might " + this.name);
    }
  }
};

launchPad(ourShip, crewMembers, rocket);

var shipNames = ["Nona", "Ponta", "Sonta Morioa", "Enterprise", "Serenity"];
fleet.build(shipNames);
