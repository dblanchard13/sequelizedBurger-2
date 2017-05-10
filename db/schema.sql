CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INTEGER(11) auto_increment not null,
  burger_name VARCHAR(255) ,
  devoured BOOLEAN not null default 0,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
