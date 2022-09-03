import A from "../components/A";

export default function Error({title}) {
  return (
    <>
      <h1>{title}</h1>
      <A title="Home" href="/"/>
    </>
  );
};