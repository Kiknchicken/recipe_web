-- Drop tables if exist
DROP TABLE IF EXISTS Recipes;

-- Create Tables
CREATE TABLE Recipes (
    id INT AUTO_INCREMENT,
    description TEXT,
    ingredients TEXT,
    directions TEXT,
    cuisine_type VARCHAR(21),
    meal_type VARCHAR(21),
    PRIMARY KEY (id)
) ENGINE = innodb;

INSERT INTO Recipes (description, ingredients, directions, cuisine_type, meal_type) VALUES
('description', 'ingredients', 'directions', 'cuisine_type', 'meal_type');