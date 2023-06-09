function car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = []; 
    
    
    this.getCarInfo = function () {
    return `Make: ${this.make}, Model:${this.model}, Year:${this.year}`;
    }
    }
    
    removeOwner(owner){
    this.owners.push(owner);
    }
    
    addOwner(owner){
    const index = this.owners.indexOf(owner);
    if(index> -1) {
    this.owners.splice(index,1);
    }
    }
    
    
    getOwnersCount(){
    return this.owners.length;
    }

    getOwnerNames = function(){
        return this.fullName();
    }
    
      getFullInfo = function(){
        return this.make + " " + this. model + " " + "from" + " " + this.year +
        "." + " " + this.getOwnersCount() + " " + "person owns this car." +
        " " + "These are" + " " + this.getOwnerNames();
    }

}
    
    function Person(name,surname,age,gender,cars){
    this.name = name;
    this.surname=surname;
    this.age = age;
    this.gender=gender;
    this.cars = cars;
    this.fullName = function(){
        return this.name + " " = this.surname;
    }
        this.countCars = function(){
            return cars.length;
        }
        this.buysCar = function(car){
        this.cars.push(car);
        car.owners.push(this);
    }

    this.sellsCar = function (car) {
        this.cars = this.cars.filter((el) => el !== car);
        car.removeOwner(this);
      };

      this.getAllCarsInfo = function(){
        return this.fullName + " " + "belongs these cars:" + this.getCarInfo();
      };
}



let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});
