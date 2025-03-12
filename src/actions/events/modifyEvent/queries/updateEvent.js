const {
  submitQuery,
  sql,
  sqlReduce,
  sqlValueOrNull
} = require("~root/lib/database");

const NO_UPDATE = Symbol("NO_UPDATE");

const updateEvent = async ({
  eventId,
  title = NO_UPDATE,
  description = NO_UPDATE,
  date = NO_UPDATE,
  time = NO_UPDATE,
  location = NO_UPDATE,
  pictureUrl = NO_UPDATE,
  ageLimit = NO_UPDATE,
  additionalInfo = NO_UPDATE,
  isVerified = NO_UPDATE,
  updatedAt = NO_UPDATE
}) => {
  const updates = [];
  if (title !== NO_UPDATE) {
    updates.push(sql`title = ${title}`);
  }
  if (description !== NO_UPDATE) {
    updates.push(sql`description = ${description}`);
  }
  if (date !== NO_UPDATE) {
    updates.push(sql`date = ${date}`);
  }
  if (time !== NO_UPDATE) {
    updates.push(sql`time = ${time}`);
  }
  if (location !== NO_UPDATE) {
    updates.push(sql`location = ${location}`);
  }
  if (pictureUrl !== NO_UPDATE) {
    updates.push(sql`picture_url = ${sqlValueOrNull(pictureUrl)}`);
  }
  if (ageLimit !== NO_UPDATE) {
    updates.push(sql`age_limit = ${sqlValueOrNull(ageLimit)}`);
  }
  if (additionalInfo !== NO_UPDATE) {
    updates.push(sql`additional_info = ${sqlValueOrNull(additionalInfo)}`);
  }
  if (isVerified !== NO_UPDATE) {
    updates.push(sql`is_verified = ${isVerified}`);
  }
  if (updatedAt !== NO_UPDATE) {
    updates.push(sql`updated_at = ${updatedAt}`);
  }

  if (updates.length !== 0) {
    await submitQuery`
                UPDATE events
                SET ${sqlReduce(updates)}
                WHERE event_id = ${eventId}
            `;
  }

  return Promise.resolve();
};

module.exports = updateEvent;
