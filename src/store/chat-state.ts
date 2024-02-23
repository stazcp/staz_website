import { INTRO_TEXT } from '@constants'
import { atom } from 'jotai'

export const aiResponseAtom = atom(INTRO_TEXT)
export const aiResponsePendingAtom = atom(false)
