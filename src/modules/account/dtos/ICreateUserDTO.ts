class ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  isAdmin?: boolean;
  created_at?: Date;
}

export { ICreateUserDTO };
