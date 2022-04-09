import users, { getPremiumUsers } from "./data";
import { styleBody, addTitle, contact } from "./dom";

styleBody()
addTitle('hello world')
console.log(contact)

const result = getPremiumUsers(users)
console.log(result)