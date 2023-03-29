import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Tasks Master</title>
      </Head>
      <h1 className="name-title">Tasks Master</h1>
      <h1>Welcome! Please Log in or Sign up to see the contents</h1>

      <div className="buttons-container">
        <Link className="taskmaster-link" href="/register">
          Sign Up
        </Link>
        <div className="space"></div>
        <Link className="taskmaster-link" href="/loginpage/login">
          Log In
        </Link>
      </div>

      <style jsx>{`
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .name-title {
          color: green;
          margin-bottom: 20px;
        }

        .buttons-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .space {
          width: 20px;
        }

        .buttons-container a:first-child {
          font-size: 24px;
        }

        .buttons-container a:last-child {
          font-size: 20px;
        }

        .taskmaster-link {
          background-color: green;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }

        .taskmaster-link:hover {
          background-color: darkgreen;
          cursor: pointer;
        }

        @media (max-width: 480px) {
          /* On small screens, show the buttons stacked vertically */
          .buttons-container {
            flex-direction: column;
          }
          .taskmaster-link {
            margin-right: 0;
            margin-bottom: 10px;
          }
          .space {
            display: none;
          }
          .buttons-container a:first-child {
            font-size: 20px;
          }
          .buttons-container a:last-child {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
