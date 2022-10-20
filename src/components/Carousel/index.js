import React, {useState} from "react";
import {Dimensions, FlatList, Image, View} from "react-native";
import {styles} from './style'

const {width} = Dimensions.get('window')



const Carousel = ({images}) => {
    const [isActive, setIsActive] = useState(0)

    const onScrollHandler = (e) => {
        // console.log(e.nativeEvent.contentOffset)
        const widthOffset = Math.floor(width)
        const xOffset = Math.floor(e.nativeEvent.contentOffset.x)
        if(xOffset === 0){
            setIsActive(0)
        }else if(xOffset === widthOffset){
            setIsActive(1)
        }else if(xOffset === widthOffset * 2){
            setIsActive(2)
        }
    }

    const renderItem = ({item}) => {
        return (
            <Image style={styles.images} source={{uri: item}} />
        )
    }

    return(
        <View>
            <FlatList onScroll={onScrollHandler} horizontal={true} pagingEnabled={true} data={images} renderItem={renderItem} />
            <View style={{flexDirection: 'row', position: 'absolute', alignSelf: 'center', bottom: 60}}>
                {images?.map((_, i) => {
                    return <View style={[styles.dots, i === isActive ? styles.active : {}]} key={i} />
                })}
            </View>
        </View>
    )
}

export default Carousel
