import { atom } from 'jotai'
import { ErrorType, INTRO_TEXT } from 'utils'

export const aiResponseAtom = atom(INTRO_TEXT)
export const aiResponsePendingAtom = atom(false)
export const aiResponseErrorAtom = atom<ErrorType | null>(null)
export const questionCountAtom = atom<number>(
  () => Number(localStorage.getItem('questionCount')) || 0
)
