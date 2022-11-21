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

function Profile() {
  const cards = [];
  for (let i = 0; i < 2; i++) {
    cards.push(
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>News Title</IonCardTitle>
          <IonCardSubtitle>News Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          The article here would be very important, if there was one to show.
          <IonDatetime placeholder="Select Date"></IonDatetime>
          <IonButton fill="outline">Start</IonButton>
        </IonCardContent>
      </IonCard>
    );
  }
  return <IonContent>{cards}</IonContent>;
}
export default Profile;
