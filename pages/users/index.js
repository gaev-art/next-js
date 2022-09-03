import Link from "next/link";

const Users = ({users}) => {
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

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users`);
  const users = await response.json();

  return {
    props: {users},
  };
}