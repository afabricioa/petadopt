import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import PetListByCategory from "../../components/Home/PetListByCategory";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Colors from "@/constants/Colors";

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
            <TouchableOpacity
                style={styles.newPet}
            >
                <MaterialIcons name="pets" size={20} />
                <Text>Novo Pet</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    newPet: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10
    }
});