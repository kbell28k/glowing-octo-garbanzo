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

CREATE TABLE posts
(
	id int NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    zip_code INT NOT NULL,
	name varchar(45) NOT NULL,
	price INT NOT NULL,
    available BOOLEAN DEFAULT true,
    open_to_trade BOOLEAN DEFAULT false,
    trade_wishlist varchar(255),
    description varchar(255),
	PRIMARY KEY (id),
	img_id varchar(250),
	type varchar(10)
);

