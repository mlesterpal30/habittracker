import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import boardringImg from '../assets/boardring.png'
import codingImg from '../assets/coding.png'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const habits = [
    {
      id: 1,
      name: 'Basketball',
      image: boardringImg,
      points: 150,
      over: '30 Minutes',
      path: '/basketball-detailed-stats',
    },
    {
      id: 2,
      name: 'Coding',
      image: codingImg,
      points: 12,
      over: 'Day',
      path: '/coding-detailed-stats',
    },
    {
      id: 3,
      name: 'Studying',
      image: codingImg, // placeholder until you add a studying asset
      points: 45,
      over: 'Session',
      path: '/studying-detailed-stats',
    },
    {
      id: 4,
      name: 'Clearing',
      image: codingImg, // placeholder until you add a clearing asset
      points: 8,
      over: 'Chores',
      path: '/clearing-detailed-stats',
    },
    {
      id: 5,
      name: 'Reading',
      image: codingImg, // placeholder until you add a reading asset
      points: 30,
      over: 'Pages',
      path: '/reading-detailed-stats',
    },
    {
      id: 6,
      name: 'Exercise',
      image: boardringImg, // placeholder until you add an exercise asset
      points: 25,
      over: 'Workout',
      path: '/exercise-detailed-stats',
    },
  ]

  const navigate = useNavigate()

  return (
    <Box
      p={4}
      minH="100dvh"
      overflow="hidden"
      background="gray.900"
      color="white"
      display="flex"
      flexDirection="column"
    >
      <Box>
        <Text fontFamily="Bebas Neue" fontSize="40px" letterSpacing={1} lineHeight={1}>
          Habit Rack
        </Text>
        <Text fontFamily="Geist" fontSize="13px" color="whiteAlpha.700" mt={1}>
         View Detaisl on your habits. Tap a card.
        </Text>
      </Box>

      <Box
        mt={4}
        flex="1" // takes up all available space
        minH={0}
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)" // 2 columns
        gridTemplateRows="repeat(3, 1fr)" // 3 rows 
        gap={4}
      >
        {habits.map((habit) => (
          <Box
            key={habit.id}
            onClick={() => navigate(habit.path)}
            cursor="pointer"
            role="button"
            tabIndex={0}
            p={3}
            borderRadius="18px"
            background="whiteAlpha.100" // glass effect on black background
            border="1px solid"
            borderColor="whiteAlpha.200"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              w="104px"
              h="104px"
              borderRadius="full"
              background="gray.800"
              border="1px solid"
              borderColor="whiteAlpha.200"
            >
              <Box
                as="img"
                src={habit.image}
                alt={`${habit.name} icon`}
                w="86px"
                h="86px"
                objectFit="contain" // make the image fit within the circle
              />
            </Flex>

            <Box width="100%" textAlign="center">
              <Text
                fontFamily="Bebas Neue"
                fontSize="26px"
                letterSpacing={1}
                lineHeight={1.1}
              >
                {habit.name}
              </Text>

              <Flex justifyContent="center" alignItems="baseline" gap={2} mt={2}>
                <Text
                  fontFamily="Rubik Mono One" // make the text bold and rounded
                  fontSize="26px"
                  letterSpacing={0.4}
                >
                  {habit.points}
                </Text>
                <Text fontFamily="Geist" fontSize="12px" color="whiteAlpha.700">
                  / {habit.over}
                </Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default HomePage