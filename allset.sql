
CREATE TABLE client (client_id INTEGER PRIMARY KEY, client_name VARCHAR(50) NOT NULL, address VARCHAR(50) NOT NULL, zipcode INTEGER NOT NULL, city VARCHAR(20) NOT NULL, phone INTEGER NOT NULL, email VARCHAR(50) NOT NULL); 

CREATE TABLE user (user_id INTEGER PRIMARY KEY, user_name VARCHAR(100) NOT NULL, user_email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL);

CREATE TABLE category (category_id INTEGER PRIMARY KEY, category_name VARCHAR(10) NOT NULL);
insert into category (category_name) VALUES ('Model');
insert into category (category_name) values ('Color');
insert into category (category_name) values ('Interior');

CREATE TABLE model
(model_id INTEGER PRIMARY KEY,
model_name VARCHAR(10) NOT NULL,
model_price DECIMAL(7,2),
category_id INT,
FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE color
(color_id INTEGER PRIMARY KEY,
color_name VARCHAR(10) NOT NULL,
color_price DECIMAL(7,2),
category_id INT,
FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE interior
(interior_id INTEGER PRIMARY KEY,
interior_name VARCHAR(10) NOT NULL,
interior_price DECIMAL(7,2),
category_id INT,
FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE orders
(order_id INTEGER PRIMARY KEY,
client_id INTEGER,
model_id INTEGER,
color_id INTEGER,
interior_id INTEGER,
order_date DATE NOT NULL,
order_time TIME NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client (client_id),
    FOREIGN KEY (model_id) REFERENCES model (model_id),
    FOREIGN KEY (color_id) REFERENCES color (color_id),
    FOREIGN KEY (interior_id) REFERENCES interior (interior_id)
);

insert into model (model_name, model_price, category_id) values ('Basic', 50000, 1);
insert into model (model_name, model_price, category_id) values ('Sport', 78000, 1);
insert into model (model_name, model_price, category_id) values ('Offroad', 66000, 1);

insert into color (color_name, color_price, category_id) values ('Black', 1500, 2);
insert into color (color_name, color_price, category_id) values ('White', 0, 2);
insert into color (color_name, color_price, category_id) values ('Red', 1800, 2);

insert into interior (interior_name, interior_price, category_id) values ('Leather', 1400, 3);
insert into interior (interior_name, interior_price, category_id) values ('Textile', 0, 3);

insert into client (client_name, address, zipcode, city, phone, email) values ('Testi Tenho', 'Testikuja 1 A2', 20000, 'Testitown', '0412345678', 'testi.testi@testi.testi');
