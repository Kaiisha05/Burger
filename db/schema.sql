-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "blogger" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE "burgers" (
    "id" Int (5) AUTO_INCREMENT NOT NULL,
    "burger_name" VARCHAR (150) NOT NULL,
    "devoured" BOOLEAN,
  
PRIMARY KEY ( "id" ),
);