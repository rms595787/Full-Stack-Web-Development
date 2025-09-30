# MongoDB Projection Operators Cheat Sheet

## 📌 Basic Projection

| Operator | Purpose | Example | Description |
|----------|---------|---------|-------------|
| `1`      | Include field | `db.users.find({}, { name: 1 })` | Includes only `name` field |
| `0`      | Exclude field | `db.users.find({}, { password: 0 })` | Excludes `password` field |
| `_id: 0` | Exclude `_id` | `db.users.find({}, { _id: 0, name: 1 })` | Excludes `_id` and includes name |

---

## 📌 Array Projection Operators

| Operator | Purpose | Example | Description |
|----------|---------|---------|-------------|
| `$`      | Project first matching element in array | `db.users.find({ scores: 90 }, { "scores.$": 1 })` | Returns only first matching score |
| `$elemMatch` | Project array elements that match condition | `db.users.find({}, { scores: { $elemMatch: { $gt: 80 } } })` | Returns only array elements > 80 |
| `$slice` | Limit array elements returned | `db.users.find({}, { scores: { $slice: 2 } })` | Returns first 2 elements of `scores` array |
