import ClipLoader from "react-spinners/ClipLoader";
import Cards from "../components/Cards";
import Header from "../components/Header";

const MainPage = ({ allCards, handleSingleCardToggle, isLoading }) => {
  return (
    <>
      <Header>Cards Studio</Header>

      {isLoading ? (
        <div className="my-8 flex justify-center">
          <ClipLoader />
        </div>
      ) : (
        <Cards
          allCards={allCards}
          handleSingleCardToggle={handleSingleCardToggle}
        />
      )}
    </>
  );
};

export default MainPage;
