import { IPoolRequest, IPoolUpdate } from "../../../interfaces/pools";
import { IUserLogin, IUserRequest } from "../../../interfaces/user";

export const mockedUser: IUserRequest = {
  name: "Julio",
  email: "julio@mail.com",
  isAdm: false,
  password: "123456",
};

export const mockedUser2: IUserRequest = {
  name: "Julia",
  email: "julia@mail.com",
  isAdm: false,
  password: "123456",
};

export const mockedAdmin: IUserRequest = {
  name: "Gabriel",
  email: "gabriel@mail.com",
  isAdm: true,
  password: "123456",
};

export const mockedAdminDelete: IUserRequest = {
  name: "fernando",
  email: "fernando@mail.com",
  isAdm: true,
  password: "123456",
};

export const mockedAdminDeleteLogin: IUserLogin = {
  email: "fernando@mail.com",
  password: "123456",
};

export const mockedUserLogin: IUserLogin = {
  email: "julio@mail.com",
  password: "123456",
};

export const mockedUser2Login: IUserLogin = {
  email: "julia@mail.com",
  password: "123456",
};

export const mockedAdminLogin: IUserLogin = {
  email: "gabriel@mail.com",
  password: "123456",
};

export const mockedPool: IPoolRequest = {
  name: "Flamenguistas top",
  owner: "",
};

export const mockedPoolWithoutId: IPoolRequest = {
  name: "Flamenguista",
  owner: "",
};

export const mockedPooUpdate: IPoolUpdate = {
  name: "Flamenguista",
};

export const mockedPoolDelete: IPoolRequest = {
  name: "Flamenguistas nao passarao",
  owner: "",
};
