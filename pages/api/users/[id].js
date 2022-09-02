import {db} from "../../../db/users";

export default function handler(request, response) {
  const foundUser = db.users.find(user => user.id === +request.query.id);

  // if (!foundUser) {
  //   return response.json({
  //     statusCode: 404,
  //     message: `user with id ${request.query.id} not found`
  //   });
  // }

  response.status(200).json(foundUser);
}