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
              <IonIcon

                src="https://stackblitz.com/files/angular-a1fbmp/github/KSherwoodd/ControlNews/main/src/theme/Hamburger_icon.svg"
              ></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>Title</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
