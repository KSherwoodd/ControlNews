import React from 'react';
import { IonAvatar, IonPage, IonContent } from '@ionic/react';

import SideMenu from '../sideMenu';
import Header from '../mainHeader';

const Profile = () => (
  <>
    <SideMenu />
    <IonPage className="ion-page" id="main-content">
      <Header />
      <IonContent>
        <div className="profile-grid-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <IonAvatar>
            <img
              alt="pfp"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </IonContent>
    </IonPage>
  </>
);

export default Profile;

/*
        <IonAvatar>
          <img
            alt="pfp"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
*/
