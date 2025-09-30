# MongoDB Query Operators Cheat Sheet

## 📌 Comparison Operators / Relational Operators

| Operator | Purpose                | Example                                   | Description                        |
| -------- | ---------------------- | ----------------------------------------- | ---------------------------------- |
| `$eq`    | Equals                 | `{ age: { $eq: 25 } }`                    | Matches documents where age = 25   |
| `$ne`    | Not Equals             | `{ age: { $ne: 25 } }`                    | Matches documents where age != 25  |
| `$gt`    | Greater Than           | `{ age: { $gt: 20 } }`                    | Matches documents where age > 20   |
| `$gte`   | Greater Than or Equal  | `{ age: { $gte: 20 } }`                   | Matches documents where age >= 20  |
| `$lt`    | Less Than              | `{ age: { $lt: 30 } }`                    | Matches documents where age < 30   |
| `$lte`   | Less Than or Equal     | `{ age: { $lte: 30 } }`                   | Matches documents where age <= 30  |
| `$in`    | In array of values     | `{ city: { $in: ["Delhi", "Mumbai"] } }`  | Matches if city is Delhi or Mumbai |
| `$nin`   | Not in array of values | `{ city: { $nin: ["Delhi", "Mumbai"] } }` | Excludes Delhi & Mumbai            |

---

## 📌 Logical Operators

| Operator | Purpose             | Example                                                | Description                     |
| -------- | ------------------- | ------------------------------------------------------ | ------------------------------- |
| `$and`   | Logical AND         | `{ $and: [{ age: { $gt: 20 }}, { age: { $lt: 30 }}] }` | Both conditions must be true    |
| `$or`    | Logical OR          | `{ $or: [{ city: "Delhi" }, { city: "Mumbai" }] }`     | Either condition true           |
| `$nor`   | Logical NOR         | `{ $nor: [{ age: 25 }, { city: "Delhi" }] }`           | None of the conditions are true |
| `$not`   | Negates a condition | `{ age: { $not: { $gt: 30 } } }`                       | Matches age <= 30               |

---

## 📌 Element Operators

| Operator  | Purpose                    | Example                        | Description                     |
| --------- | -------------------------- | ------------------------------ | ------------------------------- |
| `$exists` | Checks if field exists     | `{ email: { $exists: true } }` | Returns docs with `email` field |
| `$type`   | Matches field by BSON type | `{ age: { $type: "int" } }`    | Matches docs where age is int   |

---

## 📌 Array Operators

| Operator     | Purpose                                         | Example                                             | Description                                       |
| ------------ | ----------------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| `$all`       | Matches arrays containing all elements          | `{ tags: { $all: ["red", "blue"] } }`               | Matches docs where `tags` contain both red & blue |
| `$elemMatch` | Matches array element that satisfies conditions | `{ scores: { $elemMatch: { $gt: 80, $lt: 100 } } }` | Matches docs with a score between 80 and 100      |
| `$size`      | Matches arrays by length                        | `{ tags: { $size: 3 } }`                            | Matches arrays with exactly 3 elements            |
