import * as React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Dimensions,
  Image
} from 'react-native';

import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';

export const FlatListSlider =({dataP,imageKey= 'image',
local= false,
width= Math.round(Dimensions.get('window').width),
height= 230,
separatorWidth= 0,
loop= true,
indicator= true,
indicatorStyle,
indicatorContainerStyle,
indicatorActiveColor= '#3498db',
indicatorInActiveColor= '#bdc3c7',
indicatorActiveWidth= 6,
animation= true,
autoscroll= true,
timer= 3000,
onPress,
contentContainerStyle})=>{
  const slider = React.useRef(null);


  const {data,setData} = React.useState(dataP)
  const {index,setIndex} = React.useState(0)




    const itemWidth = width;

    const totalItemWidth = itemWidth + separatorWidth;

    return (
      <View>
        <FlatList
          ref={slider}
          horizontal
          pagingEnabled={true}
          snapToInterval={totalItemWidth}
          decelerationRate="fast"
          bounces={false}
          contentContainerStyle={contentContainerStyle}
          data={dataP}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) =

            React.createElement(Image, {
              style: {width: width},
              item: item,
              imageKey: imageKey,
              onPress: onPress,
              index: index % dataP.length,
              active: index === index,
              local: local,
              height: 200,
            })
          }
          ItemSeparatorComponent={() => (
            <View style={{width: separatorWidth}} />
          )}
          keyExtractor={(item, index) => item.toString() + index}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          getItemLayout={(data, index) => ({
            length: totalItemWidth,
            offset: totalItemWidth * index,
            index,
          })}
          windowSize={1}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews={true}
        />

      </View>
    );


  const onViewableItemsChanged = ({viewableItems, changed}) => {
    if (viewableItems.length > 0) {
      let currentIndex = viewableItems[0].index;
      if (
        currentIndex % dataP.length === dataP.length - 1 &&
        loop
      ) {

            setIndex(currentIndex)
                setData([...data,dataP])
      } else {

        setIndex(currentIndex)
      }

      // if (this.props.currentIndexCallback) {
      //   this.props.currentIndexCallback(currentIndex);
      // }
    }
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

   const changeSliderListIndex = () => {
    // if (this.props.animation) {
    //   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);
    // }

    setIndex(index + 1)
    slider.current.scrollToIndex({
      index: this.state.index,
      animated: true,
    });
  };


}

const styles = StyleSheet.create({
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
  indicatorContainerStyle: {
    marginTop: 18,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
