import React from "react";
import {FlatList, Text, View} from "react-native";
import Header from "../../../components/Header";
import {category} from '../../../data/category'
import CategoryBox from "../../../components/CategoryBox";
import {styles} from "./style";
const Home = () => {
    //принимает как пропсы
    const renderItem = ({item, index}) => {
        return (
            <CategoryBox title={item?.title} image={item?.image} index={index} isFirst={item?.id === 0}/>
        )
    }

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Header title="Find All You Need" onSearch/>
            <View style={styles.list} >
                <FlatList
                    data={category}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Home
