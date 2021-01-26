import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import {useRouter} from 'next/router';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px
  margin auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const  [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz sobre a Disney</title >
      </Head>
      <QuizContainer>
        <QuizLogo />
         <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // State
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes sobre a Disney</h1>

            <p>aqui será um quiz sobre a Disney</p>
          </Widget.Content>
        </Widget> 
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ReisAline" />
    </QuizBackground>
  );
}