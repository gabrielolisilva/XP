import Cards from "../components/Cards";
import Header from "../components/Header";

const MainPage = ({ allCards }) => {
  return (
    <>
      <Header>Cards Studio</Header>
      <Cards allCards={allCards} />
    </>
  );
};

export default MainPage;
