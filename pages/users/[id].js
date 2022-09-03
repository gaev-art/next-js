import {useRouter} from "next/router";
import Error from "../404";

export async function getServerSideProps({params}) {
  const response = await fetch(`http://localhost:3000/api/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user}
  };
}

export default function ({user}) {
  const {query} = useRouter();
  if (user.statusCode === 404) {
    return (
      <Error title={`user with id ${query.id} not found`} />
    );
  }


  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};



