import { db } from "@/Config/FirebaseConfig"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

const getDocSnap = (user: any) => {
    return doc(db, 'UserFavPet', user?.primaryEmailAddress?.emailAddress);
}

const GetFavoriteList = async (user: any) => {
    const docSnap = await getDoc(getDocSnap(user));
    if(docSnap?.exists()) {
        return docSnap.data();
    } else {
        await setDoc(getDocSnap(user), {
            email: user?.primaryEmailAddress?.emailAddress,
            favorites: []
        })
    }
}

const UpdateFavoriteList = async (favorites: string[], user: any) => {
    const docSnap = getDocSnap(user);
    try {
        await updateDoc(docSnap, {
            favorites: favorites
        })
    } catch (error: any) {
        throw error;
    }
}

export default {
    GetFavoriteList,
    UpdateFavoriteList
}