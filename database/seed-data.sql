/* Initialize DB with some seed data */
USE `akdenizin_incisi_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

-- INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
-- VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SECRET_SALT"), 224), 1, "2020-11-20 12:00:00");
-- INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
-- VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SECRET_SALT"), 224), 2, "2020-11-20 12:00:00");
-- INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
-- VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SECRET_SALT"), 224), 2, "2020-11-20 12:00:00");

-- INSERT INTO password_recovery_requests(shortcode,requested_email,expiry_date,created_at)
-- VALUES ("321","ahmet@akinsql.com","2020-09-20 12:30:00","2022-01-03 12:30:00");