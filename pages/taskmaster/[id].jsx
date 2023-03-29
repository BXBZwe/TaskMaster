import Head from "next/head";
import Link from "next/link";

export default function Project({ project, tasks }) {
  console.log("project 2", project);
  if (!project)
    return (
      <div>
        <p>Project not found</p>
        <Link href="/taskmaster">Back</Link>
      </div>
    );
  function deletetask(id){
        fetch(`/api/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(false);
        });
    }

  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>
      <div className="container">
        <h1>{project.name}</h1>
        <main>
                <div className="home-page">
                    <br></br>
                    <h3>My Tasks</h3>
                    <br></br>
                    <div className="tasknew">
                      <Link href="/taskmaster/taskadd">Add A New Task</Link>
                    </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Description</th>
                                    <th>Priority Level</th>
                                    <th>Completion Status</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map(task => {
                                    return (
                                        <tr key={task._id}>
                                             <td>
                                             {task.taskname}
                                            </td>
                                            <td>{task.description}</td>
                                            <td>{task.prioritylvl}</td>
                                            <td>{task.completestatus}</td>
                                            <td>
                                                <button>
                                                  <Link href={`/taskmaster/update/${task._id}`}>Update</Link>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => deletetask(task._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <br></br>
                        <div className="back-link">
                          <Link href="/taskmaster">Back</Link>
                        </div>
                </div>
            </main>
      </div>

      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        
        h1 {
          font-size: 4rem;
          margin-bottom: 2rem;
          color: #2e7d32;
        }
        
        .back-link {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          color: #fff;
          background-color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          text-decoration: none;
        }
        
        .back-link:hover {
          background-color: #666;
        }
        
        .home-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .home-page h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .tasknew {
          margin: 0.5rem;
          padding: 0.5rem;
          background-color: #2e7d32;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 1.5rem;
        }
        .home-page a:hover {
          background-color: #666;
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
          cursor: pointer;
        }
        
        button:hover {
          background-color: #333;
        }

        
      `}</style>
    </>
  );
}


export async function getServerSideProps({ params }) {
  console.debug("params", params);
  const res = await fetch(`http://web-dev-project2-backend.vercel.app/api/taskmaster/${params.id}`);
  const project = await res.json();
  console.debug("project 1", project);
  const result = await fetch(`http://web-dev-project2-backend.vercel.app/api/tasks?projectID=${params.id}`);
  const tasks = await result.json();
  console.debug("task 1", tasks);
  return { props: { project, tasks, projectID: params.id} };
}
