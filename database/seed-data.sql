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
VALUES (2, "tourist");
INSERT INTO user_types (user_type_id, user_type)
VALUES (3, "local");

INSERT INTO users (first_name, last_name, email, password, user_type_id, bio, profile_picture_url, hobbies, additonal_info)
VALUES 
("Ahmet", "Yılmaz", "ahmet.yilmaz@example.com", "hashed_password_1", 1, "Admin user for TRNC tourism app.", "https://example.com/profiles/ahmet.jpg", "Hiking, Photography", "Loves exploring historical sites."),
("Maria", "Andreou", "maria.andreou@example.com", "hashed_password_2", 2, "Tourist visiting TRNC for the first time.", "https://example.com/profiles/maria.jpg", "Reading, Traveling", "Interested in eco-friendly travel."),
("Mehmet", "Kaya", "mehmet.kaya@example.com", "hashed_password_3", 3, "Local guide in Kyrenia.", "https://example.com/profiles/mehmet.jpg", "Chess, History", "Knows all the hidden gems in TRNC.");


INSERT INTO events (created_by, is_verified, title, description, event_date, event_time, location, picture_url, age_limit, additonal_info)
VALUES 
(2, TRUE, "Kyrenia Folk Dance Festival", "Experience traditional Turkish Cypriot folk dances.", "2023-12-15", "18:00:00", "Kyrenia Harbor", "https://example.com/events/kyrenia-folk-dance.jpg", 0, "Free entry for all ages."),
(3, TRUE, "Bellapais Music Festival", "Annual music festival at Bellapais Abbey.", "2024-05-20", "20:00:00", "Bellapais Abbey", "https://example.com/events/bellapais-music.jpg", 12, "Bring your own seating."),
(2, FALSE, "Nicosia Food Tour", "Explore the best local cuisine in Nicosia.", "2023-11-25", "10:00:00", "Nicosia Old Town", "https://example.com/events/nicosia-food.jpg", 0, "Vegetarian options available.");


INSERT INTO landmarks (landmark_name, description, history, location, picture_urls, rating, reviews, open_hours, key_notes, additional_info, has_3D_model, 3D_model_url)
VALUES 
("Kyrenia Castle", "A historic castle overlooking the harbor.", "Built in the 7th century by the Byzantines.", "Kyrenia", '["https://example.com/landmarks/kyrenia-castle-1.jpg", "https://example.com/landmarks/kyrenia-castle-2.jpg"]', 4.7, '[{"review": "Amazing views!", "rating": 5}]', '{"Monday": "9:00-17:00", "Tuesday": "9:00-17:00", "Wednesday": "9:00-17:00", "Thursday": "9:00-17:00", "Friday": "9:00-17:00", "Saturday": "9:00-17:00", "Sunday": "Closed"}', '["Guided tours available.", "Wear comfortable shoes."]', "One of the most iconic landmarks in TRNC.", TRUE, "https://example.com/3d-models/kyrenia-castle.glb"),
("Bellapais Abbey", "A stunning Gothic abbey with panoramic views.", "Built in the 13th century by the Lusignans.", "Bellapais", '["https://example.com/landmarks/bellapais-abbey-1.jpg", "https://example.com/landmarks/bellapais-abbey-2.jpg"]', 4.5, '[{"review": "Peaceful and beautiful.", "rating": 4.5}]', '{"Monday": "9:00-18:00", "Tuesday": "9:00-18:00", "Wednesday": "9:00-18:00", "Thursday": "9:00-18:00", "Friday": "9:00-18:00", "Saturday": "9:00-18:00", "Sunday": "9:00-18:00"}', '["Great for photography.", "Visit during sunset for the best views."]', "A must-visit for history lovers.", TRUE, "https://example.com/3d-models/bellapais-abbey.glb"),
("St. Hilarion Castle", "A fairy-tale castle with breathtaking views.", "Built in the 10th century as a monastery.", "Kyrenia", '["https://example.com/landmarks/st-hilarion-1.jpg", "https://example.com/landmarks/st-hilarion-2.jpg"]', 4.8, '[{"review": "Feels like stepping into a storybook.", "rating": 5}]', '{"Monday": "8:00-17:00", "Tuesday": "8:00-17:00", "Wednesday": "8:00-17:00", "Thursday": "8:00-17:00", "Friday": "8:00-17:00", "Saturday": "8:00-17:00", "Sunday": "8:00-17:00"}', '["Wear comfortable shoes for climbing.", "Bring water and snacks."]', "Inspired Disney's Snow White castle.", TRUE, "https://example.com/3d-models/st-hilarion.glb");


INSERT INTO transportation_options (transportation_option_id, transportation_option)
VALUES 
(1, "Bus"),
(2, "Taxi"),
(3, "Car Rental");


INSERT INTO bus_services (transportation_option_id, name, description, routes, rating, key_notes, website, phone_number, email, headquarter_location, bus_service_picture, additional_info)
VALUES 
(1, "Lefkoşa-Kyrenia Bus Service", "Daily bus service between Nicosia and Kyrenia.", '[1, 2]', 4.2, '["Affordable fares.", "Air-conditioned buses."]', "https://lefkosakyreniabus.com", "+90 392 123 4567", "info@lefkosakyreniabus.com", "Nicosia", "https://example.com/bus-services/lefkosakyrenia.jpg", "Operates from 6:00 AM to 10:00 PM."),
(1, "Famagusta-Kyrenia Bus Service", "Regular bus service between Famagusta and Kyrenia.", '[3, 4]', 4.0, '["Comfortable seating.", "Frequent departures."]', "https://famagustakyreniabus.com", "+90 392 234 5678", "info@famagustakyreniabus.com", "Famagusta", "https://example.com/bus-services/famagustakyrenia.jpg", "Operates from 7:00 AM to 9:00 PM.");


INSERT INTO cities (name, location_latitute, location_longitude)
VALUES 
("Nicosia", 35.1856, 33.3823),
("Kyrenia", 35.3417, 33.3167),
("Famagusta", 35.1250, 33.9500),
("Bellapais", 35.3036, 33.3536);



INSERT INTO routes (route_name, departure_city_id, arrival_city_id)
VALUES 
("Nicosia to Kyrenia", 1, 2),
("Kyrenia to Nicosia", 2, 1),
("Famagusta to Kyrenia", 3, 2),
("Kyrenia to Famagusta", 2, 3);


INSERT INTO bus_trips (route_id, bus_service_id, departure_time, arrival_time, total_seats_available, price, is_special, is_summer_season_dependent, additional_info)
VALUES 
(1, 1, "08:00:00", "09:00:00", 40, 10.0, FALSE, FALSE, "Direct route with no stops."),
(2, 1, "18:00:00", "19:00:00", 40, 10.0, FALSE, FALSE, "Direct route with no stops."),
(3, 2, "09:00:00", "10:30:00", 40, 15.0, FALSE, FALSE, "Scenic route with coastal views.");