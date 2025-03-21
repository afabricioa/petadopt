import { View } from "react-native";
import Header from "../components/Home/Header";
import Slider from "../components/Home/Slider";
import Category from "../components/Home/Category";
import PetListByCategory from "../components/Home/PetListByCategory";
import { useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <View
            style={{
                padding: 20,
                marginTop: 20,
                gap: 10
            }}
        >
            {/* Header */}
            <Header />
            {/* Slider */}
            <Slider />
            {/* Category */}
            <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            {/* List of pets */}
            <PetListByCategory selectedCategory={selectedCategory}/>
            {/* Add new pet */}
        </View>
    )
}