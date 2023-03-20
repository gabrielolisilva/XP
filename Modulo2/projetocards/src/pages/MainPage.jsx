import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import shuffleArray from "../services/shuffleArrays";

import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from "react-icons/ai";

import ClipLoader from "react-spinners/ClipLoader";
import Cards from "../components/Cards";
import Header from "../components/Header";
import CreateEditPost from "../components/CreateEditPost";
import generateId from "../services/generateId";

const MainPage = ({ allCards, setallCards, isLoading }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [createMode, setCreateMode] = useState(true);

  const handleSingleCardToggle = (card) => {
    card.questionShow = !card.questionShow;

    setallCards([...allCards]);
    console.log(card);
  };

  const handleEditCard = (card) => {
    console.log(card);
    setSelectedTab(1);

    setCreateMode(false);
  };

  const handleDeleteCard = (card) => {
    const copiedArray = [...allCards];
    const newArray = copiedArray.filter((items) => items.id !== card.id);

    setallCards(newArray);
  };

  const handleSelectedTab = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const shuffleCards = () => {
    const copyArray = [...allCards];
    const shuffledArray = shuffleArray(copyArray);

    setallCards(shuffledArray);
  };

  const handleEditCreatePost = ({ questionValue, answerValue }) => {
    if (createMode) {
      const newComponent = {
        id: generateId(),
        question: questionValue,
        answer: answerValue,
        questionShow: true,
      };
      const newArray = [newComponent, ...allCards];

      setallCards(newArray);
      setSelectedTab(0);
    } else {
      console.log("Post Editado");
    }
  };

  return (
    <>
      <Header>Cards Studio</Header>

      <Tabs
        className="mt-5 px-2"
        selectedIndex={selectedTab}
        onSelect={handleSelectedTab}
      >
        <TabList>
          <Tab>All posts</Tab>
          <Tab>Create / Edit</Tab>
          <Tab>Posts</Tab>
        </TabList>

        <TabPanel>
          {isLoading ? (
            <div className="my-8 flex justify-center">
              <ClipLoader />
            </div>
          ) : (
            allCards.map((card) => {
              return (
                <div key={card.id} className="border-black border-2 my-4 p-3">
                  <ul>
                    <li>{`Pergunta: ${card.question}`}</li>
                    <li>{`Resposta: ${card.answer}`}</li>
                  </ul>

                  <div className="mt-2 flex items-center gap-2 justify-end">
                    <EditIcon
                      size={22}
                      className="cursor-pointer"
                      onClick={() => handleEditCard(card)}
                    />
                    <DeleteIcon
                      size={22}
                      className="cursor-pointer"
                      onClick={() => handleDeleteCard(card)}
                    />
                  </div>
                </div>
              );
            })
          )}
        </TabPanel>
        <TabPanel>
          <CreateEditPost
            createMode={createMode}
            setCreateMode={setCreateMode}
            handleEditCreatePost={handleEditCreatePost}
          />
        </TabPanel>
        <TabPanel>
          {isLoading ? (
            <div className="my-8 flex justify-center">
              <ClipLoader />
            </div>
          ) : (
            <Cards
              allCards={allCards}
              handleSingleCardToggle={handleSingleCardToggle}
              shuffleCards={shuffleCards}
            />
          )}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default MainPage;
