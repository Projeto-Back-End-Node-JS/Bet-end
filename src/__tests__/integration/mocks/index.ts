import { IUserLogin, IUserRequest } from "../../../interfaces/user";

export const mockedUser: IUserRequest = {
  name: "Julio",
  email: "julio@mail.com",
  isAdm: false,
  password: "123456",
};

export const mockedAdmin: IUserRequest = {
  name: "Gabriel",
  email: "gabriel@mail.com",
  isAdm: true,
  password: "123456",
};

export const mockedUserLogin: IUserLogin = {
  email: "julio@mail.com",
  password: "123456",
};

export const mockedAdminLogin: IUserLogin = {
  email: "gabriel@mail.com",
  password: "123456",
};
