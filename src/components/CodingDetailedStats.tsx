import { Badge, Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const CodingDetailedStats = () => {
  const navigate = useNavigate()

  const userStories = [
    { id: 1241, title: "Refactor HabitCard component", points: 3, date: "2026-03-20" },
    { id: 1249, title: "Add habit streak calculation", points: 5, date: "2026-03-21" },
    { id: 1260, title: "Persist habits to local storage", points: 8, date: "2026-03-22" },
    { id: 1268, title: "Create detailed stats page", points: 5, date: "2026-03-23" },
    { id: 1273, title: "Add weekly summary widget", points: 3, date: "2026-03-24" },
    { id: 1281, title: "Improve mobile spacing + typography", points: 2, date: "2026-03-25" },
  ]

  return (
    <Box
      minH="100dvh"
      p={4}
      color="whiteAlpha.900"
      bg="linear-gradient(180deg, #0B1020 0%, #070A12 100%)"
      display="flex" // takes up all available space
      flexDirection="column"
      position="relative"
      overflow="hidden"
    >
      {/* subtle grid like an editor background the white lines */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.18}
        backgroundImage="linear-gradient(to right, rgba(255, 255, 255, 0.56) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.29) 1px, transparent 1px)"
        backgroundSize="24px 24px"
        pointerEvents="none"
      />

      {/* Header */}
      <Flex alignItems="center" justifyContent="space-between" position="relative">
        <IconButton
          aria-label="Go home"
          variant="ghost"
          color="whiteAlpha.900"
          _hover={{ bg: "whiteAlpha.150" }}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3.1L2.7 10.9c-.4.3-.7.9-.7 1.4 0 1 .8 1.8 1.8 1.8h.9V21c0 .6.5 1.1 1.1 1.1h5.2c.6 0 1.1-.5 1.1-1.1v-5.2h2.6V21c0 .6.5 1.1 1.1 1.1h5.2c.6 0 1.1-.5 1.1-1.1v-7h.9c1 0 1.8-.8 1.8-1.8 0-.5-.2-1.1-.7-1.4L12 3.1Z" />
            </svg>
          }
          onClick={() => navigate("/")}
        />

        <Box textAlign="right"> 
          <Text fontFamily="Geist" fontSize="20px" fontWeight={700} letterSpacing={0.2}>
            Coding Stats
          </Text>
        </Box>
      </Flex>

      {/* Work item list (terminal panel) */}
      <Box
        mt={4}
        position="relative"
        bg="rgba(255,255,255,0.94)"
        color="#0B1020"
        borderRadius="12px"
        border="1px solid"
        borderColor="whiteAlpha.250"
        overflow="hidden"
      >
        <Flex
          px={3}
          py={2}
          bg="rgba(11,16,32,0.92)"
          color="whiteAlpha.900"
          borderBottom="1px solid"
          borderBottomColor="whiteAlpha.250"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontFamily="Geist" fontSize="12px" color="whiteAlpha.700">
            Past 7 days
          </Text>
          <Text fontFamily="Geist" fontSize="12px" color="#00E5A8">
            npm run dev
          </Text>
        </Flex>

        {userStories.map((story) => (
          <Flex
            key={story.id}
            px={3}
            py={3}
            gap={3}
            alignItems="center"
            borderTop="1px solid"
            borderTopColor="rgba(11,16,32,0.12)"
          >
            {/* left neon stripe */}
            <Box w="4px" alignSelf="stretch" bg="#00E5A8" borderRadius="4px" />

            <Box flex="1" minW={0}>
              <Flex alignItems="center" gap={2}>
                <Text fontFamily="Rubik Mono One" fontSize="10px" color="rgba(11,16,32,0.78)">
                  #{story.id}
                </Text>
                <Badge
                  bg="rgba(0,229,168,0.12)"
                  color="#0B1020"
                  border="1px solid"
                  borderColor="rgba(0,229,168,0.28)"
                  fontSize="10px"
                >
                  User Story
                </Badge>
              </Flex>

              <Text fontFamily="Geist" fontSize="14px" fontWeight={700} color="#0B1020" noOfLines={1}>
                {`> ${story.title}`}
              </Text>

              <Text fontFamily="Geist" fontSize="12px" color="rgba(11,16,32,0.78)">
                {story.date}
              </Text>
            </Box>

            <Box
              minW="44px"
              px={2}
              py={1}
              borderRadius="999px"
              bg="rgba(11,16,32,0.08)"
              border="1px solid"
              borderColor="rgba(11,16,32,0.16)"
              textAlign="center"
            >
              <Text fontFamily="Rubik Mono One" fontSize="12px" fontWeight={700} color="#0B1020">
                {story.points}
              </Text>
              <Text fontFamily="Geist" fontSize="10px" color="rgba(11,16,32,0.70)" lineHeight="12px"> 
                pts
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>

      {/* Summary widgets */}
      <Box
        mt={0}
        w="100%"
        flex="1"
        display="grid" // 2 columns and 2 rows
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gap={3} 
        minH={0}
      >
        <Box bg="rgba(255,255,255,0.06)" border="1px solid" borderColor="whiteAlpha.200" borderRadius="12px" p={3} h="100%">
          <Text fontFamily="Geist" fontSize="12px" color="whiteAlpha.700">
            Completed User Stories
          </Text>
          <Text fontFamily="Rubik Mono One" fontSize="26px" letterSpacing={0.6} color="#00E5A8">
            12
          </Text>
        </Box>

        <Box bg="rgba(255,255,255,0.06)" border="1px solid" borderColor="whiteAlpha.200" borderRadius="12px" p={3} h="100%">
          <Text fontFamily="Geist" fontSize="12px" color="whiteAlpha.700">
            Avg US points / day
          </Text>
          <Text fontFamily="Rubik Mono One" fontSize="26px" letterSpacing={0.6} color="#00E5A8">
            4.5
          </Text>
        </Box>

        <Box bg="rgba(255,255,255,0.06)" border="1px solid" borderColor="whiteAlpha.200" borderRadius="12px" p={3} h="100%">
          <Text fontFamily="Geist" fontSize="12px" color="whiteAlpha.700">
            Total US points
          </Text>
          <Text fontFamily="Rubik Mono One" fontSize="26px" letterSpacing={0.6} color="#00E5A8">
            50
          </Text>
        </Box>

        {/* Highest User Story Points in a day */}
        <Box bg="rgba(255,255,255,0.06)" border="1px solid" borderColor="whiteAlpha.200" borderRadius="12px" p={3} h="100%">
          <Text fontFamily="Geist" fontSize="12px" color="whiteAlpha.700">
            Highest US points in a day
          </Text>
          <Text fontFamily="Rubik Mono One" fontSize="26px" letterSpacing={0.6} color="#00E5A8">
            10
          </Text>
        </Box>
      </Box>

    </Box>
  )
}

export default CodingDetailedStats
