// call

type User = {
  name: string;
  phn: number;
  isActive: boolean;
};

const displayDetails = (name: string, phn: number, isActive: boolean) => {
  console.log(`User : ${name} with ${phn} is ${isActive}`);
};

const user: User = {
  name: "Bharath",
  phn: 9003045843,
  isActive: false,
};

displayDetails.call(null, user.name, user.phn, user.isActive);

displayDetails.apply(null, [user.name, user.phn, user.isActive]);

const boundFunction = displayDetails.bind(
  null,
  user.name,
  user.phn,
  user.isActive
);
boundFunction();

function displayDetailsThis(this: User, isActive: boolean) {
  console.log(`User : ${this.name} with ${this.phn} is ${isActive}`);
}

// call, apply, bind with `this` set to `user`
displayDetailsThis.call(user, user.isActive);
displayDetailsThis.apply(user, [user.isActive]);

const boundToUser = displayDetailsThis.bind(user, user.isActive);
boundToUser();
