CREATE DATABASE IF NOT EXISTS `jdm_cars`;
USE `jdm_cars`;

CREATE TABLE IF NOT EXISTS `cars` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `manufacturer` VARCHAR(255) NOT NULL,
  `year` INT NOT NULL,
  `image_url` VARCHAR(255) NOT NULL
);

INSERT INTO `cars` (`name`, `manufacturer`, `year`, `image_url`) VALUES
('Nissan Skyline GT-R', 'Nissan', 1999, 'https://www.supercars.net/blog/wp-content/uploads/2016/02/NISSAN-Skyline-GT-R-V-Spec-R34-4041_13.jpg'),
('Toyota Supra', 'Toyota', 1998, 'https://www.ebaymotorsblog.com/motors/blog/wp-content/uploads/2015/04/1995_toyota_supra_turbo_red_3.jpg'),
('Mazda RX-7', 'Mazda', 1993, 'https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/9933fc815a41cfeb8fd492a22d5008aea4e877d2/photos/6541034614.5xPwqMi6G.jpg?t=160858008006'),
('Honda NSX', 'Honda', 1992, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqA7avN1lBCppyQBihnyaAw4vbSCfOEJbOw&s'),
('Subaru Impreza WRX STI', 'Subaru', 2004, 'https://images.collectingcars.com/017241/Subaru-WRX-Solberg-100.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85'),
('Mitsubishi Lancer Evolution', 'Mitsubishi', 2005, 'https://cdn.motor1.com/images/mgl/NGOjkY/s1/2005-mitsubishi-lancer-evolution-miev-konsepti.jpg'),
('Nissan 300ZX', 'Nissan', 1990, 'https://issimi-vehicles-cdn.b-cdn.net/publicamlvehiclemanagement/VehicleDetails/619/timestamped-1724283387465-2%20(2).jpeg?width=3840&quality=75'),
('Toyota MR2', 'Toyota', 1995, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwrSG_85r9ueCV-A1NixiM7XlZGNJzPJyvg&s'),
('Mazda MX-5 Miata', 'Mazda', 1990, 'https://cdn.motor1.com/images/mgl/P30ZBX/s1/1990-mazda-mx-5-miata-sold-on-bring-a-trailer.jpg'),
('Honda S2000', 'Honda', 2000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/HondaS2000-004.jpg/1200px-HondaS2000-004.jpg');