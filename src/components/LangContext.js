
import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from './Translations.json'; // ⚠️ Ensure this path is correct



// Define the localStorage key
const LOCAL_STORAGE_KEY = 'appLang'; 
// Define the default language when nothing is found in storage
const INITIAL_LANG = 'placeholder';

// 1. Create the Context object
export const LangContext = createContext();

// 2. Create the Provider Component
export const LangProvider = ({ children }) => {
  
  // ⭐️ MODIFIED: Initialize state from localStorage or use the default 'placeholder'
  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem(LOCAL_STORAGE_KEY);
    // If a saved language exists and is in the supported list, use it.
    // Otherwise, use 'placeholder'.
    return savedLang || INITIAL_LANG; 
  });

  // ⭐️ ADDED: useEffect to save the language to localStorage whenever currentLang changes
  useEffect(() => {
    // Only save if a real language is selected, not the initial 'placeholder'
    if (currentLang !== INITIAL_LANG) {
      localStorage.setItem(LOCAL_STORAGE_KEY, currentLang);
    }
  }, [currentLang]);


  // Use effect to update the root element (for font styling)
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    // Default to 'en' for the 'lang' attribute if placeholder is selected
    const langCode = currentLang === 'placeholder' ? 'en' : currentLang;

    htmlElement.setAttribute('lang', langCode);
    htmlElement.className = `lang-${langCode}`;
  }, [currentLang]);

  // Translation function accessible globally
  const t = (key) => {
    // Fallback logic: current lang -> en -> key itself
    return translations[key]?.[currentLang] || translations[key]?.['en'] || key;
  };

  // The value exposed to all children components
  const contextValue = {
    currentLang,
    setCurrentLang, // Function to change the language
    t,              // Translation function
    availableLangs: { 
      'placeholder': 'Languages', 
      'en':'English', 
      'te': 'తెలుగు', 
      'hi': 'हिन्दी', 
      'ta': 'தமிழ்',     
      'kn': 'ಕನ್ನಡ'
    }
  };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
};

// 3. Custom hook for easier access (optional, but highly recommended)
export const useLang = () => {
  return useContext(LangContext);
};
