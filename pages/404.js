import A from "../components/A";
import MainContainer from "../components/MainContainer";

export default function Error({title}) {
  return(
    <MainContainer>
      <h1>{title}</h1>
      <A title='Home' href='/'/>
    </MainContainer>
  )
};