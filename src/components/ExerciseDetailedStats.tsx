import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const ExerciseDetailedStats = () => {
  const navigate = useNavigate()

  return (
    <Box padding="16px" paddingY="32px" minH="100dvh" background="gray.900" color="white">
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton
          aria-label="Go home"
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3.1L2.7 10.9c-.4.3-.7.9-.7 1.4 0 1 .8 1.8 1.8 1.8h.9V21c0 .6.5 1.1 1.1 1.1h5.2c.6 0 1.1-.5 1.1-1.1v-5.2h2.6V21c0 .6.5 1.1 1.1 1.1h5.2c.6 0 1.1-.5 1.1-1.1v-7h.9c1 0 1.8-.8 1.8-1.8 0-.5-.2-1.1-.7-1.4L12 3.1Z" />
            </svg>
          }
          onClick={() => navigate("/")}
        />

        <Text fontSize="28px" letterSpacing={1} fontFamily="Bebas Neue">
          Exercise Stats
        </Text>
      </Flex>

      <Box
        mt="16px"
        p={3}
        borderRadius="16px"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.200"
        backdropFilter="blur(8px)"
      >
        <Text fontFamily="Geist" color="whiteAlpha.700">
          Add your past 7 days exercise score list here.
        </Text>
      </Box>
    </Box>
  )
}

export default ExerciseDetailedStats

