import { Request, Response } from 'express';

import ShowUserProfileService from '@modules/users/services/ShowUserProfileService';
import UpdateUserProfileService from '@modules/users/services/UpdateUserProfileService';

const showProfile = new ShowUserProfileService();
const updateProfile = new UpdateUserProfileService();

class ProfileController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;

    const user = await showProfile.execute({ userId });

    user.password = '';

    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.user;
    const { firstName, lastName, phone, email, oldPassword, password } = req.body;

    const user = await updateProfile.execute({
      userId,
      firstName,
      lastName,
      phone,
      email,
      oldPassword,
      password,
    });

    user.password = '';

    return res.json(user);
  }
}

export default ProfileController;