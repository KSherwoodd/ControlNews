import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenuToggle,
  IonIcon,
  IonButtons,
  IonButton,
} from '@ionic/react';

import './main.css';

function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" name="menu"></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>Title</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
