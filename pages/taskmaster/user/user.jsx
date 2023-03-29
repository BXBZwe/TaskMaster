import Head from "next/head";
import Link from "next/link";

export default function Userprofile({ userprofile }) {
  console.log("supplier 2", userprofile);
  if (!userprofile)
    return (
      <div>
        <p>User not found</p>
        <Link href="/taskmaster">Back</Link>
      </div>
    );

  return (
    <>
      <Head>
        <title>{userprofile.name}</title>
      </Head>
      <div className="container">
        <h1>{userprofile.name}</h1>
        <p>{userprofile.email}</p>
        <Link href="/taskmaster">
          <a className="back-link">Back</a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        h1 {
          font-size: 4rem;
          margin-bottom: 2rem;
          color: #333;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #666;
        }

        .back-link {
          padding: 1rem 2rem;
          margin-top: 2rem;
          font-size: 1.5rem;
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
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.debug("params", params);
  const res = await fetch(`http://web-dev-project2-backend.vercel.app/api/crediential/${params.id}`);
  const userprofile = await res.json();
  console.debug("User ", userprofile);
  return { props: { userprofile } };
}