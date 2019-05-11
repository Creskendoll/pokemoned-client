import React from 'react';
import './style/App.css';
import ImageBox from "./components/ImageBox";
import SettingsBox from "./components/SettingsBox";
import ComponentContainer from "./components/ComponentContainer";

const App: React.FC = () => {
  return (
      <ComponentContainer>
        <ImageBox />
        <SettingsBox />
      </ComponentContainer>
  );
}

export default App;
