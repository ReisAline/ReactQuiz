import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function IniciaQuiz() {

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Pergunta</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
   

        <Widget>
          <Widget.Content>
            <h1>Pergunta??</h1>
            

            <p>aqui será um quiz sobre a Disney</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ReisAline" />
    </QuizBackground>
  );
}