// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class UsersController {

  async register ({ request, response}) {
    const data = request.only(['email', 'password'])
    const user = await User.create(data)
    return response.created(user)
  }
  async login ({ request, response, auth }) {
    const data = request.only(['email', 'password'])
    const token = await auth.use('api').attempt(data.email, data.password)
    return response.ok({ token })
  }

}
