import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import StateContextProvider from './Context/StateContext';
import reducer, { initialState } from './Context/Reducer';

Kommunicate.init("dce8956b201c5879fba835856e49f014", {
  automaticChatOpenOnNavigation: false,
  popupWidget: false
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider reducer={reducer} initialState={initialState} >
        <App/>
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

