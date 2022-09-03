import {db} from "../../../db/users";

export default function handler(request, response) {
  response.status(200).json(db.users)
}