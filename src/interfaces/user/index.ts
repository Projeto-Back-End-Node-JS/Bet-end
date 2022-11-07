export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}
