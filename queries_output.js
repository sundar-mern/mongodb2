// 1st.Query---Find all the topics and tasks which are thought in the month of October:

db.topics.find({
    $and:[{topic_date:{$gte:ISODate("2020-10-15T00:00:00Z"),$lte:ISODate("2020-10-31T00:00:00Z")}},
    {"task.task_date":{$gte:ISODate("2020-10-15T00:00:00Z"),$lte:ISODate("2020-10-31T00:00:00Z")}}]
}).pretty()

// output

// [
//     {
//       _id: ObjectId("656498a38fcec0b0cfbded0c"),
//       topicid: 1,
//       topic: 'HTML',
//       topic_date: ISODate("2020-10-15T00:00:00.000Z"),
//       task: { task_date: ISODate("2020-10-19T00:00:00.000Z") }
//     },
//     {
//       _id: ObjectId("656498a38fcec0b0cfbded0d"),
//       topicid: 2,
//       topic: 'CSS',
//       topic_date: ISODate("2020-10-24T00:00:00.000Z"),
//       task: { task_date: ISODate("2020-10-24T00:00:00.000Z") }
//     },
//     {
//       _id: ObjectId("656498a38fcec0b0cfbded0e"),
//       topicid: 3,
//       topic: 'JavaScript',
//       topic_date: ISODate("2020-10-31T00:00:00.000Z"),
//       task: { task_date: ISODate("2020-10-29T00:00:00.000Z") }
//     }
//   ]


// 2nd.Query---Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020:

db.company_drives.find({
    drive_date:{$gte:ISODate("2020-10-15T00:00:00Z"),$lte:ISODate("2020-10-31T00:00:00Z")}
}).pretty()

// output

// [
//     {
//       _id: ObjectId("656498a68fcec0b0cfbded17"),
//       company_id: 1,
//       drive_date: ISODate("2020-10-15T00:00:00.000Z"),
//       company: 'Meta'
//     },
//     {
//       _id: ObjectId("656498a68fcec0b0cfbded18"),
//       company_id: 2,
//       drive_date: ISODate("2020-10-20T00:00:00.000Z"),
//       company: 'Apple'
//     },
//     {
//       _id: ObjectId("656498a68fcec0b0cfbded19"),
//       company_id: 3,
//       drive_date: ISODate("2020-10-26T00:00:00.000Z"),
//       company: 'Amazon'
//     },
//     {
//       _id: ObjectId("656498a68fcec0b0cfbded1a"),
//       company_id: 4,
//       drive_date: ISODate("2020-10-30T00:00:00.000Z"),
//       company: 'NetFlix'
//     }
//   ]



// 3rd.Query---Find all the company drives and students who are appeared for the placement:

db.users.aggregate([{
    $lookup:{
        from:"company_drives",
        localField:"company_drives",
        foreignField: "company_id",
        as: "company_drives"
    }
},{$project:{name:true,_id:false,email:true,"company_drives.company":true}}]).pretty()

//output
// [
//     {
//       name: 'nishanth',
//       email: 'nishanth1@gmail.com',
//       company_drives: []
//     },
//     {
//       name: 'gopal',
//       email: 'gopal77@gmail.com',
//       company_drives: [ { company: 'Meta' }, { company: 'Apple' } ]
//     },
//     {
//       name: 'sundar',
//       email: 'sundar1729@gmail.com',
//       company_drives: [ { company: 'Meta' } ]
//     },
//     {
//       name: 'ranjith',
//       email: 'ranjith2508@gmail.com',
//       company_drives: [ { company: 'Apple' } ]
//     },
//     {
//       name: 'ravi',
//       email: 'ravi@gmail.com',
//       company_drives: [ { company: 'Meta' }, { company: 'Apple' } ]
//     }
//   ]



// 4th.Query---Find the number of problems solved by the user in codekata:

db.codekata.find().forEach(function (value) {
    print("Name : " + value.name);
    print("Problem Solved : " + value.ProblemSolved + " out of 100 problem");
  });
  
  //output

//   Name : sampath
// Problem Solved : 90 out of 100 problem
// Name : kaviarasan
// Problem Solved : 83 out of 100 problem
// Name : dinesh
// Problem Solved : 62 out of 100 problem
// Name : naveen
// Problem Solved : 85 out of 100 problem
// Name : tamiselvan
// Problem Solved : 46 out of 100 problem
// Name : Radhakrishnan
// Problem Solved : 80 out of 100 problem
// Name : bhuvani
// Problem Solved : 74 out of 100 problem
// Name : kumar
// Problem Solved : 90 out of 100 problem
// Name : karthi
// Problem Solved : 72 out of 100 problem
// Name : ganesh
// Problem Solved : 90 out of 100 problem
// Name : Giri
// Problem Solved : 50 out of 100 problem
// Name : aswanth
// Problem Solved : 48 out of 100 problem
// Name : gopi
// Problem Solved : 67 out of 100 problem
// Name : dilip
// Problem Solved : 71 out of 100 problem



// 5th.Query---Find all the mentors with who has the mentee's count more than 15:

db.mentors.find({mentee_count:{$gte:15}}).pretty()

//output
// [
//     {
//       _id: ObjectId("656498aa8fcec0b0cfbded2b"),
//       id: 2,
//       mentor_name: 'Sivaraj',
//       email: 'Shivaraj78@gmail.com',
//       mentee_count: 19
//     },
//     {
//       _id: ObjectId("656498aa8fcec0b0cfbded2c"),
//       id: 3,
//       mentor_name: 'Rudhransai',
//       email: 'Sairudhran@gmail.com',
//       mentee_count: 25
//     },
//     {
//       _id: ObjectId("656498aa8fcec0b0cfbded2d"),
//       id: 4,
//       mentor_name: 'harish',
//       email: 'hsarish77@gmail.com',
//       mentee_count: 30
//     },
//     {
//       _id: ObjectId("656498aa8fcec0b0cfbded2e"),
//       id: 5,
//       mentor_name: 'Rajvel',
//       email: 'rajvel45@gmail.com',
//       mentee_count: 20
//     }
//   ]



// 6th.Query---Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.find( { $or: [ { absent_on: { $exists: true, $ne: [] }}, { submitted_task: { $exists: true, $ne: [] }} ] } ).count()

//output

//4