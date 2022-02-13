export const createMessage = (title, body, { duration = null, type = "" }) => {
  return {
    title,
    body,
    duration,
    type,
    expires: new Date().getTime() + (duration || 60) * 1000,
  };
};
