import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
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
import { useHistory } from 'react-router-dom';

function checkLogin(username: string, password: string) {
  //This function will access the database and check login details
  //Then it will compare the entered data with the provided ones
  //Then return either a successful login with a userID or a failure

  //For now it will return a bool for testing purposes
  if (username === '' || password === '') {
    return false;
  }
  console.log(username);
  console.log(password);
  return true;
}

//{setLoginTrue?: any}
//setLoginTrue

//I think I want to convert this either to a class (yuck) or a function (ugh fine)
//Either way I need to pass in the setLoginTrue function as a parameter but the RouteComponentProps on the FunctionComponent type are getting distinctly in the way
//This is a problem for another time...

//That time is now I guess :(

function SignIn() {
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [usernameCheck, setUsernameCheck] = useState(false);
  const autoFocus = true;
  const inputReq = true;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const passwordRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,20}$');

  const usernameRegex = new RegExp('^(?!.*..)(?!.*.$)[^W][w.]{0,29}$');

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
                onIonChange={(u: any) => {
                  if (usernameRegex.test(u.target.value)) {
                    setUsernameCheck(true);
                    setUsername(u.target.value);
                  } else {
                    setUsernameCheck(false);
                  }
                }}
              >
                <IonBadge
                  slot="end"
                  color={!usernameCheck ? 'danger' : 'success'}
                >
                  <IonIcon icon={!usernameCheck ? cross : tick} />
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
                onIonChange={(p: any) => {
                  if (passwordRegex.test(p.target.value)) {
                    setPasswordCheck(true);
                    setPassword(p.target.value);
                  } else {
                    setPasswordCheck(false);
                  }
                }}
              >
                <IonBadge
                  slot="end"
                  color={!passwordCheck ? 'danger' : 'success'}
                >
                  <IonIcon icon={!passwordCheck ? cross : tick} />
                </IonBadge>
              </IonInput>
            </IonItem>
          </IonList>

          <IonButton
            onClick={() => {
              if (checkLogin(username, password)) {
                //redirect to feed page
                //props.history.push('/feed');
                //
                //setLoginTrue.call();
                return history.push('/feed');
                //
                //return setLoginTrue;
              } else {
                //fail login
                setPasswordCheck(!passwordCheck);
              }
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

//  next step:
//
//https://ionicframework.com/docs/api/input#helper--error-text
//
//
