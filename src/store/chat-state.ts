import { atom } from 'jotai'
import { ErrorType, INTRO_TEXT } from 'utils'
import { atomWithStorage } from 'jotai/utils'

export const aiResponseAtom = atom(INTRO_TEXT)
export const aiResponsePendingAtom = atom(false)
export const aiResponseErrorAtom = atom<ErrorType | null>(null)
export const questionCountAtom = atomWithStorage('questionCount', 0)

export const aiResponseWithCountAtom = atom(
  (get) => get(aiResponseAtom),
  (get, set, newResponse: string) => {
    set(aiResponseAtom, newResponse)
    const currentCount = get(questionCountAtom)
    set(questionCountAtom, currentCount + 1)
  }
)
