import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Andrei Popescu',
    email: 'andrei@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Trif',
    email: 'johnt@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ana Popescu',
    email: 'Ana@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
