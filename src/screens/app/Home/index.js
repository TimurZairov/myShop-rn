import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";


import {styles} from "./style";
import {products} from "../../../data/products";
import {category} from '../../../data/category';

import CategoryBox from "../../../components/CategoryBox"
import Header from "../../../components/Header";
import ProductBox from "../../../components/ProductBox";

const Home = ({navigation}) => {
    //state для категорий фильтров, по умолчанию 0
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [allProducts, setAllProducts] = useState(products)
    const [keyWord, setKeyWord] = useState()

    //получапм айди если айди === равен категории меняем бэк
    const selectCategory = (id) => {
        setSelectedCategory(id)
    }
    //Item принимает как пропсы
    const renderItem = ({item, index}) => {
        return (
            <CategoryBox
                title={item?.title}
                image={item?.image}
                index={index}
                selectedCategory={item?.id === selectedCategory}
                selectCategory={selectCategory}
            />
        )
    }


    //Item принимает как пропсы
    const renderProductHomeItem = ({item}) => {
        //navigate to detailScreen и передаем туда объект с парметрами получаем нужный айтем при роуте если внутри renderProductHomeItem
        const productDetails = () => {
            navigation.navigate('Product', {item})
        }
        return (
            // а тут передаем финкцию навигации котрая выше
            <ProductBox productDetails={productDetails} {...item} />
        )
    }

    useEffect(() => {
        //Фильтр категорий, если selectedCategory === 0 то выводит все категории и по ключевым словам
        if(selectedCategory !== 0 && !keyWord){
            const updatedCategory = products.filter(item => item.category === selectedCategory)
            setAllProducts(updatedCategory)
        } else if(selectedCategory === 0 && keyWord) {
            const updatedCategory = products.filter(item => item.title.toLowerCase().includes(keyWord.toString().toLowerCase()))
            setAllProducts(updatedCategory)
        }else if(selectedCategory === 0 && !keyWord){
            setAllProducts(products)
        }
    }, [selectedCategory, keyWord])

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Header title="Find All You Need" onSearch keyWord={keyWord} setKeyWord={setKeyWord}/>
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
                      data={allProducts}
                      renderItem={renderProductHomeItem}
                      keyExtractor={item => String(item.id)}
                      ListFooterComponent={<View style={{height: 50}}></View>}
                      //numColumns задает сколько колонок надо для контента
                      numColumns={2}
            />
        </View>
    )
}

export default Home
