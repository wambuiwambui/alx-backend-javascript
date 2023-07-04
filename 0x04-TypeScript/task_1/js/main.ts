class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  
    constructor(attributes: Teacher) {
      this.firstName = attributes.firstName;
      this.lastName = attributes.lastName;
      this.fullTimeEmployee = attributes.fullTimeEmployee;
      this.yearsOfExperience = attributes.yearsOfExperience;
      this.location = attributes.location;
  
      for (const key in attributes) {
        if (
          key !== "firstName" &&
          key !== "lastName" &&
          key !== "fullTimeEmployee" &&
          key !== "yearsOfExperience" &&
          key !== "location"
        ) {
          this[key] = attributes[key];
        }
      }
    }
  }
  
  const teacher3Data = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
  };
  
  const teacher3 = new Teacher(teacher3Data);
  
  console.log(teacher3);
  
  const teacher3Instance = new Teacher(teacher3Data);
  
  console.log(teacher3Instance);
  
  
  
  