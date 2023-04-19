
import express  from "express";
const app=express();
const students = [
    {
      id: 1,
      name: "dai",
      city: "Sadat",
    },
    {
      id: 2,
      name: "mai",
      city: "shebin",
    },
    {
      id: 3,
      name: "omar",
      city: "tanta",
    },
    {
      id: 4,
      name: "Mohamed",
      city: "Cairo",
    },
    {
      id: 5,
      name: "Mahmoud",
      city: "tata",
    },
  ];

const studentFunction =(request,response)=>{

    let output = "<ol>";
    for (let i=0; i < students.length; i++) {
    const student = students[i];
    output += "<li  style='font-size:15px; font-weight:bold; padding-bottom:10px ;'>" + student.name + "</li>";
    }
    output += "</ol>";
    response.send(output);

};
app.get("/students",studentFunction)


app.listen(5000);