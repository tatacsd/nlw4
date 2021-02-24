// Why use it:
// IDE SMART -> ex.: regonise the type of the user in the function

type User = {
  name: string;
  age: string;
  address: {
    city: string;
    state: string;
  }
}


function showUserInfo(user: User) {
  return `Welcome, ${user.name} - ${user.age}. City: ${user.address.city}, ${user.address.state}`
}