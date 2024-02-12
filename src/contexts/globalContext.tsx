import { ReactNode, createContext, useContext, useState } from 'react'
import { INTRO_TEXT } from '../constants'
import { cleanHTML } from '../utils'

// Define the shape of your context value
interface GlobalContextValue {
  openLearnMoreModal: boolean
  setOpenLearnMoreModal: React.Dispatch<React.SetStateAction<boolean>>
  response: string
  setResponse: (newResponse: string) => void
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
  const [response, _setResponse] = useState<string>(INTRO_TEXT)

  const setResponse = (newResponse: string) => {
    const cleanResponse = cleanHTML(newResponse)
    console.log(cleanResponse)
    _setResponse(cleanResponse)
  }

  return (
    <GlobalContext.Provider
      value={{
        openLearnMoreModal,
        setOpenLearnMoreModal,
        response,
        setResponse,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
