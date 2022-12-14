DROP TABLE user;
DROP TABLE order_row;
DROP TABLE orders;
DROP TABLE client;
DROP TABLE product;
DROP TABLE category; 

CREATE TABLE category
(category_id INTEGER PRIMARY KEY, 
category_name VARCHAR(50) NOT NULL
); 

insert into category (category_name) VALUES ('Model');
insert into category (category_name) values ('Color');
insert into category (category_name) values ('Interior');

CREATE TABLE product
(product_id INTEGER PRIMARY KEY, 
product_name VARCHAR(50) NOT NULL, 
product_price INTEGER, 
category_id INTEGER, 
    FOREIGN KEY (category_id) REFERENCES category (category_id)
); 

insert into product (product_name, product_price, category_id) values ('Basic', 50000, 1);
insert into product (product_name, product_price, category_id) values ('Sport', 78000, 1);
insert into product (product_name, product_price, category_id) values ('Offroad', 66000, 1);
insert into product (product_name, product_price, category_id) values ('Black', 1000, 2);
insert into product (product_name, product_price, category_id) values ('White', 0, 2);
insert into product (product_name, product_price, category_id) values ('Red', 1500, 2);
insert into product (product_name, product_price, category_id) values ('Leather', 1400, 3);
insert into product (product_name, product_price, category_id) values ('Textile', 0, 3);

CREATE TABLE client
(client_id INTEGER PRIMARY KEY, 
client_name VARCHAR(50) NOT NULL, 
street VARCHAR(50), 
zipcode INTEGER, 
city VARCHAR(50), 
phone VARCHAR(20) NOT NULL, 
email VARCHAR(50) 
); 

insert into client (client_name, street, zipcode, city, phone, email) values ('Testi Tenho', 'Testikuja 1 A2', 20000, 'Testitown', '0412345678', 'testi.testi@testi.testi');

CREATE TABLE orders 
(order_id INTEGER PRIMARY KEY,
client_id INTEGER, 
    FOREIGN KEY (client_id) REFERENCES client (client_id) 
); 

CREATE TABLE order_row 
(order_id INTEGER, 
product_id INTEGER, 
order_date DATE, 
order_price INTEGER, 
    FOREIGN KEY (order_id) REFERENCES order_row (order_id),
    FOREIGN KEY (product_id) REFERENCES product (product_id)
); 

insert into orders (order_id, client_id) values (3, 1);

insert into order_row (order_id, product_id, order_date, order_price) values (1, 1, '2022-11-28', 3000);


CREATE TABLE user_info
(user_id INTEGER PRIMARY KEY, 
user_name VARCHAR(50) NOT NULL, 
user_email VARCHAR(50), 
user_password VARCHAR(50) 
);

insert into user_info (user_name, user_email, user_password) values ('11testit', 'testi@testi.t', 'xxyy11');
