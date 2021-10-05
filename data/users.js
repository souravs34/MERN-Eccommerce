import bcryptjs from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Johe@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
  },
];

export default users;
