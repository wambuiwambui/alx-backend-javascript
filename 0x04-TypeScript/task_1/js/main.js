var Teacher = /** @class */ (function () {
    function Teacher(attributes) {
        this.firstName = attributes.firstName;
        this.lastName = attributes.lastName;
        this.fullTimeEmployee = attributes.fullTimeEmployee;
        this.yearsOfExperience = attributes.yearsOfExperience;
        this.location = attributes.location;
        for (var key in attributes) {
            if (key !== "firstName" &&
                key !== "lastName" &&
                key !== "fullTimeEmployee" &&
                key !== "yearsOfExperience" &&
                key !== "location") {
                this[key] = attributes[key];
            }
        }
    }
    return Teacher;
}());
var teacher3Data = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
};
var teacher3 = new Teacher(teacher3Data);
console.log(teacher3);
var teacher3Instance = new Teacher(teacher3Data);
console.log(teacher3Instance);
