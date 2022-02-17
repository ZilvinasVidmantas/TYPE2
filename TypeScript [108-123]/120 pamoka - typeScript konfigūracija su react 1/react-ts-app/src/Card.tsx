import * as React from 'react';

type Props = {
  title: string;
  text: string;
};

const Card: React.FC<Props> = ({ title, text }) => {
  return (
    <article style={{
      width: 200,
      boxShadow: '0 2px 2px 2px #0003',
      borderRadius: 4
    }}>
      <header style={{ padding: '1rem', fontSize: '1.4rem', textTransform: 'capitalize' }}>{title}</header>
      <hr />
      <section style={{ padding: '1rem' }}>{text}</section>
    </article>
  );
};

export default Card;