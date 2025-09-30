# MongoDB Update Operators Cheat Sheet

This document provides a quick reference for commonly used MongoDB update operators, their purpose, and examples.

---

## 📌 Field Update Operators

| Operator  | Purpose | Example | Result |
|-----------|---------|---------|--------|
| `$set`    | Add or update a field | `db.users.updateOne({name: "Rahul"}, { $set: { age: 25 } })` | `{ name: "Rahul", age: 25 }` |
| `$unset`  | Remove a field | `db.users.updateOne({name: "Rahul"}, { $unset: { age: "" } })` | `{ name: "Rahul" }` |
| `$inc`    | Increment a numeric value | `db.users.updateOne({name: "Rahul"}, { $inc: { score: 5 } })` | `{ score: 15 }` if old score was 10 |
| `$mul`    | Multiply a numeric field | `db.users.updateOne({name: "Rahul"}, { $mul: { score: 2 } })` | `{ score: 20 }` if old score was 10 |
| `$rename` | Rename a field | `db.users.updateOne({}, { $rename: { "username": "user_name" } })` | `username → user_name` |

---

## 📌 Array Update Operators

| Operator   | Purpose | Example | Result |
|------------|---------|---------|--------|
| `$push`    | Add element to array | `db.users.updateOne({name: "Rahul"}, { $push: { hobbies: "Cricket" } })` | `["Reading", "Cricket"]` |
| `$each`    | Used with `$push` to insert multiple elements | `db.users.updateOne({name: "Rahul"}, { $push: { hobbies: { $each: ["Music", "Traveling"] } } })` | `["Reading", "Music", "Traveling"]` |
| `$addToSet`| Add element if not already present | `db.users.updateOne({name: "Rahul"}, { $addToSet: { hobbies: "Gaming" } })` | Prevents duplicates |
| `$pop`     | Remove first (-1) or last (1) element | `db.users.updateOne({name: "Rahul"}, { $pop: { hobbies: -1 } })` | Removes first element |
| `$pull`    | Remove element(s) matching condition | `db.users.updateOne({name: "Rahul"}, { $pull: { hobbies: "Gaming" } })` | Removes `"Gaming"` |
| `$pullAll` | Remove multiple specified elements | `db.users.updateOne({name: "Rahul"}, { $pullAll: { hobbies: ["Music", "Traveling"] } })` | Removes both if present |

---

## 📌 Array Positional Operators

| Operator   | Purpose | Example | Result |
|------------|---------|---------|--------|
| `$`        | Update first matching element in an array | `db.users.updateOne({hobbies: "Gaming"}, { $set: { "hobbies.$": "Sports" } })` | Replaces first `"Gaming"` with `"Sports"` |
| `$[]`      | Update all elements in an array | `db.users.updateOne({}, { $set: { "scores.$[]": 100 } })` | Sets all values in `scores` to `100` |
| `$[<id>]`  | Update specific elements using arrayFilters | `db.users.updateOne({}, { $set: { "scores.$[elem]": 50 } }, { arrayFilters: [{ elem: { $lt: 40 } }] })` | Updates only scores < 40 |

---

## 📌 Miscellaneous Operators

| Operator   | Purpose | Example | Result |
|------------|---------|---------|--------|
| `$currentDate` | Set current date/time | `db.users.updateOne({}, { $currentDate: { lastModified: true } })` | Adds/updates `lastModified` with current date |
| `$min`     | Update only if new value is less than current | `db.users.updateOne({}, { $min: { age: 20 } })` | Updates `age` if new value < current |
| `$max`     | Update only if new value is greater than current | `db.users.updateOne({}, { $max: { age: 30 } })` | Updates `age` if new value > current |

---

✅ **Quick Notes:**
- Use `$set` for updates, `$unset` for removals.  
- Use `$push` + `$each` for multiple additions.  
- Use `$pull` + `$in` for multiple removals.  
- Use `$addToSet` to avoid duplicates in arrays.  
