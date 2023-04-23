import generateId from "./generateId";
import { create, edit, exclude } from "./httpService";

export async function deleteCard(cardId) {
  await exclude(`/questions/${cardId}`);
}

export async function createCard(question, answer) {
  const newCard = create("/questions", {
    id: generateId(),
    question: question,
    answer: answer,
    questionShow: true,
  });

  return newCard;
}

export async function editCard(cardId, cardUpdated) {
  const newEditedCard = edit(`/questions/${cardId}`, cardUpdated);
  return newEditedCard;
}
