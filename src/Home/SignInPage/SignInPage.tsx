import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  useIonAlert,
  IonLabel,
  IonList,
  IonBadge,
  IonIcon,
} from '@ionic/react';

import './SignInCSS.css';

import {
  checkmarkCircleOutline as tick,
  closeCircleOutline as cross,
} from 'ionicons/icons';

function useCheckLogin() {
  const [presentAlert] = useIonAlert();

  presentAlert({
    header: 'Invalid name or password',
    buttons: [
      {
        text: 'Retry',
        role: 'retry',
      },
    ],
    onDidDismiss: (e: CustomEvent) => {
      return;
    },
  });
}

function CheckLogin(username: string, password: string) {
  //This function will access the database and check login details
  //Then it will compare the entered data with the provided ones
  //Then return either a successful login with a userID or a failure

  //For now it will return a bool for testing purposes
  if (username !== '' && password !== '') {
    console.log(username);
    console.log(password);
    useCheckLogin();
  }
  return;
}

function SignIn() {
  const [validCheck, setValidCheck] = useState(false);
  const autoFocus = true;
  const inputReq = true;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <IonPage className="ion-page" id="main-content">
        <IonContent>
          <IonList>
            <IonItem fill="outline" id="username-input">
              <IonLabel position="floating">Username</IonLabel>
              <IonInput
                className="detail-input"
                placeholder="Username"
                autocomplete="username"
                autofocus={autoFocus}
                enterkeyhint="next"
                mode="ios"
                required={inputReq}
                onIonInput={(e: any) => setUsername(e.target.value)}
              >
                <IonBadge slot="end" color={!validCheck ? 'danger' : 'success'}>
                  <IonIcon icon={!validCheck ? cross : tick} />
                </IonBadge>
              </IonInput>
            </IonItem>

            <IonItem fill="outline" id="password-input">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                className="detail-input"
                type="password"
                placeholder="Password"
                autocomplete="current-password"
                enterkeyhint="enter"
                mode="ios"
                required={inputReq}
                onIonInput={(e: any) => setPassword(e.target.value)}
              >
                <IonBadge slot="end" color={!validCheck ? 'danger' : 'success'}>
                  <IonIcon icon={!validCheck ? cross : tick} />
                </IonBadge>
              </IonInput>
            </IonItem>
          </IonList>

          <IonButton
            onClick={() => {
              checkLogin(username, password);
            }}
          >
            Click Me
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
}

export default SignIn;
