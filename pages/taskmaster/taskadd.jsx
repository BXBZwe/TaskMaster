import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";


export default function AddTaskPage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveTask = async (data) => {
        const response = await fetch('/api/tasks', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
          });
        const result = await response.json();
        if (result.error) {
            alert("Error: " + result.error)
        } else {
            alert("Task saved")
            window.location.href = "/taskmaster"
        }
        console.log(result)
        setData(JSON.stringify(data))
    }

    return (
        <div className="bg">
        <div className="container">
          <h1 className="title">New Task</h1>
          <form onSubmit={handleSubmit(saveTask)} className="form">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <label className = "headingtext" htmlFor="name">Task name</label>
                  </td>
                  <td>
                    <input id="name" {...register("taskname", { required: true })} placeholder="Task Name" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className = "headingtext" htmlFor="description">Description</label>
                  </td>
                  <td>
                    <input id="description" {...register("description", { required: true })} placeholder="Description" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className = "headingtext" htmlFor="prioritylvl">Priority Level</label>
                  </td>
                  <td>
                    <select id="prioritylvl" {...register("prioritylvl")} placeholder="Priority Level">
                      <option value="">Select</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>

                  </td>
                </tr>
                <tr>
                  <td>
                    <label className = "headingtext" htmlFor="completestatus">Completion Status</label>
                  </td>
                  <td>
                    <select id="completestatus" {...register("completestatus")} placeholder="Completion Status">
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" className="button" />
            <button type="button" className="button-back"><Link href="/taskmaster"  >Back</Link></button>
            <p>{data}</p>
          </form>
          <style>
            {`


.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
}

.container {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
}

.title {
  margin-top: 0;
  text-align: center;
  color: #fffff;
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.table {
  width: 100%;
}

.headingtext {
  color: #fffff;
  margin-bottom: 10px;
  font-weight: bold;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 10px;
}

input,
select {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 10px;
  background-color: #008CBA;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
}

.button:hover {
  background-color: #00698c;
}

.back-btn {
  font-size: 14px;
  color: #ffff;
  text-align: center;
  margin-top: 20px;
}

.back-link {
  color: #ffff;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
.button-back {
  padding: 10px;
  background-color: #008CBA;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  
}

.button-back:hover {
  background-color: #00698c;
}


            `}
          </style>
        </div>
        </div>
      );
}