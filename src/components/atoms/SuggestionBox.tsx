import { Box, Typography } from '@mui/material'
import useChat from 'hooks/use-chat'

interface SuggestionProps {
  suggestion: string
  key: number
}

const Suggestion = ({ key, suggestion }: SuggestionProps) => {
  const { sendMessage } = useChat()

  const handleClick = () => {
    sendMessage(suggestion)
  }

  return (
    <Box
      key={key}
      component="div" // Add the component prop with the value of 'div'
      display={'flex'}
      width={'80vw'}
      justifyContent={'center'}
      marginBottom={2}
      marginLeft={2}
      marginRight={2}
      alignItems={'center'}
      sx={{ cursor: 'pointer' }}
      height={50}
      padding={2}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      overflow={'scroll'}
    >
      <Typography variant="body2" onClick={handleClick}>
        {suggestion}
      </Typography>
    </Box>
  )
}

export default Suggestion
