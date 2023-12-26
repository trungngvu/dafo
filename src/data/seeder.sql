insert into app_supplier (name) values ('A company');

insert into app_category (name) values ('headphones'),('shoes'), ('hat'),('sock');

insert into app_product (name, content, average_rating, price, category_id, supplier_id) values
("Earphones 1","New product",9,50.0,1,1),
("Earphones 2","New product",9,50.0,1,1),
("Earphones 3","New product",9,50.0,1,1),
("Earphones 4","New product",9,50.0,1,1),
("Earphones 5","New product",9,50.0,1,1),
("Earphones 6","New product",9,50.0,1,1);


insert into app_productimage (image, link, type, product_id) values
("product 1","/banner/assets/earphones_a_1.webp","image", 1),
("product 1","/banner/assets/earphones_a_2.webp","image", 1),
("product 1","/banner/assets/earphones_a_3.webp","image", 1),
("product 1","/banner/assets/earphones_a_4.webp","image", 1),
("product 2","/banner/assets/earphones_b_1.webp","image", 2),
("product 2","/banner/assets/earphones_b_2.webp","image", 2),
("product 2","/banner/assets/earphones_b_3.webp","image", 2),
("product 2","/banner/assets/earphones_b_4.webp","image", 2),
("product 3","/banner/assets/earphones_c_1.webp","image", 3),
("product 3","/banner/assets/earphones_c_2.webp","image", 3),
("product 3","/banner/assets/earphones_c_3.webp","image", 3),
("product 3","/banner/assets/earphones_c_4.webp","image", 3),
("product 4","/banner/assets/headphones_a_1.webp","image", 4),
("product 4","/banner/assets/headphones_a_2.webp","image", 4),
("product 4","/banner/assets/headphones_a_3.webp","image", 4),
("product 4","/banner/assets/headphones_a_4.webp","image", 4),
("product 5","/banner/assets/headphones_b_1.webp","image", 5),
("product 5","/banner/assets/headphones_b_2.webp","image", 5),
("product 5","/banner/assets/headphones_b_3.webp","image", 5),
("product 5","/banner/assets/headphones_b_4.webp","image", 5),
("product 6","/banner/assets/headphones_c_1.webp","image", 6),
("product 6","/banner/assets/headphones_c_2.webp","image", 6),
("product 6","/banner/assets/headphones_c_3.webp","image", 6),
("product 6","/banner/assets/headphones_c_4.webp","image", 6);

insert into app_review (content, rating, time, user_id, product_id)
values 
('Great app!', 5, NOW(), 1, 1), 
('I really liked this app', 9, NOW(), 1, 2),
('This app has a great user interface, but the lack of features makes it less useful than other apps in the same category', 5, NOW(), 1, 3),
('I knocked it down one star because the app crashes frequently,', 5, NOW(), 1, 4),
('Great app! shit', 5, NOW(), 1, 5);
