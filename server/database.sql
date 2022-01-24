create database capstone

CREATE TABLE userinfo(
    user_id serial primary key,
    username varchar(255),
    password varchar(255),
    email varchar(255)
);

CREATE TABLE sub_list(
    sub_list_id serial primary key,
    
    user_id_fk integer REFERENCES userinfo(user_id)
);