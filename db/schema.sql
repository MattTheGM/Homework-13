CREATE DATABASE burger_db;
USE burger_db;


CREATE TABLE Burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);