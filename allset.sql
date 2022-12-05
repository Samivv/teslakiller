
CREATE TABLE client (client_id INTEGER PRIMARY KEY, client_name VARCHAR(50) NOT NULL, address VARCHAR(50) NOT NULL, zipcode INTEGER NOT NULL, city VARCHAR(20) NOT NULL, phone INTEGER NOT NULL, email VARCHAR(50) NOT NULL); 

CREATE TABLE user (user_id INTEGER PRIMARY KEY, user_name VARCHAR(100) NOT NULL, user_email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL);

CREATE TABLE category (category_id INTEGER PRIMARY KEY, category_name VARCHAR(10) NOT NULL);
insert into category (category_name) VALUES ('Model');
insert into category (category_name) values ('Color');
insert into category (category_name) values ('Interior');

insert into client (client_name, address, zipcode, city, phone, email) values ('Testi Tenho', 'Testikuja 1 A2', 20000, 'Testitown', '0412345678', 'testi.testi@testi.testi');

CREATE TABLE product
(product_id INTEGER PRIMARY KEY,
product_name VARCHAR(10) NOT NULL,
product_price DECIMAL(10,2),
category_id INT,
FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE orders
(order_id INTEGER PRIMARY KEY,
order_date DATE NOT NULL,
order_time TIME NOT NULL,
order_price DECIMAL (10,2),
client_id INTEGER,
product_id INTEGER,
    FOREIGN KEY (client_id) REFERENCES client (client_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id)
);

insert into product (product_name, product_price, category_id) values ('Basic', 50000, 1);
insert into product (product_name, product_price, category_id) values ('Sport', 78000, 1);
insert into product (product_name, product_price, category_id) values ('Offroad', 66000, 1);
insert into product (product_name, product_price, category_id) values ('Black', 1000, 2);
insert into product (product_name, product_price, category_id) values ('White', 0, 2);
insert into product (product_name, product_price, category_id) values ('Red', 1500, 2);
insert into product (product_name, product_price, category_id) values ('Leather', 1400, 3);
insert into product (product_name, product_price, category_id) values ('Textile', 0, 3);

DROP TABLE orders;
DROP TABLE order_row;

CREATE TABLE orders
(order_id INTEGER PRIMARY KEY,
order_date DATETIME NOT NULL,
client_id INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client (client_id)
);
CREATE TABLE order_row
(order_id INTEGER NOT NULL,
product_id INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id)
);

insert into orders (order_date, client_id) values ('2022-11-28', 1);

DROP TABLE order_row;
DROP TABLE orders;
DROP TABLE client;

CREATE TABLE client (client_id INTEGER PRIMARY KEY, client_name VARCHAR(50) NOT NULL, street VARCHAR(50) NOT NULL, zipcode INTEGER NOT NULL, city VARCHAR(20) NOT NULL, phone INTEGER NOT NULL, email VARCHAR(50) NOT NULL); 

insert into client (client_name, street, zipcode, city, phone, email) values ('Testi Tenho', 'Testikuja 1 A2', 20000, 'Testitown', '0412345678', 'testi.testi@testi.testi');

CREATE TABLE orders
(order_id INTEGER PRIMARY KEY,
order_date DATETIME NOT NULL,
client_id INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client (client_id)
);

CREATE TABLE order_row
(order_id INTEGER NOT NULL,
product_id INTEGER NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id)
);

insert into orders (order_date, client_id) values ('2022-11-28', 1);