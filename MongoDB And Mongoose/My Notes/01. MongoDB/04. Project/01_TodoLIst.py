from pymongo import MongoClient

# here we have established connection with our mongodb localhost
uri = "mongodb://localhost:27017/"
client = MongoClient(uri)

# now we need database to work on, if it exists we will use this else it will create a new database
db = client.todo_db # this is our database
tasks_collection = db.tasks # this is our collection

# Insert Function
def create_task(description):
    task = {
        "task":description
    }
    result = tasks_collection.insert_one(task)
    print(f'Task created with id: {result.inserted_id}')

# Read Function
def read_tasks():
    tasks = tasks_collection.find()
    print("\nTodos:") # we are printing new line to see clearly (just for formatting purpose)
    for docs in tasks:
        print(f'{docs['task']}')    # here we will get documents as docs, then we are just traversing keys 'task' -> this will provide us the stored values on those keys

# Once it start it will run untill we exit
check=True
while(check):
    print("\n1. Create Task")
    print("\n2. View Task")
    print("\n3. Exit")

    choice = input("Enter your choice: ")   # taking input of choice

    if choice=='1':
        description = input("Enter your task: ")
        create_task(description)
    elif choice == '2':
        read_tasks()
    elif choice == '3':
        check=False
    else:
        print("Provide a valid option")