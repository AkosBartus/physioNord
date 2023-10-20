const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
import { Request, Response } from 'express';
const path = require('path')
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors())

app.use(bodyParser.json());

const databaseFilePath = path.join(__dirname, '..', 'database.json')

app.post('/api/register', (req: Request, res: Response) => {
  const { email, password } = req.body

  const usersData = fs.readFileSync(databaseFilePath, 'utf8')
  const users = JSON.parse(usersData)

  if (users.find((user: any) => user.email === email)) {
    return res.status(400).json({ message: 'Email is already used'})
  }

  const newUser = { email, password }
  users.push(newUser)

  fs.writeFileSync(databaseFilePath, JSON.stringify(users), 'utf8')

  res.status(200).json({ message: 'Registration was success'})
}); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
