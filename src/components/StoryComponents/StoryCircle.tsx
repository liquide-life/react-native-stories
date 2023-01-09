import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { StoryType } from './index'

export interface StoryCircleProps {
  item: StoryType
  index: number
  onStorySelect: (index: number) => void
  viewedStoryIndex: number | undefined
  numberOfItems: number
  onAllStoriesOpened?: () => void
}

const viewedIndices: number[] = []

const StoryCircle = ({
  item,
  index,
  onStorySelect,
  viewedStoryIndex,
  numberOfItems,
  onAllStoriesOpened,
}: StoryCircleProps) => {
  const onPress = (indexValue: number) => {
    onStorySelect(indexValue)
  }

  const [HasUserSeenAllStories, setHasUserSeenAllStories] = useState(false)

  const LinearGradient = require('react-native-linear-gradient').default

  if (
    (viewedStoryIndex || viewedStoryIndex === 0) &&
    !viewedIndices.includes(viewedStoryIndex)
  ) {
    viewedIndices.push(viewedStoryIndex)
  }

  useEffect(() => {
    if (!HasUserSeenAllStories) {
      if (viewedIndices.length === numberOfItems) {
        setHasUserSeenAllStories(true)
      }
    }
  }, [viewedStoryIndex])

  useEffect(() => {
    if (HasUserSeenAllStories) {
      console.log('user saw everything')
      if (onAllStoriesOpened) {
        onAllStoriesOpened()
      }
    }
  }, [HasUserSeenAllStories])

  return (
    <View style={styles.container}>
      <View style={[styles.boxStory, { marginLeft: index > 0 ? 24 : 0 }]}>
        <LinearGradient
          style={[
            styles.avatarWrapperRing,
            { padding: !viewedIndices.includes(index) ? 2 : 1 },
          ]}
          colors={
            !viewedIndices.includes(index)
              ? ['#851EFF', '#E70870', '#FFBB76']
              : ['gray', 'gray', 'gray']
          }
        >
          <TouchableOpacity onPress={() => onPress(index)}>
            <View>
              <FastImage
                style={[styles.circle]}
                source={{ uri: item.profile }}
              />
            </View>

            {/*<Text style={[styles.title, props.titleStyle]}>{item.title}</Text>*/}
          </TouchableOpacity>
        </LinearGradient>
        <View style={{}}>
          <Text
            style={{
              marginTop: 8,
              alignSelf: 'center',
              width: 65,
              textAlign: 'center',
            }}
            // maxWidth={60}
            // marginTop={8}
            // category='caption1'
            // center
            // style={[props.titleStyle, styles.title]}
          >
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default StoryCircle

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    alignItems: 'center',
  },
  boxStory: {
    alignItems: 'center',
  },
  avatarWrapperRing: {
    borderRadius: 26,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 26,
    // borderWidth: 3,
    borderColor: '#0C0B18',
  },
})
