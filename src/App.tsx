import React from 'react';
import { setupIonicReact, IonApp, IonPage } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Feed from './mainScroll';
import SideMenu from './sideMenu';
import Header from './mainHeader';

setupIonicReact({
  mode: 'ios',
});

//https://stackblitz.com/edit/ionic-react-menu-hfudwc?file=src%2FApp.tsx,src%2Ftheme%2Fvariables.css
const App: React.FC = () => (
  <IonApp>
    <SideMenu />

    <IonPage className="ion-page" id="main-content">
      <Header />
      <Feed />
    </IonPage>
  </IonApp>
);

export default App;
