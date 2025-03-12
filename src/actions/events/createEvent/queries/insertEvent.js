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
  picture_url,
  age_limit,
  additional_info,
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
        ${sqlValueOrNull(picture_url)},
        ${sqlValueOrNull(age_limit)},
        ${sqlValueOrNull(additional_info)}
      );
    `;

module.exports = getInsertId(insertEvent);
