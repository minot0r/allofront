export const ADD_NOTIFICATION = "notification/AddNotification";

const initialState = {
  notifications: [],
};

export const notificationReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_NOTIFICATION:
      let filteredNotifications = state.notifications.filter(
        (notification) => notification.expires > new Date().getTime()
      );
      state = {
        notifications: [...filteredNotifications, action.payload],
      };
      break;
  }
  return state;
};
