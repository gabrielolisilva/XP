import React from "react";
import Button from "./Button";

const CreateEditPost = ({
  createMode,
  setCreateMode,
  questionValue,
  setQuestionValue,
  answerValue,
  setAnswerValue,
  handleEditCreatePost,
}) => {
  const color = createMode ? "bg-green-500" : "bg-yellow-200";
  const fontSizeLabel = "text-xl";

  const createCardButton = () => {
    handleCleanInputs();
    setCreateMode(true);
  };

  const handleCleanInputs = () => {
    setQuestionValue("");
    setAnswerValue("");
  };

  return (
    <>
      <div className={`${color} mt-2 flex flex-col space-y-4 p-3`}>
        <Button
          bgColor="bg-gray-500"
          title="Create Post"
          justify="justify-left"
          onClickMethod={createCardButton}
        />
        <label htmlFor="question" className={fontSizeLabel}>
          Pergunta:
        </label>
        <input
          className="border h-8 pl-1 text-lg"
          type="text"
          id="question"
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
        />

        <label htmlFor="answer" className={fontSizeLabel}>
          Resposta:
        </label>
        <input
          className="border h-8 pl-1 text-lg"
          type="text"
          id="answer"
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />

        <div className="flex space-x-6">
          <Button
            bgColor="bg-red-400"
            title="Limpar"
            onClickMethod={handleCleanInputs}
          />
          <Button
            bgColor="bg-green-400"
            title="Enviar"
            onClickMethod={handleEditCreatePost}
          />
        </div>
      </div>
    </>
  );
};

export default CreateEditPost;
