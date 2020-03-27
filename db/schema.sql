CREATE DATABASE neighbuddy_db;
USE neighbuddy_db;

CREATE TABLE seller
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	zipcode int(5),
	PRIMARY KEY (id)
);

CREATE TABLE helper
(
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	zipcode int(5),
	PRIMARY KEY (id)
);
