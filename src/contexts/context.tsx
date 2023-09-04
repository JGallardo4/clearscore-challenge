import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type IdeasContextProviderProps = {
  children: ReactNode;
};

type IdeasContext = {
  ideas: IIdea[];
  setIdeas: Dispatch<SetStateAction<IIdea[]>>;
};

export const IdeasContext = createContext<IdeasContext | null>(null);

export default function IdeasContextProvider({
  children,
}: IdeasContextProviderProps) {
  const [ideas, setIdeas] = useState<IIdea[]>([
    {
      id: 1,
      title: 'My first idea',
      description: 'This is the first idea',
      lastUpdated: new Date(),
    },
  ]);

  return (
    <IdeasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </IdeasContext.Provider>
  );
}

export function useIdeasContext() {
  const context = useContext(IdeasContext);

  if (!context) {
    throw new Error('IdeasContext should be used within IdeasContextProvider');
  }
  return context;
}
