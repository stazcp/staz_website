import { SuggestionBox } from 'components/atoms'
import { isMobile } from 'utils'
import { Box } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useWindowSize } from 'hooks'
import { currentIndexAtom, suggestionsAtom } from 'store/suggestions'
import { useAtom } from 'jotai'

const Suggestions = () => {
  const [suggestions] = useAtom(suggestionsAtom)
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom)
  const { width } = useWindowSize()

  const handleLeftArrow = () => {
    const newIndex = (currentIndex - 1 + suggestions.length) % suggestions.length
    setCurrentIndex(newIndex)
  }

  const handleRightArrow = () => {
    const newIndex = (currentIndex + 1) % suggestions.length
    setCurrentIndex(newIndex)
  }

  const arrowStyles = { cursor: 'pointer', color: 'white', fontSize: 40 }

  return (
    <Box
      flexDirection={'row'}
      display={'flex'}
      height={isMobile(width) ? 120 : 77}
      alignItems={'center'}
      width={'100%'}
    >
      <KeyboardArrowLeftIcon onClick={handleLeftArrow} style={arrowStyles} />
      <SuggestionBox suggestion={suggestions[currentIndex].text} />
      <KeyboardArrowRightIcon onClick={handleRightArrow} style={arrowStyles} />
    </Box>
  )
}

export default Suggestions
