import { View } from "react-native";
import Header from "../components/Home/Header";
import Slider from "../components/Home/Slider";
import PetListByCategory from "../components/Home/PetListByCategory";

export default function Home() {
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
            {/* Petlist + Category */}
            <PetListByCategory />
            {/* Add new pet */}
        </View>
    )
}