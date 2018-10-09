const REMINDER_ADD = "REMINDER_ADD";
const REMINDER_DELETE = "REMINDER_DELETE";
const REMINDER_UPDATE = "REMINDER_UPDATE";

export const addReminder = text => {
  return {
    type: REMINDER_ADD,
    payload: { text, id: Math.random() }
  };
};

export const deleteReminder = id => {
  return {
    type: REMINDER_DELETE,
    payload: id
  };
};

export const updateReminder = text => ({
  type: REMINDER_UPDATE,
  payload: text
});

const defaultState = {
  reminders: [],
  reminder: ""
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REMINDER_ADD: {
      return { ...state, reminders: [...state.reminders, payload] };
    }
    case REMINDER_DELETE: {
      return {
        ...state,
        reminders: state.reminders.filter(reminder => reminder.id !== payload)
      };
    }
    case REMINDER_UPDATE: {
      return { ...state, reminder: payload };
    }
    default:
      return state;
  }
};

export default reducer;
