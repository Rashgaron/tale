import { useState } from "react";
import styles from "./home.module.css";
import OpenAI from "openai";

export const Home = async () => {
  const { homeContainer, title, cardElement, listCardContainer } = styles;
  const [selectedTopic, setSelectedTopic] = useState<string>();
  console.log("Selected Topic: ", selectedTopic);
  const topics: string[] = [
    "cats",
    "dogs",
    "ducks",
    "magic",
    "burger",
    "disney",
  ];

  const handleClickCard = (element: string) => {
    setSelectedTopic(element);
  };

  const Card = ({ element }: { element: string }) => {
    return (
      <div className={cardElement} onClick={() => handleClickCard(element)}>
        <p>{element}</p>
      </div>
    );
  };

  const ListCards = ({ elements }: { elements: string[] }) => {
    return (
      <div className={listCardContainer}>
        {elements.map((x) => (
          <Card key={x} element={x} />
        ))}
      </div>
    );
  };

  const requestTale = () => {

  }

const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-5",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);
  return (
    <div className={homeContainer}>
      <h1 className={title}>Daily Tale</h1>
      <p>Please, choose the topic of the tale that you want</p>
      <ListCards elements={topics} />
      <button disabled={!selectedTopic} onClick={requestTale}>Validate</button>
    </div>
  );
};
