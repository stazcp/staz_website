import { atom } from 'jotai'
import { ErrorType, INTRO_TEXT } from 'utils'

export const aiResponseAtom = atom(INTRO_TEXT)
export const aiResponsePendingAtom = atom(false)
export const aiResponseErrorAtom = atom<ErrorType | null>(null)
