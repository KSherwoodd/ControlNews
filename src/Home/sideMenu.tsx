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

import { home, person, cog } from 'ionicons/icons';

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
            <IonItem href="./ProfilePage/ProfilePage.tsx" button>
              <IonIcon icon={home} />
              <IonLabel> Feed</IonLabel>
            </IonItem>

            <IonItem button>
              <IonIcon icon={person} />
              <IonLabel> Profile</IonLabel>
            </IonItem>

            <IonItem button>
              <IonIcon icon={cog} />
              <IonLabel> Settings</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default SideMenu;
