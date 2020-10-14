DROP DATABASE IF EXISTS hamburger_db;
CREATE DATABASE hamburger_db;

USE hamburger_db;
DROP TABLE IF EXISTS types;

CREATE TABLE types (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

