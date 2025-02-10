CREATE DATABASE IF NOT EXISTS `jdm_cars`;
USE `jdm_cars`;

CREATE TABLE IF NOT EXISTS `cars` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL
);

INSERT INTO `cars` (`name`) VALUES
('Nissan Skyline GT-R'),
('Toyota Supra'),
('Mazda RX-7'),
('Honda NSX'),
('Subaru Impreza WRX STI'),
('Mitsubishi Lancer Evolution'),
('Nissan 300ZX'),
('Toyota MR2'),
('Mazda MX-5 Miata'),
('Honda S2000');