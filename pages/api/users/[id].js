import User from "../../../database/schema";

export default async function handler(request, response) {
  const foundUser = await User.findOne({id: +request.query.id});

  if (!foundUser) {
    return response.json({
      statusCode: 404,
      message: `user with id ${request.query.id} not found`
    });
  }

  response.status(200).json(foundUser);
}