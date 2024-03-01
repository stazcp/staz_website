import { atom } from 'jotai'
import { shuffle } from 'lodash'
import { suggestions } from 'utils'

const shuffledSuggestions = shuffle(suggestions)

// Create an atom to hold the suggestions
export const suggestionsAtom = atom(shuffledSuggestions)

// Create an atom to hold the selected suggestion
export const currentIndexAtom = atom(0)
