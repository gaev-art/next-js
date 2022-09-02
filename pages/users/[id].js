import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({user}) {
  const {query} = useRouter();
  return (
    <MainContainer>
      <h1>user with id {query.id}</h1>
      <div>{user.name}</div>
    </MainContainer>
  );
};


export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user}, // will be passed to the page component as props
  }
}
