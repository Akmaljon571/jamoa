CREATE TABLE product(
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title varchar(65) not null,
    price int not null
);

CREATE TABLE categorys(
    category_id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    category_title varchar not null
);