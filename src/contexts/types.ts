export interface GlobalContextValue {
  openLearnMoreModal: boolean
  setOpenLearnMoreModal: React.Dispatch<React.SetStateAction<boolean>>
  serverConnectionPending: boolean
  serverConnectionError: unknown
  threadId: string
  sendMessage: (event: React.FormEvent) => void
  setUserInput: React.Dispatch<React.SetStateAction<string>>
  userInput: string
  aiResponsePending: boolean
  aiResponseError: unknown
  aiResponse: string | undefined
  chatNeverUsed: boolean
}

export interface NewMessageMutationVariables {
  threadId: string
  userInput: string
}
