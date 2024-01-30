import { ReactNode, createContext, useContext, useState } from 'react'

// Define the shape of your context value
interface GlobalContextValue {
  openLearnMoreModal: boolean
  setOpenLearnMoreModal: React.Dispatch<React.SetStateAction<boolean>>
}

// Create the context
const GlobalContext = createContext<GlobalContextValue | null>(null)

// Create a custom hook to access the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider')
  }
  return context
}

const GlobalContextProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [openLearnMoreModal, setOpenLearnMoreModal] = useState(false)

  return (
    <GlobalContext.Provider value={{ openLearnMoreModal, setOpenLearnMoreModal }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
