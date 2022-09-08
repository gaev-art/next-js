import {connection} from "../../../database/connection";
import User from "../../../database/schema";


export default async function handler(request, response) {
  try {
    await connection();
    const users = await User.find();
    return response.status(200).json(users);
  } catch (error) {
    return response.json({
      message: new Error(error).message,
      success: false,
    });
  }

}