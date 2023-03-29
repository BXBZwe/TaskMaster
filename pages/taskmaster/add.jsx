import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Head from "next/head";

export default function AddProjectpage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveproject = async (data) => {
        const response = await fetch('/api/taskmaster', {
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
            alert("project is saved")
            window.location.href = "/taskmaster"
        }
        console.log(result)
        setData(JSON.stringify(data))
    }

    return (
        <div className="bg">
        <div className="container">
          <h1 className="title">New Project</h1>
          <form onSubmit={handleSubmit(saveproject)} className="form">
            <table className="table">
              <tbody>
                <tr>
                  
                  <td>
                    <input id="name" {...register("name", { required: true })} placeholder="Project Name" />
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="submit" className="button" />
            <button type="button" className="button"><Link href="/taskmaster" >Back</Link></button>
            <p>{data}</p>
          </form>
          <style>
            {`


.bg {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
}

.container {
  margin: auto;
  max-width: 500px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.title {
  margin-top: 0;
  text-align: center;
  color: #ffff;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.table {
  width: 100%;
  margin-bottom: 20px;
}

.headingtext {
  color: #000000;
  margin-bottom: 10px;
  font-weight: bold;
  display: block;
}

label {
  font-weight: bold;
  display: block;

}

input {
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
  margin-top: 10px;
  width: 100%;
  max-width: 200px;
  text-align: center;
}

.button:hover {
  background-color: #00698c;
}

.back-btn {
  font-size: 14px;
  color: #ffff;
  text-align: center;
  
}

.back-link {
  color: #ffff;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.message {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  text-align: center;
}

            `}
          </style>
        </div>
        </div>
      );
}