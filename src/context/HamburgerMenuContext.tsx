import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context value
interface HamburgerMenuContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context with the defined type and provide an initial state
const HamburgerMenuContext = createContext<HamburgerMenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

// Create a custom hook to use the context
export const useHamburgerMenu = () => {
  const context = useContext(HamburgerMenuContext);
  if (!context) {
    throw new Error(
      "useHamburgerMenu must be used within a HamburgerMenuProvider"
    );
  }
  return context;
};

// Define the type of props for HamburgerMenuProvider
interface HamburgerMenuProviderProps {
  children: ReactNode; // children prop should be of type ReactNode
}

// Create a context provider component
export const HamburgerMenuProvider: React.FC<HamburgerMenuProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HamburgerMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
};
