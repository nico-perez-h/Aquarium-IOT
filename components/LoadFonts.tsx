import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
    'playwriteGBS-light': require('../assets/fonts/PlaywriteGBS-Light.ttf'),
    'oxanium': require('../assets/fonts/Oxanium-Bold.ttf')
    // Agrega más variantes si las necesitas
  });
};

const LoadFonts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // O puedes mostrar un loading aquí
  }

  return <>{children}</>; // Rendiriza los hijos una vez que las fuentes están cargadas
};

export default LoadFonts;
