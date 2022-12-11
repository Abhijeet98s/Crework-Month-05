# Crework-Month-5-Week-2 Task

### Database Name: student_data

### Collection Name: student

## Queries:

### > 1. db.student.find({ })
![](./screenshots/q-1.PNG)


### > 2. db.student.find({year:1998})
![](./screenshots//q-2.PNG)


### 3. db.student.find({year:{$gt:2012})
![](./screenshots//q-3.PNG)


### 4. db.student.find({first_name:'Abhijeet'})
![](./screenshots/q-4.PNG)


### 5. db.student.updateOne({"last_name":"Sharma"},{ $set:{"first_name":"Abhi"}})
![](./screenshots/q-5.PNG)


### 6. db.student.deleteOne({first_name:'August'})
![](./screenshots/q-6.PNG)


### 7. db.student.find({gender:{$in:["Male","Female"]}})
![](./screenshots/q-7.PNG)


### 8. db.student.find({ year: { $gt :2007, $lt:2011}})
![](./screenshots/q-8.PNG)

### 9. db.student.find().sort({'year':1})
![](./screenshots/q-10.PNG)

### 10. db.student.distinct('gender',{"year":2008})
![](./screenshots/q-9.PNG)
