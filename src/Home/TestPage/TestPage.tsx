import React from 'react';
import { IonContent, IonPage, IonAvatar } from '@ionic/react';

import SideMenu from '../../Home/sideMenu';
import Header from '../../Home/mainHeader';

import './TestCSS.css';

const Test = () => {
  return (
    <>
      <SideMenu />
      <IonPage className="ion-page" id="main-content">
        <Header />
        <IonContent>
          <IonAvatar>
            <img
              alt="pfp"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Test;
