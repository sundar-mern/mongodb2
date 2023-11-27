db.topics.insertMany([
    {   
        topicid: 1,
        topic: "HTML",
        topic_date: new Date("2020-10-15"),
		task:{
				task_date:new Date("2020-10-19")
			}
    },
     {
        topicid: 2,
        topic: "CSS",
        topic_date: new Date("2020-10-24"),
		task:{
				task_date:new Date("2020-10-24")
			}
    },
     {
        topicid: 3,
        topic: "JavaScript",
        topic_date: new Date("2020-10-31"),
		task:{
				task_date:new Date("2020-10-29")
			}
    },
     {
        topicid: 4,
        topic: "ReactJS",
        topic_date: new Date("2020-11-5"),
		task:{
				task_date:new Date("2020-11-1")
			}
    }, 

	{
        topicid: 5,
        topic: "MongoDB",
        topic_date: new Date("2020-11-10"),
		task:{
				task_date:new Date("2020-11-9")
			}
    },
	 {
        topicid: 6,
        topic: "NodeJS",
        topic_date: new Date("2020-11-15"),
		task:{
				task_date:new Date("2020-11-19")
			}
    }
    ])

    // insert tasks

    db.tasks.insertMany(
        [{  
          task_id: 1,
          topicid: 1,
          name: "HTML Newspaper",
          date:new Date("2020-10-15")
        },
        {  
          task_id: 2,
          topicid: 1,
          name: "HTML Social Media Page",
          date:new Date("2020-10-18")
        },
        {  
          task_id: 3,
          topicid: 1,
          name: "HTML",
          date:new Date("2020-10-20")
        },
        {  
          task_id: 4,
          topicid: 2,
          name: "JavaScript",
          date:new Date("2020-10-27")
        },
        {  
          task_id: 5,
          topicid: 3,
          name: "React UI",
          date:new Date("2020-10-29")
        },

        {  
            task_id: 6,
            topicid: 6,
            name: "Mongodb",
            date:new Date("2020-10-28")
          }
        ]
        )

        //insert company drives
        db.company_drives.insertMany([
            {
                company_id: 1,
                drive_date: new Date("2020-10-15"),
                company: "Meta"
            },
           
            {
                company_id: 2,
                drive_date: new Date("2020-10-20"),
                company: "Apple"
            },
             {
                company_id: 3,
                drive_date: new Date("2020-10-26"),
                company: "Amazon"
            },
             {
                company_id: 4,
                drive_date: new Date("2020-10-30"),
                company: "NetFlix"
            },
             {
                company_id: 5,
                drive_date: new Date("2020-11-15"),
                company: "Google"
            }
            ])


    //inser codekata collections
    db.codekata.insertMany([
        {   
            totalProblems: 100, 
            name: "sampath", 
            ProblemSolved: 90 
        },

        { 
            totalProblems: 100,
            name: "kaviarasan", 
            ProblemSolved: 83 
        },

        { 
            totalProblems: 100, 
            name: "dinesh", 
            ProblemSolved: 62 
        },


        { 
            totalProblems: 100, 
            name: "naveen", 
            ProblemSolved: 85 
        },
        { 
            totalProblems: 100, 
            name: "tamiselvan", 
            ProblemSolved: 46
         },


        { 
            totalProblems: 100, 
            name: "Radhakrishnan", 
            ProblemSolved: 80 
        },


        { 
            totalProblems: 100, 
            name: "bhuvani", 
            ProblemSolved: 74 
        },


        { 
            totalProblems: 100, 
            name: "kumar", 
            ProblemSolved: 90 
        },
        { 
            totalProblems: 100, 
            name: "karthi", 
            ProblemSolved: 72 
        },


        { 
            totalProblems: 100, 
            name: "ganesh", 
            ProblemSolved: 90 
        },


        { 
            totalProblems: 100, 
            name: "Giri", 
            ProblemSolved: 50 
        },


        { 
            totalProblems: 100, 
            name: "aswanth", 
            ProblemSolved: 48 
        },


        { 
            totalProblems: 100, 
            name: "gopi", 
            ProblemSolved: 67 
        },


        { 
            totalProblems: 100, 
            name: "dilip", 
            ProblemSolved: 71 
        },
      ]);

        //insert mentors
        db.mentors.insertMany(
            [
            {
            id:1,
            mentor_name : "Ragavan",
            email:"Ragav70@gmail.com",
            mentee_count:10
            },
              {
            id:2,
            mentor_name : "Sivaraj",
            email:"Shivaraj78@gmail.com",
            mentee_count:19
            },
               {
            id:3,
            mentor_name : "Rudhransai",
            email:"Sairudhran@gmail.com",
            mentee_count:25
            },
                {
            id:4,
            mentor_name : "harish",
            email: "hsarish77@gmail.com",
            mentee_count:30
            },


            {
                id:5,
                mentor_name : "Rajvel",
                email: "rajvel45@gmail.com",
                mentee_count:20
            }
            ])

            //insert user collection
            db.users.insertMany([
                {
                    userid: 1,
                    name: "nishanth",
                    email: "nishanth1@gmail.com", 
                    absent_on:[new Date("17-oct-2020")
                    ],
                    company_drives : [],
                    codekata_problems : [1,2,5,7,8],
                    submitted_task : [
                    {
                    task_id :1,
                    submitted_date:new Date("17-oct-2020")
                    }
                    ]
                },
                 {
                    userid: 2,
                    name: "gopal",
                    email: "gopal77@gmail.com",
                    absent_on:[new Date("27-oct-2020")
                    ],
                    company_drives : [1,2],
                    codekata_problems : [1,2,3,4,5,8],
                    submitted_task : [
                    {
                    task_id :5  ,
                    submitted_date:new Date("15-oct-2020")
                    }
                    ]
                },
                 {
                    userid: 3,
                    name: "sundar",
                    email: "sundar1729@gmail.com",
                    absent_on:[],
                    company_drives : [1],
                    codekata_problems : [1,8],
                    submitted_task : [	
                    ]
                },
              {
                    userid: 4,
                    name: "ranjith",
                    email: "ranjith2508@gmail.com",
                    absent_on:[new Date("20-oct-2020")
                    ],
                    company_drives : [2],
                    codekata_problems : [1,2,5,8],
                    submitted_task : [
                    {
                    task_id :2,
                    submitted_date:new Date("17-nov-2020")
                    }
                    ]
                },
                 {
                    userid: 5,
                    name: "ravi",
                    email: "ravi@gmail.com",
                    absent_on:[],
                    company_drives : [1,2],
                    codekata_problems : [1,2],
                    submitted_task : [
                    {
                    task_id :3,
                    submitted_date:new Date("17-nov-2020")
                    }
                    ]
                } 
                ])










