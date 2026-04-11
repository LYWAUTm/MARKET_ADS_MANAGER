USE market_ads_manager;

SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM messages;
DELETE FROM favoris;
DELETE FROM images;
DELETE FROM annonces;
DELETE FROM categories;
DELETE FROM utilisateurs;

ALTER TABLE messages AUTO_INCREMENT = 1;
ALTER TABLE images AUTO_INCREMENT = 1;
ALTER TABLE annonces AUTO_INCREMENT = 1;
ALTER TABLE categories AUTO_INCREMENT = 1;
ALTER TABLE utilisateurs AUTO_INCREMENT = 1;

SET FOREIGN_KEY_CHECKS = 1;

-- utilisateurs
INSERT INTO utilisateurs (user_id, name, email, password, created_at) VALUES
(1, 'Alice', 'alice@mail.com', 'hashed_pwd_1', '2024-01-01 10:00:00'),
(2, 'Bob', 'bob@mail.com', 'hashed_pwd_2', '2024-01-05 14:30:00'),
(3, 'Charlie', 'charlie@mail.com', 'hashed_pwd_3', '2024-02-01 09:15:00');

-- categories
INSERT INTO categories (category_id, name) VALUES
(1, 'Immobilier'),
(2, 'Véhicules'),
(3, 'Multimédia'),
(4, 'Maison');

-- annonces
INSERT INTO annonces (ads_id, title, description, price, location, updated_at, user_id, category_id) VALUES
(1, 'Appartement T2', 'Bel appart centre ville', 120000.00, 'Paris', '2024-03-01 12:00:00', 1, 1),
(2, 'Voiture occasion', 'Peugeot 208 bon état', 8000.00, 'Lyon', '2024-03-02 15:00:00', 2, 2),
(3, 'Télévision 4K', 'TV Samsung 55 pouces', 500.00, 'Marseille', '2024-03-03 11:00:00', 1, 3);

-- images
INSERT INTO images (image_id, url, ads_id) VALUES
(1, 'https://picsum.photos/200', 1),
(2, 'https://picsum.photos/201', 1),
(3, 'https://picsum.photos/202', 2),
(4, 'https://picsum.photos/203', 3);

-- favoris
INSERT INTO favoris (user_id, ads_id) VALUES
(1, 1),
(1, 3),
(2, 2);

-- messages
INSERT INTO messages (message_id, content, send_date, user_send_id, user_receive_id, ads_id) VALUES
(1, 'Bonjour, toujours dispo ?', '2024-03-05 10:00:00', 2, 1, 1),
(2, 'Oui, toujours disponible', '2024-03-05 10:05:00', 1, 2, 1),
(3, 'Prix négociable ?', '2024-03-06 09:00:00', 3, 2, 2),
(4, 'Oui, un peu', '2024-03-06 09:10:00', 2, 3, 2),
(5, 'Intéressé par la TV', '2024-03-07 14:00:00', 3, 1, 3);
