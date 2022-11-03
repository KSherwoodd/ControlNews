import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';

import './main.css';

function SideMenu() {
  return (
    <IonMenu content-id="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonListHeader>Navigate</IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonItem button>
              <IonIcon name="home"></IonIcon>
              <IonLabel>Feed</IonLabel>
            </IonItem>

            <IonItem button>
              <IonIcon name="home" />
              <IonLabel>Profile</IonLabel>
            </IonItem>

            <IonItem button>
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default SideMenu;
