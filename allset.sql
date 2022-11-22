CREATE TABLE model (model_id INTEGER PRIMARY KEY, model_name VARCHAR(10) NOT NULL, model_price DECIMAL(7,2)); 

CREATE TABLE color (color_id INTEGER PRIMARY KEY, color_name VARCHAR(10) NOT NULL, color_price DECIMAL(7,2)); 

CREATE TABLE interior (interior_id INTEGER PRIMARY KEY, interior_name VARCHAR(10) NOT NULL, interior_price DECIMAL(7,2)); 

CREATE TABLE client (client_id INTEGER PRIMARY KEY, client_name VARCHAR(50) NOT NULL, address VARCHAR(50) NOT NULL, zipcode INTEGER NOT NULL, city VARCHAR(20) NOT NULL, phone INTEGER NOT NULL, email VARCHAR(50) NOT NULL); 

CREATE TABLE orders (order_id INTEGER PRIMARY KEY, client_id INTEGER, model_id INTEGER, color_id INTEGER, interior_id INTEGER, order_date DATE NOT NULL, order_time TIME NOT NULL, FOREIGN KEY (client_id) REFERENCES client (client_id), FOREIGN KEY (model_id) REFERENCES model (model_id), FOREIGN KEY (color_id) REFERENCES color (color_id), FOREIGN KEY (interior_id) REFERENCES interior (interior_id)); 

CREATE TABLE user (user_id INTEGER PRIMARY KEY, user_name VARCHAR(100) NOT NULL, user_email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL);

insert into model (model_name, model_price) values ('Basic', 50000);
insert into model (model_name, model_price) values ('Sport', 78000);
insert into model (model_name, model_price) values ('Offroad', 66000);

insert into color (color_name, color_price) values ('Black', 1500);
insert into color (color_name, color_price) values ('White', 0);
insert into color (color_name, color_price) values ('Red', 1800);

insert into interior (interior_name, interior_price) values ('Leather', 1400);
insert into interior (interior_name, interior_price) values ('Textile', 0);

insert into client (client_name, address, zipcode, city, phone, email) values ('Testi Tenho', 'Testikuja 1 A2', 20000, 'Testitown', '0412345678', 'testi.testi@testi.testi');