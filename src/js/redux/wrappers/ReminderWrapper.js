import { connect } from "react-redux";

import ReminderContainer from "../../components/containers/reminder/ReminderContainer";
import {
  addReminder,
  updateReminder,
  deleteReminder
} from "../modules/reminders";

const mapStateToProps = ({ remindersModule: { reminders, reminder } }) => ({
  reminders,
  reminder
});

const mapDispatchToProps = dispatch => ({
  addReminder: text => dispatch(addReminder(text)),
  updateReminder: text => dispatch(updateReminder(text)),
  deleteReminder: text => dispatch(deleteReminder(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderContainer);
