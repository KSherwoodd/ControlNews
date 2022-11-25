import React from 'react';
import { IonPage } from '@ionic/react';

import SideMenu from '../sideMenu';
import Header from '../mainHeader';

const Profile = () => (
  <>
    <SideMenu />
    <IonPage className="ion-page" id="main-content">
        <Header />
    </IonPage>
  </>
);

export default Profile;
