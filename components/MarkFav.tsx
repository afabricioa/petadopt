import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo';
import { Pressable } from 'react-native'

import Shared from './../Shared/Shared';
import Colors from '@/constants/Colors';

interface MarkFavProps {
    id: string;
}

export default function MarkFav({id}: Readonly<MarkFavProps>) {
    const [favList, setFavList] = useState<string[]>([]);
    const { user } = useUser();

    useEffect(() => {
        user && GetFav();
    }, [user]);

    const GetFav = async () => {
        let result = await Shared.GetFavoriteList(user);
        setFavList(result?.favorites ?? []);
    }

    const onClickFavorite = () => {
        let favoriteList = favList;
        if (favoriteList.includes(id)) {
            favoriteList = favoriteList.filter(favId => favId !== id);
        } else {
            favoriteList.push(id);
        }
        setFavList([...favoriteList]);
        Shared.UpdateFavoriteList(favoriteList, user);
        GetFav();
    }

    return (
        <Pressable onPress={() => onClickFavorite()}>
            <Ionicons name='heart' size={40} color={id && favList?.includes(id) ? Colors.RED : Colors.GRAY} />
        </Pressable>
    )
}
