export const roles = {
  admin: {
    read: true,
    write: true,
    delete: true,
    handleUser: true,
  },
  editor: {
    read: true,
    write: true,
    delete: true,
    handleUser: false,
  },
  student: {
    write: true,
    read: true,
    delete: false,
    handleUser: false,
  },
};
export const anonimous = {
  write: false,
  read: true,
  delete: false,
  handleUser: false,
};
