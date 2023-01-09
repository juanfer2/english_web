interface userSession {
  id: string | number;
  token: string;
}

export const setSession = (user: userSession) => {
  const id: string = user.id.toString();
  localStorage.setItem('id', id);
  localStorage.setItem('token_user', user.token);
};

export const logout = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('token_user');
};

export const isAuth = () => {
  if (
    localStorage.getItem('token_user') === undefined ||
    localStorage.getItem('token_user') === null
  ) {
    return false;
  }
  return true;
};
