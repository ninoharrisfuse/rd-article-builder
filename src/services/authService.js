export const getAuthToken = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'xiZyZeMJY2r-pwMZsXtc';
  }
  return document.querySelector('[name="auth-token"]').content;
};

export default getAuthToken;
