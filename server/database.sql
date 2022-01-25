CREATE DATABASE capstone;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE sub (
    sub_id SERIAL PRIMARY KEY,
    typesub VARCHAR(255),
    plan   VARCHAR(255),
    duedate VARCHAR(255),
    user_id_fk INTEGER REFERENCES users (user_id)
); 
