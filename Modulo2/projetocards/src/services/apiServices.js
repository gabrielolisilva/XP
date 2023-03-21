import generateId from "./generateId";
import { getUrl, create, edit, exclude } from "./httpService";

export async function getData() {
  await getUrl("/questions");
}

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

export async function editCard(card, question, answer) {
  const newEditedCard = edit("/questions", {
    ...card,
    question: question,
    answer: answer,
  });
  return newEditedCard;
}
