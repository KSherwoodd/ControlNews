import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/react';

import { add } from 'ionicons/icons';

function Test() {
  const [items, setItems] = useState<String[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 20; i++) {
      newItems.push('Item' + (items.length + i));
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    // eslint-disable-next-line
    generateItems();
  }, []);

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem>
            <IonIcon icon={add} />
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(event) => {
          generateItems();
          setTimeout(() => event.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent loadingSpinner="bubbles" />
      </IonInfiniteScroll>
    </IonContent>
  );
}

export default Test;
