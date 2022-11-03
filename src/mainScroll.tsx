import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonDatetime,
  IonContent,
} from '@ionic/react';

import './main.css';

function Feed() {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content.
          <IonDatetime placeholder="Select Date"></IonDatetime>
          <IonButton fill="clear">Start</IonButton>
        </IonCardContent>
      </IonCard>
    );
  }
  return <IonContent>{cards}</IonContent>;
}
export default Feed;
