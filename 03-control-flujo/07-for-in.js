let user = {
  id: 1,
  name: "kalichhe",
  age: 22,
};

for (let prop in user) {
  console.log(prop, ":", user[prop]);
}
