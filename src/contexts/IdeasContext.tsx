import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
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
      id: 0,
      title: 'b',
      description: 'This is the first idea',
      lastUpdated: new Date('1995-01-17T03:24:00'),
    },
    {
      id: 1,
      title: 'c',
      description: 'This is the first idea',
      lastUpdated: new Date('1995-02-17T03:24:00'),
    },
    {
      id: 2,
      title: 'a',
      description: 'This is the first idea',
      lastUpdated: new Date('1995-03-17T03:24:00'),
    },
  ]);

  useEffect(() => {
    const savedIdeas = localStorage.getItem('ideas');
    const initialValue = JSON.parse(savedIdeas as string);
    setIdeas(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('ideas', JSON.stringify(ideas));
  }, [ideas]);

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
