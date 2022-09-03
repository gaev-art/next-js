export default function User ({user}) {
  return (
    <>
      {user.statusCode
        ? <h1>{user.message}</h1>
        :<h1>{user.name}</h1>}
    </>
  );
};


export async function getServerSideProps({params}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user},
  }
}
