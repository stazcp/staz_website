import { SuggestionBox } from 'components/atoms'
import { suggestions } from 'utils'
import { Box } from '@mui/material'
import { shuffle } from 'lodash'
import { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

const shuffledSuggestions = shuffle(suggestions)

const Suggestions = () => {
  const [selectedSuggestions, setSelectedSuggestions] = useState([shuffledSuggestions[0]])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLeftArrow = () => {
    const newIndex = (currentIndex - 1 + shuffledSuggestions.length) % shuffledSuggestions.length
    setSelectedSuggestions([shuffledSuggestions[newIndex]])
    setCurrentIndex(newIndex)
  }

  const handleRightArrow = () => {
    const newIndex = (currentIndex + 1) % shuffledSuggestions.length
    setSelectedSuggestions([shuffledSuggestions[newIndex]])
    setCurrentIndex(newIndex)
  }

  return (
    <Box
      flexDirection={'row'}
      display={'flex'}
      height={77}
      width={'100%'}
      justifyContent={'space-evenly'}
      alignItems={'center'}
    >
      <KeyboardArrowLeftIcon onClick={handleLeftArrow} style={{ cursor: 'pointer' }} />
      {selectedSuggestions.map(({ id, text }) => (
        <SuggestionBox key={id} suggestion={text} />
      ))}
      <KeyboardArrowRightIcon onClick={handleRightArrow} style={{ cursor: 'pointer' }} />
    </Box>
  )
}

export default Suggestions
