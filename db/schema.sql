DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
    id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	created_at TIMESTAMP NOT NUll,
	PRIMARY KEY (id)
)