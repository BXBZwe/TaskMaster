import React, { useState } from "react";
import Link from 'next/link';
import Head from "next/head";

export default function homepage({ projects, userprofile}){
    function deleteproject(id){
        fetch(`/api/taskmaster/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(false);
        });
    }
    
    return (
        <>
            <main>
                <div className="home-page">
                    <br></br>
                    <h3>My Projects</h3>
                    <br></br>
                    <Link href="/taskmaster/add">Add A New Project</Link>
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map(project => {
                                    return (
                                        <tr key={project._id}>
                                            <td>
                                                <Link href={`/taskmaster/${project._id}`}>
                                                    {project.name}
                                                </Link>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteproject(project._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                </div>
            </main>
            <style>
                {`
                
.home-page {
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* changed from center to flex-start */
    height: 100vh;
    background-image: url(../img/bg.jpg);
    background-size: cover;
    background-position: center;
  }
  
  table {
    border-collapse: collapse;
    margin-top: 1rem;
    width: 80%;
    max-width: 800px;
    
  }
  
  table,
  th,
  td {
    border: 1px solid #333;
    text-align: center;
  }
  
  th,
  td {
    padding: 0.5rem;
  }
  
  th {
    background-color: #333;
    color: white;
  }
  
  button {
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #2e7d32;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer
  }
  
  button:hover {
    background-color: #555;
  }
  
  
                `}
            </style>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://web-dev-project2-backend.vercel.app/api/taskmaster/`)
    const projects = await res.json()
    // console.debug('blog 1', blogs)
    return { props: { projects} }
  }


