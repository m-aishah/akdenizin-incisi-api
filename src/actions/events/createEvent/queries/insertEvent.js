const {
  submitQuery,
  getInsertId,
  sqlValueOrNull
} = require("~root/lib/database");

const insertEvent = async ({
  title,
  description,
  date,
  time,
  location,
  pictureUrl,
  ageLimit,
  additionalInfo,
  userId
}) =>
  submitQuery`
      INSERT INTO events (
        created_by,
        title,
        description,
        date,
        time,
        location,
        picture_url,
        age_limit,
        additional_info
      )
      VALUES (
        ${userId},
        ${title},
        ${description},
        ${date},
        ${time},
        ${location},
        ${sqlValueOrNull(pictureUrl)},
        ${sqlValueOrNull(ageLimit)},
        ${sqlValueOrNull(additionalInfo)}
      );
    `;

module.exports = getInsertId(insertEvent);
