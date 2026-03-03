import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image } from 'spectacle';
import customTheme from './theme/theme';
import Image1 from './assets/1.webp'; // Eksempel på bildeimport
import Image2 from './assets/2.webp'; // Eksempel på bildeimport
import Image3 from './assets/3.webp'; // Eksempel på bildeimport
import Image4 from './assets/4.webp'; // Eksempel på bildeimport

function App() {
  return (
    <Deck theme={customTheme} template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Presentasjon om 2 uke praksis min</Heading>
          <Text>Første uke min var i EA Smith bedrift og andre var NTNU Gløshaugen</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: EAS */}
      <Slide>
        <Heading>EA Smith</Heading>
        <Text>Jeg har vært 1 uke i EA Smith bedrift, og de var kjempebra!</Text>
        <FlexBox justifyContent="center">
          <Image src={Image1} width="400px" />
        </FlexBox>
      </Slide>

      {/* Slide 3: Uke 1 — aktiviteter */}
      <Slide>
        <Heading>Uke 1 — EAS</Heading>
        <Text>Hva vi har gjordet?</Text>
        <Text>Jeg jobbet med å forstå prosessen og strukturen i EA Smiths systemer. Også på slutt av uke jeg har presentert noen oppgaver.</Text>
        <Text>Oppgaver: hvordan ny ansatt skal sette opp systemet sitt</Text>
        <Text>Oppgaver: Passordpolicy og flytt serverrome av EAS til Dora</Text>
        <FlexBox justifyContent="center">
          <Image src={Image2} width="300px" />
        </FlexBox>
      </Slide>

      {/* Slide 4: Uke 2 — aktiviteter */}
      <Slide>
        <Heading>Uke 2 — NTNU Gløshaugen</Heading>
        <Text>Jeg jobbet med å lære mer om systemet og hvordan man jobber i et akademisk miljø.</Text>
        <FlexBox justifyContent="center">
        
        </FlexBox>
      </Slide>

      {/* Slide 5: Oppsummering */}
      <Slide>
        <Heading>Oppsummering</Heading>
        <Text>To uker med praktisk erfaring: kommunikasjon, verktøy og reell kode.</Text>
        <FlexBox justifyContent="center">
          <Image src={Image4} width="300px" />
        </FlexBox>
      </Slide>

    </Deck>
  );
}

export default App;