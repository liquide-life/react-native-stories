import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import Video from 'react-native-video'

// import Image from 'react-native-scalable-image';
import { StoryType } from '.'

const ScreenWidth = Dimensions.get('window').width

type Props = {
  story: StoryType
  onVideoLoaded?: (item: Object) => void
  onImageLoaded?: () => void
  pause: boolean
  isLoaded?: boolean
  isNewStory?: boolean
}
const Story = (props: Props) => {
  const { story } = props
  const { url, type } = story || {}
  const [isPortation, setIsPortation] = useState(false)
  const [heightScaled, setHeightScaled] = useState(231)

  const onVideoLoaded = (item: any) => {
    const { width, height } = item.naturalSize
    const heightScaled = height * (ScreenWidth / width)
    const isPortrait = height > width
    console.log(isPortrait, ' isPortrait')
    setIsPortation(height > width)
    setHeightScaled(heightScaled)
    props.onVideoLoaded!(item)
  }

  return (
    <View style={styles.container}>
      {/* {!props.isLoaded && (
      <View style={styles.loading}>
        <ActivityIndicator color="white" />
      </View>
      )} */}
      {type === 'image' ? (
        <Image
          source={{ uri: url }}
          onLoadEnd={props.onImageLoaded}
          style={styles.content}
          resizeMode='stretch'
          // width={ScreenWidth}
        />
      ) : (
        <View>
          <Video
            source={{ uri: url }}
            paused={props.pause || props.isNewStory}
            onLoad={(item: any) => {
              onVideoLoaded(item)
            }}
            style={
              isPortation
                ? [styles.contentVideoPortation, { height: heightScaled }]
                : [styles.contentVideo, { height: heightScaled }]
            }
            resizeMode='stretch'
          />
        </View>
      )}
    </View>
  )
}

Story.propTypes = {
  story: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

//  720 405 231.42857142857142

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(12, 11, 24,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { width: '100%', height: '100%', flex: 1 },
  contentVideo: {
    width: ScreenWidth,
    //aspectRatio: 1,
    backgroundColor: '#000',
    //flex: 1,
    height: 231,
  },
  contentVideoPortation: {
    width: ScreenWidth,
    //aspectRatio: 1,
    backgroundColor: '#000',
    //flex: 1,
    height: 231,
  },
  imageContent: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  loading: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Story
