import { UserService } from '../services/user.service.js';

export class UserController {
  static async register(req, res) {
    try {
      const user = await UserService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const token = await UserService.login(req.body);
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
