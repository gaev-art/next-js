import Link from "next/link";

const User = ({users}) => {

  return (
    <>
      <h1>USERS</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.API_HOST}/users`);
  const users = await response.json();

  return {
    props: {users}, // will be passed to the page component as props
  };
}