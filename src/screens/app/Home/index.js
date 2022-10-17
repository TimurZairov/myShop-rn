import React from "react";
import {FlatList, Image, Text, View} from "react-native";


import {styles} from "./style";
import {products} from "../../../data/products";
import {category} from '../../../data/category';
import CategoryBox from "../../../components/CategoryBox"
import Header from "../../../components/Header";
import ProductBox from "../../../components/ProductBox";

const Home = () => {
    //принимает как пропсы
    const renderItem = ({item, index}) => {
        return (
            <CategoryBox title={item?.title} image={item?.image} index={index} isFirst={item?.id === 0}/>
        )
    }

    const renderProductHomeItem = ({item}) => {
        return (
            <ProductBox  {...item}/>

        )
    }

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Header title="Find All You Need" onSearch/>
            <View style={styles.list}>
                <FlatList
                    data={category}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <FlatList style={{padding: 12}}
                      data={products}
                      renderItem={renderProductHomeItem}
                      keyExtractor={item => String(item.id)}
                      ListFooterComponent={<View style={{height: 50}}></View>}
                      numColumns={2}
            />
        </View>
    )
}

export default Home
