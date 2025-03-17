/* Initialize DB with comprehensive seed data */
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

-- ============= USER MANAGEMENT =============

-- User Types
INSERT INTO user_types (user_type_id, user_type)
VALUES 
(1, "admin"),
(2, "tourist"),
(3, "local"),
(4, "guide"),
(5, "business_owner");

-- Users (Existing + New)
INSERT INTO users (first_name, last_name, email, password, user_type_id, bio, profile_picture_url, hobbies, additional_info)
VALUES 
-- Existing users
("Ahmet", "Yılmaz", "ahmet.yilmaz@example.com", "hashed_password_1", 1, "Admin user for TRNC tourism app.", "https://example.com/profiles/ahmet.jpg", "Hiking, Photography", "Loves exploring historical sites."),
("Maria", "Andreou", "maria.andreou@example.com", "hashed_password_2", 2, "Tourist visiting TRNC for the first time.", "https://example.com/profiles/maria.jpg", "Reading, Traveling", "Interested in eco-friendly travel."),
("Mehmet", "Kaya", "mehmet.kaya@example.com", "hashed_password_3", 3, "Local guide in Kyrenia.", "https://example.com/profiles/mehmet.jpg", "Chess, History", "Knows all the hidden gems in TRNC."),
-- New users
("Elena", "Papadopoulos", "elena.papa@example.com", "hashed_password_4", 2, "Greek tourist interested in historical sites.", "https://example.com/profiles/elena.jpg", "Archeology, Swimming", "First-time visitor to Cyprus."),
("Mustafa", "Özkan", "mustafa.ozkan@example.com", "hashed_password_5", 3, "Local restaurant owner in Famagusta.", "https://example.com/profiles/mustafa.jpg", "Cooking, Fishing", "Family has lived in Famagusta for generations."),
("Sarah", "Johnson", "sarah.j@example.com", "hashed_password_6", 2, "American tourist on a Mediterranean tour.", "https://example.com/profiles/sarah.jpg", "Photography, Wine tasting", "Travel blogger documenting her journey."),
("Ali", "Hassan", "ali.hassan@example.com", "hashed_password_7", 4, "Professional tour guide specializing in historical tours.", "https://example.com/profiles/ali.jpg", "Ancient history, Languages", "Speaks five languages fluently."),
("Sophia", "Economou", "sophia.eco@example.com", "hashed_password_8", 5, "Owner of a boutique hotel in Kyrenia.", "https://example.com/profiles/sophia.jpg", "Interior design, Gardening", "Passionate about sustainable tourism."),
("Ibrahim", "Demir", "ibrahim.demir@example.com", "hashed_password_9", 3, "Local fisherman in Kyrenia.", "https://example.com/profiles/ibrahim.jpg", "Fishing, Boating", "Third-generation fisherman with extensive knowledge of local waters.");

-- Password Recovery Requests
INSERT INTO password_recovery_requests (requested_email, shortcode, expiry_date)
VALUES 
("maria.andreou@example.com", "A7B9C3", DATE_ADD(NOW(), INTERVAL 24 HOUR)),
("mehmet.kaya@example.com", "X2Y5Z8", DATE_ADD(NOW(), INTERVAL 24 HOUR)),
("elena.papa@example.com", "P4Q7R1", DATE_ADD(NOW(), INTERVAL 24 HOUR)),
("sarah.j@example.com", "L9M2N6", DATE_ADD(NOW(), INTERVAL 24 HOUR));

-- ============= EVENT MANAGEMENT =============

-- Events (Existing + New)
INSERT INTO events (created_by, is_verified, title, description, date, time, location, picture_url, age_limit, additional_info)
VALUES 
-- Existing events
(2, TRUE, "Kyrenia Folk Dance Festival", "Experience traditional Turkish Cypriot folk dances.", "2023-12-15", "18:00:00", "Kyrenia Harbor", "https://example.com/events/kyrenia-folk-dance.jpg", 0, "Free entry for all ages."),
(3, TRUE, "Bellapais Music Festival", "Annual music festival at Bellapais Abbey.", "2024-05-20", "20:00:00", "Bellapais Abbey", "https://example.com/events/bellapais-music.jpg", 12, "Bring your own seating."),
(2, FALSE, "Nicosia Food Tour", "Explore the best local cuisine in Nicosia.", "2023-11-25", "10:00:00", "Nicosia Old Town", "https://example.com/events/nicosia-food.jpg", 0, "Vegetarian options available."),
-- New events
(4, TRUE, "Famagusta Medieval Festival", "Step back in time with this annual medieval festival featuring costumes, food, and performances.", "2024-06-10", "12:00:00", "Famagusta Old City", "https://example.com/events/famagusta-medieval.jpg", 0, "Historical reenactments throughout the day."),
(5, TRUE, "Mediterranean Wine Tasting", "Sample wines from across the Mediterranean region with expert sommeliers.", "2024-04-15", "19:00:00", "Kyrenia Castle", "https://example.com/events/wine-tasting.jpg", 18, "Ticket includes tasting of 8 wines and appetizers."),
(7, FALSE, "Cypriot Cooking Workshop", "Learn to prepare traditional Cypriot dishes with local ingredients.", "2024-03-30", "17:00:00", "Nicosia Cultural Center", "https://example.com/events/cooking-workshop.jpg", 16, "Ingredients and recipes provided."),
(1, TRUE, "St. Hilarion Sunset Photography Tour", "Capture the stunning castle at golden hour with photography experts.", "2024-07-05", "18:30:00", "St. Hilarion Castle", "https://example.com/events/photo-tour.jpg", 12, "Bring your own camera equipment."),
(8, TRUE, "Kyrenia Harbor Boat Festival", "Annual celebration of maritime heritage with decorated boats and seafood.", "2024-08-12", "16:00:00", "Kyrenia Harbor", "https://example.com/events/boat-festival.jpg", 0, "Fireworks display at 9:00 PM.");

-- Event Likes
INSERT INTO event_likes (liked_by, event_id)
VALUES 
(2, 1),
(3, 1),
(4, 1),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 4),
(2, 4),
(3, 5),
(4, 6),
(5, 7),
(6, 8);

-- Event Moderation
INSERT INTO event_moderation (event_id, moderated_by, is_verified, moderation_date)
VALUES 
(1, 1, TRUE, "2023-11-20 14:30:00"),
(2, 1, TRUE, "2023-11-22 10:15:00"),
(3, 1, FALSE, "2023-11-23 09:45:00"),
(4, 1, TRUE, "2023-11-25 11:20:00"),
(5, 1, TRUE, "2023-11-26 16:30:00"),
(6, 1, FALSE, "2023-11-27 13:10:00"),
(7, 1, TRUE, "2023-11-28 15:45:00"),
(8, 1, TRUE, "2023-11-29 12:00:00");

-- ============= CHATBOT SYSTEM =============

-- System Prompts
INSERT INTO system_prompts (is_custom, created_for, prompt_text)
VALUES 
(FALSE, 1, "You are a helpful tourism assistant for Northern Cyprus."),
(TRUE, 2, "You are Maria's personal travel guide focusing on historical sites and local cuisine in Northern Cyprus."),
(TRUE, 4, "You are Elena's adventure planner focusing on beaches and outdoor activities in Northern Cyprus."),
(FALSE, 5, "You are a helpful tourism assistant specializing in accommodations and transportation in Northern Cyprus."),
(TRUE, 6, "You are Sarah's photography guide focusing on scenic locations and best times for photography in Northern Cyprus."),
(TRUE, 3, "You are Mehmet's insider guide focusing on hidden gems and authentic local experiences in Northern Cyprus.");

-- Conversations
INSERT INTO conversations (conversation_title, created_by, messages, system_prompt_id)
VALUES 
("Historical Sites in Kyrenia", 2, '[{"role": "user", "content": "Can you recommend historical sites in Kyrenia?"}, {"role": "assistant", "content": "Certainly! Kyrenia Castle is a must-visit historical site, offering stunning views of the harbor and housing a shipwreck museum. Bellapais Abbey is another beautiful medieval monastery worth visiting, located in the village of Bellapais. St. Hilarion Castle is also nearby, perched on a mountain and offering breathtaking views."}]', 2),
("Beaches near Famagusta", 4, '[{"role": "user", "content": "What are the best beaches near Famagusta?"}, {"role": "assistant", "content": "Famagusta has several beautiful beaches! Golden Beach (Altın Kumsal) is one of the most stunning with its crystal clear waters and golden sand. Glapsides Beach is popular and well-organized with facilities. Silver Beach (Gümüş Kumsal) is quieter and perfect for relaxation. All these beaches offer water sports activities during the summer season."}]', 3),
("Best Sunset Photos", 6, '[{"role": "user", "content": "Where can I get the best sunset photos?"}, {"role": "assistant", "content": "For stunning sunset photography in Northern Cyprus, I recommend Kyrenia Harbor with its boats and castle backdrop, St. Hilarion Castle for elevated panoramic views, Aphrodite Beach for sea horizon shots, or Salamis Ruins for historical elements in your composition. The golden hour starts approximately 30-45 minutes before the actual sunset time."}]', 5),
("Local food for tourists", 3, '[{"role": "user", "content": "Where can I find authentic local food that tourists don\'t know about?"}, {"role": "assistant", "content": "For authentic local food away from tourist spots, try Halil\'s Place in the old quarter of Nicosia - their şeftali kebab is made with a secret family recipe. In Kyrenia, visit Mehmet Amca\'s tavern behind the harbor, only open Thursday to Sunday. For the best hellim, visit Ayşe Nine\'s dairy shop in Bellapais village, open only mornings. These places don\'t advertise and are known mostly to locals."}]', 6),
("Navigate round TRNC", 5, '[{"role": "user", "content": "What\'s the easiest way to get around TRNC?"}, {"role": "assistant", "content": "The easiest way to get around Northern Cyprus depends on your preferences. Renting a car offers the most flexibility to explore remote areas at your own pace. For budget travel between major cities, intercity buses are reliable and affordable. Within cities, local dolmuş (shared taxis) are convenient and inexpensive. Regular taxis are available everywhere but agree on price beforehand. Some hotels also offer shuttle services to popular attractions."}]', 4);

-- Itinerary
INSERT INTO itinerary (created_by, conversation_id, title, description, itinerary_plan, is_favorite, proposed_start_date, proposed_end_date, picture_url, is_private)
VALUES 
(2, 1, "Maria's Kyrenia Historical Tour", "A 3-day exploration of Kyrenia's historical sites", 
'{"day1": {"morning": "Kyrenia Castle", "afternoon": "Kyrenia Harbor lunch and shopping", "evening": "Dinner at harbor restaurant"}, "day2": {"morning": "Bellapais Abbey tour", "afternoon": "Lunch at Bellapais village", "evening": "Traditional Cypriot dinner"}, "day3": {"morning": "St. Hilarion Castle hike", "afternoon": "Beach relaxation", "evening": "Farewell dinner"}}', 
TRUE, "2024-04-10", "2024-04-13", "https://example.com/itineraries/maria-kyrenia.jpg", FALSE),

(4, 2, "Elena's Beach Adventure", "Exploring the best beaches and water activities", 
'{"day1": {"morning": "Golden Beach swimming", "afternoon": "Water sports activities", "evening": "Seafood dinner"}, "day2": {"morning": "Glapsides Beach", "afternoon": "Scuba diving session", "evening": "Beach barbecue"}, "day3": {"morning": "Silver Beach relaxation", "afternoon": "Boat tour", "evening": "Sunset dinner"}}', 
TRUE, "2024-06-15", "2024-06-18", "https://example.com/itineraries/elena-beaches.jpg", TRUE),

(6, 3, "Sarah's Photography Journey", "Capturing the beauty of Northern Cyprus", 
'{"day1": {"morning": "Salamis Ruins photography", "afternoon": "Famagusta Walled City", "evening": "Kyrenia Harbor sunset"}, "day2": {"morning": "St. Hilarion Castle at dawn", "afternoon": "Bellapais Abbey", "evening": "Golden hour at Five Finger Mountains"}, "day3": {"morning": "Cape Kormakitis seascapes", "afternoon": "Traditional village life", "evening": "Kyrenia Castle by night"}}', 
FALSE, "2024-05-20", "2024-05-23", "https://example.com/itineraries/sarah-photography.jpg", FALSE),

(3, 4, "Mehmet's Local Experience", "Off the beaten path exploration for authentic experiences", 
'{"day1": {"morning": "Local fish market visit", "afternoon": "Hidden beach at Alagadi", "evening": "Dinner at family-run taverna"}, "day2": {"morning": "Olive harvesting in season", "afternoon": "Visit to traditional village", "evening": "Home-cooked meal with locals"}, "day3": {"morning": "Mountain hiking", "afternoon": "Local winery visit", "evening": "Traditional music performance"}}', 
TRUE, "2024-03-18", "2024-03-21", "https://example.com/itineraries/mehmet-local.jpg", TRUE),

(5, 5, "Mustafa's Gastronomic Tour", "Exploring the culinary delights of Northern Cyprus", 
'{"day1": {"morning": "Local market shopping", "afternoon": "Cooking class", "evening": "Restaurant dining in Kyrenia"}, "day2": {"morning": "Halloumi making workshop", "afternoon": "Olive oil tasting", "evening": "Seafood dinner in fishing village"}, "day3": {"morning": "Citrus grove tour", "afternoon": "Wine tasting", "evening": "Traditional meze experience"}}', 
FALSE, "2024-04-05", "2024-04-08", "https://example.com/itineraries/mustafa-food.jpg", FALSE);

-- ============= LANDMARK INFORMATION =============

-- Landmarks (Existing + New
-- ============= LANDMARK INFORMATION =============

-- Landmarks (Existing + New)
INSERT INTO landmarks (landmark_name, description, history, location, picture_urls, rating, reviews, open_hours, key_notes, additional_info, has_3D_model, 3D_model_url)
VALUES 
-- Existing landmarks
("Kyrenia Castle", "A historic castle overlooking the harbor.", "Built in the 7th century by the Byzantines.", "Kyrenia", '["https://example.com/landmarks/kyrenia-castle-1.jpg", "https://example.com/landmarks/kyrenia-castle-2.jpg"]', 4.7, '[{"review": "Amazing views of the harbor!", "rating": 5}, {"review": "Rich history and well-preserved.", "rating": 4.5}]', '{"Monday": "9:00 AM - 5:00 PM", "Tuesday": "9:00 AM - 5:00 PM", "Wednesday": "9:00 AM - 5:00 PM", "Thursday": "9:00 AM - 5:00 PM", "Friday": "9:00 AM - 5:00 PM", "Saturday": "9:00 AM - 5:00 PM", "Sunday": "Closed"}', '["Wear comfortable shoes for climbing.", "Visit early to avoid crowds."]', "Guided tours available.", TRUE, "https://example.com/3d-models/kyrenia-castle.glb"),

("Bellapais Abbey", "A stunning medieval monastery with Gothic architecture.", "Founded in the 13th century by the Augustinian canons.", "Bellapais", '["https://example.com/landmarks/bellapais-abbey-1.jpg", "https://example.com/landmarks/bellapais-abbey-2.jpg"]', 4.8, '[{"review": "Peaceful and beautiful.", "rating": 5}, {"review": "A must-visit for history lovers.", "rating": 4.7}]', '{"Monday": "10:00 AM - 6:00 PM", "Tuesday": "10:00 AM - 6:00 PM", "Wednesday": "10:00 AM - 6:00 PM", "Thursday": "10:00 AM - 6:00 PM", "Friday": "10:00 AM - 6:00 PM", "Saturday": "10:00 AM - 6:00 PM", "Sunday": "Closed"}', '["Great spot for photography.", "Check out the nearby village for local food."]', "Hosts annual music festivals.", FALSE, NULL),

("St. Hilarion Castle", "A fairy-tale castle perched on a mountain.", "Originally a monastery, later converted into a castle.", "Kyrenia Mountains", '["https://example.com/landmarks/st-hilarion-1.jpg", "https://example.com/landmarks/st-hilarion-2.jpg"]', 4.6, '[{"review": "Breathtaking views!", "rating": 5}, {"review": "A bit of a hike but worth it.", "rating": 4.5}]', '{"Monday": "8:00 AM - 4:00 PM", "Tuesday": "8:00 AM - 4:00 PM", "Wednesday": "8:00 AM - 4:00 PM", "Thursday": "8:00 AM - 4:00 PM", "Friday": "8:00 AM - 4:00 PM", "Saturday": "8:00 AM - 4:00 PM", "Sunday": "Closed"}', '["Bring water and wear hiking shoes.", "Best visited in the morning or late afternoon."]', "Legend says it inspired Disney's Snow White castle.", TRUE, "https://example.com/3d-models/st-hilarion.glb"),

-- New landmarks
("Salamis Ruins", "Ancient city ruins with Roman and Byzantine remains.", "Dating back to 1100 BC, it was one of the most important cities in ancient Cyprus.", "Famagusta", '["https://example.com/landmarks/salamis-1.jpg", "https://example.com/landmarks/salamis-2.jpg"]', 4.5, '[{"review": "Fascinating history and well-preserved.", "rating": 4.8}, {"review": "A lot to explore, bring a guidebook.", "rating": 4.3}]', '{"Monday": "9:00 AM - 5:00 PM", "Tuesday": "9:00 AM - 5:00 PM", "Wednesday": "9:00 AM - 5:00 PM", "Thursday": "9:00 AM - 5:00 PM", "Friday": "9:00 AM - 5:00 PM", "Saturday": "9:00 AM - 5:00 PM", "Sunday": "Closed"}', '["Wear a hat and sunscreen.", "Guided tours recommended."]', "Large site, plan for at least 2-3 hours.", FALSE, NULL),

("Golden Beach", "A pristine beach with golden sand and crystal-clear waters.", "Known for its natural beauty and tranquility.", "Karpaz Peninsula", '["https://example.com/landmarks/golden-beach-1.jpg", "https://example.com/landmarks/golden-beach-2.jpg"]', 4.9, '[{"review": "Paradise on earth!", "rating": 5}, {"review": "Perfect for relaxation.", "rating": 4.9}]', '{"Monday": "Open 24 hours", "Tuesday": "Open 24 hours", "Wednesday": "Open 24 hours", "Thursday": "Open 24 hours", "Friday": "Open 24 hours", "Saturday": "Open 24 hours", "Sunday": "Open 24 hours"}', '["Bring your own supplies.", "Great for swimming and sunbathing."]', "Part of a protected nature reserve.", FALSE, NULL);

-- Landmark Reviews
INSERT INTO landmark_reviews (landmark_id, reviewed_by, review_text, review_rating)
VALUES 
(1, 2, "The views from the castle are incredible!", 5),
(1, 3, "A must-visit for history buffs.", 4.5),
(2, 4, "So peaceful and beautiful.", 5),
(2, 5, "The architecture is stunning.", 4.7),
(3, 6, "The hike was worth it for the views.", 4.8),
(3, 7, "A magical place with a rich history.", 4.6),
(4, 8, "Fascinating ruins with so much history.", 4.8),
(4, 9, "A bit hot in the summer, but worth it.", 4.3),
(5, 2, "The most beautiful beach I've ever seen.", 5),
(5, 3, "Perfect for a relaxing day.", 4.9);

-- Landmark Ratings
INSERT INTO landmark_ratings (landmark_id, rated_by, rating)
VALUES 
(1, 2, 5),
(1, 3, 4.5),
(2, 4, 5),
(2, 5, 4.7),
(3, 6, 4.8),
(3, 7, 4.6),
(4, 8, 4.8),
(4, 9, 4.3),
(5, 2, 5),
(5, 3, 4.9);

-- ============= TRANSPORTATION =============

-- Transportation Options
INSERT INTO transportation_options (transportation_option)
VALUES 
("Bus"),
("Taxi"),
("Car Rental");

-- Bus Services
INSERT INTO bus_services (transportation_option_id, name, description, routes, rating, key_notes, website, phone_number, email, headquarter_location, bus_service_picture, additional_info)
VALUES 
(1, "North Cyprus Bus Service", "Reliable intercity bus service.", '[1, 2, 3]', 4.5, '["Affordable fares.", "Comfortable seating."]', "https://www.northcyprusbuses.com", "+90 392 123 4567", "info@northcyprusbuses.com", "Nicosia", "https://example.com/bus-service.jpg", "Operates daily from 6 AM to 10 PM."),

(1, "Kyrenia Shuttle", "Local shuttle service in Kyrenia.", '[4, 5]', 4.2, '["Frequent stops.", "Great for short distances."]', "https://www.kyreniashuttle.com", "+90 392 234 5678", "info@kyreniashuttle.com", "Kyrenia", "https://example.com/kyrenia-shuttle.jpg", "Operates every 30 minutes.");

-- Taxi Services
INSERT INTO taxi_services (transportation_option_id, name, description, rating, key_notes, website, phone_number, email, headquarter_location, picture, additional_info)
VALUES 
(2, "Kyrenia Taxi", "Reliable taxi service in Kyrenia.", 4.6, '["24/7 service.", "English-speaking drivers."]', "https://www.kyreniataxi.com", "+90 392 345 6789", "info@kyreniataxi.com", "Kyrenia", "https://example.com/kyrenia-taxi.jpg", "Fares are metered."),

(2, "Famagusta Taxi", "Affordable taxi service in Famagusta.", 4.4, '["Quick response times.", "Air-conditioned vehicles."]', "https://www.famagustataxi.com", "+90 392 456 7890", "info@famagustataxi.com", "Famagusta", "https://example.com/famagusta-taxi.jpg", "Available for airport transfers.");

-- Car Rental Services
INSERT INTO car_rental_services (transportation_option_id, name, description, rating, key_notes, website, phone_number, email, headquarter_location, picture, additional_info)
VALUES 
(3, "North Cyprus Car Rentals", "Affordable car rentals across TRNC.", 4.7, '["Wide range of vehicles.", "Flexible rental periods."]', "https://www.northcypruscarrentals.com", "+90 392 567 8901", "info@northcypruscarrentals.com", "Nicosia", "https://example.com/car-rental.jpg", "Includes insurance and GPS."),

(3, "Kyrenia Drive", "Premium car rental service in Kyrenia.", 4.8, '["Luxury vehicles available.", "24/7 customer support."]', "https://www.kyreniadrive.com", "+90 392 678 9012", "info@kyreniadrive.com", "Kyrenia", "https://example.com/kyrenia-drive.jpg", "Free delivery and pickup.");

-- Transportation Ratings
INSERT INTO transportation_ratings (transportation_option_id, bus_service_id, rated_by, rating)
VALUES 
(1, 1, 2, 4.5),
(1, 2, 3, 4.2),
(2, NULL, 4, 4.6),
(2, NULL, 5, 4.4),
(3, NULL, 6, 4.7),
(3, NULL, 7, 4.8);

-- ============= CITIES AND ROUTES =============

-- Cities
INSERT INTO cities (name, location_latitute, location_longitude)
VALUES 
("Nicosia", 35.1856, 33.3823),
("Kyrenia", 35.3417, 33.3167),
("Famagusta", 35.1250, 33.9500),
("Iskele", 35.3000, 33.8833);

-- Routes
INSERT INTO routes (route_name, departure_city_id, arrival_city_id)
VALUES 
("Nicosia to Kyrenia", 1, 2),
("Kyrenia to Famagusta", 2, 3),
("Famagusta to Iskele", 3, 4),
("Iskele to Nicosia", 4, 1);

-- Bus Trips
INSERT INTO bus_trips (route_id, bus_service_id, departure_time, arrival_time, total_seats_available, price, is_special, is_summer_season_dependent, additional_info)
VALUES 
(1, 1, "08:00:00", "09:00:00", 30, 10.00, FALSE, FALSE, "Daily service."),
(2, 1, "10:00:00", "11:30:00", 30, 15.00, FALSE, FALSE, "Daily service."),
(3, 2, "12:00:00", "13:00:00", 20, 8.00, FALSE, FALSE, "Operates every 2 hours."),
(4, 2, "14:00:00", "15:30:00", 20, 12.00, FALSE, FALSE, "Daily service.");