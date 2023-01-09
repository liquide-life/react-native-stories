import React, { useRef, useState } from 'react'
import { FlatList, Modal, StyleSheet, View, ViewStyle } from 'react-native'

import { StoryType } from './StoryComponents'
import StoryCircle from './StoryComponents/StoryCircle'
import StoryContainer from './StoryComponents/StoryContainer'

const { CubeNavigationHorizontal } = require('react-native-3dcube-navigation')

type Props = {
  data: StoryType[]
  containerAvatarStyle?: ViewStyle
  avatarStyle?: ViewStyle
  titleStyle?: ViewStyle
  textReadMore?: string
}

const Stories = (props: Props) => {
  const [isModelOpen, setModel] = useState(false)
  const [currentUserIndex, setCurrentUserIndex] = useState<number>()
  const [currentScrollValue, setCurrentScrollValue] = useState(0)

  const modalScroll = useRef<any>(null)

  const onStorySelect = (index: number) => {
    setCurrentUserIndex(index)
    setModel(true)
  }

  const onStoryClose = () => {
    setModel(false)
  }

  const onStoryNext = (isScroll: boolean) => {
    const newIndex = (currentUserIndex ?? 0) + 1
    if (props.data.length - 1 > (currentUserIndex || 0)) {
      setCurrentUserIndex(newIndex)
      if (!isScroll) {
        try {
          modalScroll.current?.scrollTo(newIndex, true)
        } catch (e) {
          console.warn('error=>', e)
        }
      }
    } else {
      setModel(false)
    }
  }

  const onStoryPrevious = (isScroll: boolean) => {
    const newIndex = (currentUserIndex ?? 0) - 1
    if ((currentUserIndex || 0) > 0) {
      setCurrentUserIndex(newIndex)
      if (!isScroll) {
        try {
          modalScroll.current?.scrollTo(newIndex, true)
        } catch (e) {
          console.warn('error=>', e)
        }
      }
    }
  }

  const onScrollChange = (scrollValue: number) => {
    if (currentScrollValue > scrollValue) {
      onStoryNext(true)
      console.log('next')
      setCurrentScrollValue(scrollValue)
    }
    if (currentScrollValue < scrollValue) {
      onStoryPrevious(false)
      console.log('previous')
      setCurrentScrollValue(scrollValue)
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <StoryCircle
            key={index.toString()}
            numberOfItems={props.data.length}
            item={item}
            index={index}
            onStorySelect={onStorySelect}
            viewedStoryIndex={currentUserIndex}
          />
        )}
      />

      <Modal
        animationType='slide'
        transparent={false}
        visible={isModelOpen}
        style={styles.modal}
        onShow={() => {
          if (currentUserIndex || 0 > 0) {
            modalScroll?.current?.scrollTo(currentUserIndex, false)
          }
        }}
        onRequestClose={onStoryClose}
      >
        <CubeNavigationHorizontal
          callBackAfterSwipe={(g: any) => onScrollChange(g)}
          ref={modalScroll}
          style={styles.container}
          responderCaptureDx={1000}
        >
          {props.data.map((item, index) => (
            <StoryContainer
              key={item.title}
              onClose={onStoryClose}
              onStoryNext={onStoryNext}
              onStoryPrevious={onStoryPrevious}
              dataStories={item}
              isNewStory={index !== currentUserIndex}
              textReadMore={props.textReadMore!}
            />
          ))}
        </CubeNavigationHorizontal>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  ItemSeparator: { height: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingBottom: 5,
  },

  modal: {
    flex: 1,
  },
  title: {
    fontSize: 8,
    textAlign: 'center',
  },
})

export default Stories
// export default Stories
