import { hashSync } from 'bcrypt';
import { randomUUID } from 'crypto';

export const adminSeed = {
  id: randomUUID(),
  name: 'admin',
  login: 'admin',
  password: hashSync('admin', 10),
};
