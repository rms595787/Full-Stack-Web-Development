# JOINS

`JOIN` operation is used to combine rows from two or more tables based on a related column between them.

`For more info on joins checkout this file - ` [JOINS](../02.%20Theory/12.%20Joins.md)

## Types of JOIN

- Cross Join
- Inner Join
- Left Join
- Right Join

1.  Cross Join
    Every row from one table is combined with every row from another table.

    Code

    ```sql
    SELECT * FROM customers CROSS JOIN orders;
    ```

    <img src="./_images/Cross Join.png" alt="Cross Join">

2.  Inner Join
    Returns only the rows where there is a match between the specified columns in both the left (on first) and right (or second) tables.

    <img src="./_images/Inner Join venn diagram.png" alt="Inner Join" width="300">

    Code

    ```sql
    SELECT * FROM customers AS c
    INNER JOIN orders AS o
    ON c.cust_id = o.cust_id;
    ```

    <img src="./_images/Inner Join.png" alt="Inner Join">

    - Inner Join with Group By

    ```sql
    SELECT name FROM customers
    INNER JOIN orders
    ON orders.cust_id = customers.cust_id
    GROUP BY name;
    ```

    <img src="./_images/Inner Join with Group By.png" alt="Inner Join">

3.  Left Join
    Returns all rows from the left (or first) table and the matching rows from the right (or second) table.

    <img src="./_images/Left Join venn diagram.png" alt="Left Join" width="300">

    ```sql
    SELECT * FROM customers AS c
    LEFT JOIN orders AS o
    ON c.cust_id = o.cust_id;
    ```

    <img src="./_images/Left Join.png" alt="Left Join"/>
    <img src="./_images/Left Join2.png" alt="Left Join"/>

4.  Right Join  
    Returns matching rows from the left (or first) table and all rows from the right (or second) table.

    <img src="./_images/Right Join venn diagram.png" alt="Right Join" width="300"/>

    ```sql
    SELECT * FROM customers AS c
    RIGHT JOIN orders AS o
    ON c.cust_id = o.cust_id;
    ```

    <img src="./_images/Right Join.png" alt="Right Join"/>