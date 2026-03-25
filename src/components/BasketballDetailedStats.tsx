import { Box, Flex, IconButton, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const BasketballDetailedStats = () => {
  const navigate = useNavigate()

  // Mock data for the past 7 days
  const pastScores = [
    { points: 150, date: "March 20th, 2026" },
    { points: 120, date: "March 21st, 2026" },
    { points: 80, date: "March 22nd, 2026" },
    { points: 140, date: "March 23rd, 2026" },
    { points: 110, date: "March 24th, 2026" },
    { points: 165, date: "March 25th, 2026" },
    { points: 95, date: "March 26th, 2026" },
  ]

  const bestPoints = Math.max(...pastScores.map((s) => s.points))
  const avgPoints = pastScores.reduce((sum, s) => sum + s.points, 0) / pastScores.length
  const highScoreOnRealMatch = "8Points"

  return (
    <Box
      padding="16px"
      paddingY="32px"
      minH="100dvh"
      background="gray.900"
      color="white"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton
          aria-label="Go home"
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          icon={
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3.1L2.7 10.9c-.4.3-.7.9-.7 1.4 0 1 .8 1.8 1.8 1.8h.9V21c0 .6.5 1.1 1.1 1.1h5.2c.6 0 1.1-.5 1.1-1.1v-5.2h2.6V21c0 .6.5 1.1 1.1 1.1h5.2c.6 0 1.1-.5 1.1-1.1v-7h.9c1 0 1.8-.8 1.8-1.8 0-.5-.2-1.1-.7-1.4L12 3.1Z" />
            </svg>
          }
          onClick={() => navigate("/")}
        />

        <Text fontSize="28px" letterSpacing={1} fontFamily="Bebas Neue">
          Basketball Game Stats
        </Text>
      </Flex>

      {/* Score List for Past 7 days */}
      <Box
        mt="16px"
        p={3}
        borderRadius="16px"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.200"
        backdropFilter="blur(8px)"
      >
        <Flex justifyContent="space-between" alignItems="center" gap={3} px={1}>
          <Text fontSize="21px" fontFamily="Bebas Neue" letterSpacing={0.8}>
            Past 7 days
          </Text>

          <Text
            fontSize="13px"
            px={3}
            py={1}
            borderRadius="999px"
            letterSpacing={1}
            fontWeight={500}
            bg="whiteAlpha.200"
            border="1px solid"
            borderColor="whiteAlpha.250"
          >
            View More
          </Text>
        </Flex>

        <Box mt={3}>
          {pastScores.map((row, idx) => {
            const isBest = row.points === bestPoints
            return (
              <Flex
                key={idx}
                justifyContent="space-between"
                alignItems="center"
                py={2}
                px={2}
                borderTop={idx === 0 ? "none" : "1px solid"}
                borderTopColor="whiteAlpha.150"
              >
                <Text
                  fontFamily="Rubik Mono One"
                  fontSize="16px"
                  letterSpacing={0.4}
                  color={isBest ? "yellow.200" : "white"}
                >
                  {row.points} Points
                </Text>
                <Text fontSize="13px" color="whiteAlpha.700">
                  {row.date}
                </Text>
              </Flex>
            )
          })}
        </Box>
      </Box>

      {/* Average Score for Past 7 days */}
      <Box
        mt="16px"
        p={3}
        borderRadius="16px"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.200"
        backdropFilter="blur(8px)"
      >
        <Flex justifyContent="space-between" alignItems="center" gap={3} px={1}>
          <Text fontSize="21px" fontFamily="Bebas Neue" letterSpacing={0.8}>
            Average score
          </Text>
          <Text
            fontSize="13px"
            px={3}
            py={1}
            borderRadius="999px"
            letterSpacing={1}
            fontWeight={500}
            bg="whiteAlpha.200"
            border="1px solid"
            borderColor="whiteAlpha.250"
          >
            Past 7 days
          </Text>
        </Flex>

        <Flex mt={3} justifyContent="space-between" alignItems="flex-end">
          <Text
            fontFamily="Rubik Mono One"
            fontSize="40px"
            letterSpacing={0.6}
            lineHeight={1}
            color="white"
          >
            {Math.round(avgPoints)}
          </Text>
          <Box pb={2} textAlign="right">
            <Text fontSize="13px" color="whiteAlpha.700">
              points per day
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* High Score on Real Match */}
      <Box mt="16px" 
        p={3}
        borderRadius="16px"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.200"
        backdropFilter="blur(8px)">
            <Flex justifyContent="space-between" alignItems="center" gap={3} px={1}>
                <Text fontSize="21px" fontFamily="Bebas Neue" letterSpacing={0.8}>High Score on Real Match</Text>
                <Text fontSize="13px" px={3} py={1} borderRadius="999px" letterSpacing={1} fontWeight={500} bg="whiteAlpha.200" border="1px solid" borderColor="whiteAlpha.250">View History</Text>
            </Flex>
            <Flex mt={3} justifyContent="space-between" alignItems="center">
                <Text fontFamily="Rubik Mono One" fontSize="35px" letterSpacing={0.6} lineHeight={1} color="white">{highScoreOnRealMatch}</Text>
                <Text fontSize="13px" color="whiteAlpha.700">on March 20th, 2026</Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default BasketballDetailedStats