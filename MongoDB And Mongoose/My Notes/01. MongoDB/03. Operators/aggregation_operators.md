# MongoDB Aggregation Operators Cheat Sheet

## 📌 Accumulator Operators (used in $group)

| Operator | Purpose | Example | Description |
|----------|---------|---------|-------------|
| `$sum`   | Sum of values | `{ $sum: "$amount" }` | Total of `amount` field |
| `$avg`   | Average of values | `{ $avg: "$score" }` | Average score |
| `$min`   | Minimum value | `{ $min: "$age" }` | Smallest age |
| `$max`   | Maximum value | `{ $max: "$age" }` | Largest age |
| `$first` | First document’s value | `{ $first: "$name" }` | First name by sort order |
| `$last`  | Last document’s value | `{ $last: "$name" }` | Last name by sort order |

---

## 📌 Array Operators

| Operator | Purpose | Example | Description |
|----------|---------|---------|-------------|
| `$push`  | Push value into array | `{ $push: "$hobbies" }` | Collects values into array |
| `$addToSet` | Add unique values into array | `{ $addToSet: "$tags" }` | Avoids duplicates |

---

## 📌 String Operators

| Operator | Purpose | Example | Description |
|----------|---------|---------|-------------|
| `$concat` | Concatenate strings | `{ $concat: ["$firstName", " ", "$lastName"] }` | Combines fields |
| `$substr` | Substring (deprecated, use $substrBytes) | `{ $substr: ["$name", 0, 3] }` | Returns first 3 letters |
| `$toUpper` | Convert to uppercase | `{ $toUpper: "$name" }` | NAME |
| `$toLower` | Convert to lowercase | `{ $toLower: "$name" }` | name |

---

## 📌 Date Operators

| Operator | Purpose | Example | Description |
|----------|---------|---------|-------------|
| `$year`  | Extract year | `{ $year: "$date" }` | Returns year of date |
| `$month` | Extract month | `{ $month: "$date" }` | Returns month (1–12) |
| `$dayOfMonth` | Extract day | `{ $dayOfMonth: "$date" }` | Returns day (1–31) |
| `$hour`  | Extract hour | `{ $hour: "$date" }` | Returns hour |
| `$minute` | Extract minute | `{ $minute: "$date" }` | Returns minute |
| `$second` | Extract second | `{ $second: "$date" }` | Returns second |
