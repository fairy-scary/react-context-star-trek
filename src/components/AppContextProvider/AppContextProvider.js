import { createContext, useState, useContext } from 'react';
import banana from '../pups/banana-pup.jpg';
import sleepy from '../pups/sleepy-pup.jpg';
import speedy from '../pups/speedy-pup.jpg';
​
export function usePuppyType() {
  return useContext(PupContext);
}
​
export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(speedy);
​
  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  )
};
​
export const PupContext = createContext(); // argument becomes default value