import * as React from 'react';

type Props = {
  title: string;
  text: string;
};

const Card: React.FC<Props> = ({ title, text }) => {
  return (
    <article>
      <header>{title}</header>
      <section>{text}</section>
    </article>
  );
};

export default Card;