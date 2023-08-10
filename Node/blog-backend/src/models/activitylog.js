// src/models/activitylog.js
import mongoose, { Schema } from 'mongoose';

const ActivityLogSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  loginTime: { type: Date, required: true },
  logoutTime: { type: Date, required: true },
});

const ActivityLog = mongoose.model('ActivityLog', ActivityLogSchema);

export default ActivityLog;
