import * as React from 'react'
import { Text, View } from 'react-native'
import { Stories } from 'react-native-stories'

const data = [
  {
    title: 'What is Liquide?',
    username: 'What is Liquide',
    profile: 'https://ik.imagekit.io/liquide/images/liquideAvatar.png',
    stories: [
      {
        id: 1,
        url: 'https://ik.imagekit.io/liquide/videos/what-is-liquide-usered.mp4',
        type: 'video',
        duration: 2,
        // isReadMore: true,
        // url_readmore: "https://github.com/iguilhermeluis",
        // created: "2021-01-07T03:24:00",
      },
    ],
  },
  {
    title: 'Connect Broker',
    username: 'How to connect your broker',
    profile: 'https://ik.imagekit.io/liquide/images/connectBroker.png',
    stories: [
      {
        id: 1,
        url: 'https://ik.imagekit.io/liquide/videos/how-to-connect-broker-usered.mp4',
        type: 'video',
        duration: 2,
        // isReadMore: true,
        // url_readmore: "https://github.com/iguilhermeluis",
        // created: "2021-01-07T03:24:00",
      },
      // {
      //   id: 3,
      //   url: "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      //   type: "image",
      //   duration: 2,
      //   isReadMore: true,
      // },
    ],
  },
  {
    title: 'Buy Trade Setup',
    username: 'Buy trades',
    profile: 'https://ik.imagekit.io/liquide/images/tradecardAvatar.png',
    stories: [
      {
        id: 1,
        url: 'https://ik.imagekit.io/liquide/videos/how-to-buy-stocks-usered.mp4',
        type: 'video',
        duration: 2,
        // isReadMore: true,
        // url_readmore: "https://github.com/iguilhermeluis",
        // created: "2021-01-07T03:24:00",
      },
      // {
      //   id: 3,
      //   url: "https://images.unsplash.com/photo-1514870262631-55de0332faf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      //   type: "image",
      //   duration: 2,
      //   isReadMore: true,
      //   url_readmore: "https://github.com/iguilhermeluis",
      //   created: "2021-01-07T03:24:00",
      // },
    ],
  },
  {
    title: 'Ask LiMo',
    username: 'How to ask LiMo',
    profile: 'https://ik.imagekit.io/liquide/images/limoAvatar.png',
    stories: [
      {
        id: 1,
        url: 'https://ik.imagekit.io/liquide/videos/what-is-limo-usered.mp4',
        type: 'video',
        duration: 2,
        // isReadMore: true,
        // url_readmore: "https://github.com/iguilhermeluis",
        // created: "2021-01-07T03:24:00",
      },
      // {
      //   id: 2,
      //   url: "https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      //   type: "image",
      //   duration: 2,
      //
      //   isReadMore: true,
      //   url_readmore: "https://github.com/iguilhermeluis",
      //   created: "2021-01-07T03:24:00",
      // },
    ],
  },
]

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Text>Hello</Text>
      </View>
      <Stories onOpeningAllStories={() => console.log('openedd')} data={data} />
    </View>
  )
}

export default App
