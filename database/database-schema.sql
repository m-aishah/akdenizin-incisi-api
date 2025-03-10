USE `akdenizin_incisi_api_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-database-schema",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE

-- user types: to keep track of user types
DROP TABLE IF EXISTS user_types;
CREATE TABLE user_types(
  user_type_id int AUTO_INCREMENT PRIMARY KEY,
  user_type VARCHAR(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- users: to keep track of users
DROP TABLE IF EXISTS users;
CREATE TABLE users(
  user_id int AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(500) NOT NULL,
  user_type_id int NOT NULL,
  bio TEXT,
  profile_picture_url VARCHAR(500),
  hobbies TEXT,
  additonal_info TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_type_id) REFERENCES user_types(user_type_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;


DROP TABLE IF EXISTS password_recovery_requests;
CREATE TABLE password_recovery_requests(
	password_recovery_request_id int AUTO_INCREMENT PRIMARY KEY,
  requested_email VARCHAR(150) NOT NULL,
	shortcode VARCHAR(40) NOT NULL UNIQUE,
  recovered_at DATETIME,
  expiry_date DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (requested_email) REFERENCES users(email)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


-- Events
-- events: to keep track of events
DROP TABLE IF EXISTS events;
CREATE TABLE events(
  event_id int AUTO_INCREMENT PRIMARY KEY,
  created_by int NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  title VARCHAR(50) NOT NULL,
  description TEXT,
  event_date DATETIME NOT NULL,
  event_time TIME NOT NULL,
  location VARCHAR(50) NOT NULL,
  picture_url VARCHAR(500),
  age_limit int,
  additonal_info TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  FOREIGN KEY (created_by) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- event_likes: to keep track of number of likes on an event and which user liked which event.
DROP TABLE IF EXISTS event_likes;
CREATE TABLE event_likes(
  event_like_id int AUTO_INCREMENT PRIMARY KEY,
  liked_by int NOT NULL,
  event_id int NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (liked_by) REFERENCES users(user_id),
  FOREIGN KEY (event_id) REFERENCES events(event_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;


DROP TABLE IF EXISTS event_moderation;
CREATE TABLE event_moderation(
  event_moderation_id int AUTO_INCREMENT PRIMARY KEY,
  event_id int NOT NULL,
  moderated_by int NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  moderation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(event_id),
  FOREIGN KEY (moderated_by) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Chatbot
-- system_prompts: to keep track of system prompts for users 
DROP TABLE IF EXISTS system_prompts;
CREATE TABLE system_prompts(
  system_prompt_id int AUTO_INCREMENT PRIMARY KEY,
  is_custom BOOLEAN DEFAULT TRUE,
  created_for int NOT NULL,
  prompt_text TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  FOREIGN KEY (created_for) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- conversations: to keep track of conversations/chats with chatbot.
DROP TABLE IF EXISTS conversations;
CREATE TABLE conversations(
  conversation_id int AUTO_INCREMENT PRIMARY KEY,
  created_by int NOT NULL,
  messages JSON,
  system_prompt_id int,
  is_deleted BOOLEAN DEFAULT FALSE
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  FOREIGN KEY (created_by) REFERENCES users(user_id),
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

-- itinerary: to keep track of itineraries created by users
DROP TABLE IF EXISTS itinerary;
CREATE TABLE itinerary(
  itinerary_id int AUTO_INCREMENT PRIMARY KEY,
  created_by int NOT NULL,
  conversation_id int NOT NULL,
  title VARCHAR(50) NOT NULL,
  description TEXT,
  itinerary_plan JSON,
  is_favorite BOOLEAN DEFAULT FALSE,
  proposed_start_date DATETIME,
  proposed_end_date DATETIME,
  picture_url VARCHAR(500),
  is_private BOOLEAN DEFAULT TRUE,
  is_deleted BOOLEAN DEFAULT FALSE
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  FOREIGN KEY (created_by) REFERENCES users(user_id),
  FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;


-- Augmented Reality
DROP TABLE IF EXISTS landmarks;
CREATE TABLE landmarks(
  landmark_id int AUTO_INCREMENT PRIMARY KEY,
  landmark_name VARCHAR(50) NOT NULL,
  description TEXT,
  history TEXT,
  location VARCHAR(50) NOT NULL,
  picture_urls JSON,
  rating FLOAT,
  reviews JSON,
  open_hours JSON,
  key_notes JSON,
  additional_info TEXT,
  has_3D_model BOOLEAN DEFAULT FALSE,
  3D_model_url VARCHAR(500),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS landmark_reviews;
CREATE TABLE landmark_reviews(
  review_id int AUTO_INCREMENT PRIMARY KEY,
  landmark_id int NOT NULL,
  reviewed_by int NOT NULL,
  review_text TEXT NOT NULL,
  review_rating FLOAT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (landmark_id) REFERENCES landmarks(landmark_id),
  FOREIGN KEY (reviewed_by) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS landmark_ratings;
CREATE TABLE landmark_ratings(
  rating_id int AUTO_INCREMENT PRIMARY KEY,
  landmark_id int NOT NULL,
  rated_by int NOT NULL,
  rating FLOAT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (landmark_id) REFERENCES landmarks(landmark_id),
  FOREIGN KEY (rated_by) REFERENCES users(user_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;


-- Transportation
DROP TABLE IF EXISTS transportation_options;
CREATE TABLE transportation_options(
  transportation_option_id int AUTO_INCREMENT PRIMARY KEY,
  transportation_option VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS bus_services;
CREATE TABLE bus_services(
  transportation_option_id
  bus_service_id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT,
  routes JSON, -- list of roue ids
  rating FLOAT,
  key_notes JSON,
  website VARCHAR(500),
  phone_number VARCHAR(20),
  email VARCHAR(50),
  headquarter_location VARCHAR(50) NOT NULL,
  bus_service_picture URL VARCHAR(500),
  additional_info TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  FOREIGN KEY (transportation_option_id) REFERENCES transportation_options(transportation_option_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS taxi_services;
CREATE TABLE taxi_services(
  transportation_option_id
  taxi_service_id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT,
  rating FLOAT,
  key_notes JSON,
  website VARCHAR(500),
  phone_number VARCHAR(20),
  email VARCHAR(50),
  headquarter_location VARCHAR(50) NOT NULL,
  picture URL VARCHAR(500),
  additional_info TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  FOREIGN KEY (transportation_option_id) REFERENCES transportation_options(transportation_option_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS car_rental_services;
CREATE TABLE car_rental_services(
  transportation_option_id
  car_rental_service_id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT,
  rating FLOAT,
  key_notes JSON,
  website VARCHAR(500),
  phone_number VARCHAR(20),
  email VARCHAR(50),
  headquarter_location VARCHAR(50) NOT NULL,
  picture URL VARCHAR(500),
  additional_info TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  FOREIGN KEY (transportation_option_id) REFERENCES transportation_options(transportation_option_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS transportation_ratings;
CREATE TABLE transportation_ratings(
  rating_id int AUTO_INCREMENT PRIMARY KEY,
  transportation_option_id int NOT NULL,
  car_rental_service_id int,
  taxi_service_id int,
  bus_service_id int,
  rated_by int NOT NULL,
  rating FLOAT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (transportation_option_id) REFERENCES transportation_options(transportation_option_id),
  FOREIGN KEY (rated_by) REFERENCES users(user_id)
  FOREIGN KEY (car_rental_service_id) REFERENCES car_rental_services(car_rental_service_id)
  FOREIGN KEY (taxi_service_id) REFERENCES taxi_services(taxi_service_id)
  FOREIGN KEY (bus_service_id) REFERENCES bus_services(bus_service_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS cities;
CREATE TABLE cities(
  city_id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location_latitute FLOAT NOT NULL,
  location_longitude FLOAT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS routes;
CREATE TABLE routes(
  route_id int AUTO_INCREMENT PRIMARY KEY,
  route_name VARCHAR(50) NOT NULL,
  departure_city_id int NOT NULL,
  arrival_city_id int NOT NULL,
  FOREIGN KEY (departure_city_id) REFERENCES cities(city_id),
  FOREIGN KEY (arrival_city_id) REFERENCES cities(city_id),
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS bus_trips;
CREATE TABLE bus_trips(
  trip_id int AUTO_INCREMENT PRIMARY KEY,
  route_id int NOT NULL,
  bus_service_id int NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  total_seats_available int,
  price FLOAT NOT NULL,
  is_special BOOLEAN DEFAULT FALSE, -- only true if trip is a one time occurence or not regular.
  is_summer_season_dependent BOOLEAN DEFAULT FALSE, -- trpis that only occur during the summer
  is_deleted BOOLEAN DEFAULT FALSE,
  additional_info TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  deleted_at DATETIME,
  FOREIGN KEY (route_id) REFERENCES routes(route_id),
  FOREIGN KEY (bus_service_id) REFERENCES bus_services(bus_service_id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE utf8mb4_unicode_ci;