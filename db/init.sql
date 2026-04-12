SET FOREIGN_KEY_CHECKS = 0;

DROP DATABASE IF EXISTS `market_ads_manager`;
CREATE DATABASE `market_ads_manager`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE `market_ads_manager`;

-- --------------------------------------------------------
-- Table : utilisateurs
-- --------------------------------------------------------
DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE `utilisateurs` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table : categories
-- --------------------------------------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table : annonces (Post)
-- --------------------------------------------------------
DROP TABLE IF EXISTS `annonces`;
CREATE TABLE `annonces` (
  `ads_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `description` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `location` VARCHAR(150) NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NOT NULL,
  `category_id` INT DEFAULT NULL,
  PRIMARY KEY (`ads_id`),
  KEY `idx_annonce_user` (`user_id`),
  KEY `idx_annonce_category` (`category_id`),
  CONSTRAINT `fk_annonce_user`
      FOREIGN KEY (`user_id`) REFERENCES `utilisateurs`(`user_id`)
      ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_annonce_category`
      FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`)
      ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table : images
-- --------------------------------------------------------
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `image_id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  `ads_id` INT NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `idx_image_ads` (`ads_id`),
  CONSTRAINT `fk_image_ads`
      FOREIGN KEY (`ads_id`) REFERENCES `annonces`(`ads_id`)
      ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table : favoris
-- --------------------------------------------------------
DROP TABLE IF EXISTS `favoris`;
CREATE TABLE `favoris` (
  `user_id` INT NOT NULL,
  `ads_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `ads_id`),
  CONSTRAINT `fk_favoris_user`
      FOREIGN KEY (`user_id`) REFERENCES `utilisateurs`(`user_id`)
      ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_favoris_ads`
      FOREIGN KEY (`ads_id`) REFERENCES `annonces`(`ads_id`)
      ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- Table : messages (désactivée)
-- --------------------------------------------------------
-- (tout ton bloc messages reste en commentaire)

SET FOREIGN_KEY_CHECKS = 1;
