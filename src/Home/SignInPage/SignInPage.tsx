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

function SignIn() {
  const [presentAlert] = useIonAlert();
  const [validCheck, setValidCheck] = useState(false);
  const autoFocus = true;

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
              >
                <IonBadge slot="end" color={!validCheck ? 'danger' : 'success'}>
                  <IonIcon icon={!validCheck ? cross : tick} />
                </IonBadge>
              </IonInput>
            </IonItem>
          </IonList>
          {}
          {}
          <IonButton
            onClick={() =>
              presentAlert({
                header: 'Invalid name or password',
                buttons: [
                  {
                    text: 'Retry',
                    role: 'retry',
                  },
                ],
                onDidDismiss: (e: CustomEvent) => setValidCheck(!validCheck),
              })
            }
          >
            Click Me
          </IonButton>
        </IonContent>
      </IonPage>
    </>
  );
}

export default SignIn;