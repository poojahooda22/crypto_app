import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants';

import {useNavigation} from '@react-navigation/native';

const HeaderBar = ({right}) => {

    const navigation = useNavigation();

    return (
        <View style={{paddingHorizontal: SIZES.padding,
        flexDirection: 'row'}}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                    onPress={() => navigation.goBack}
                >
                    <Image
                        source={icons.back_arrow}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.gray
                        }}
                    />
                    <Text></Text>
                </TouchableOpacity>
            </View>
            <View></View>

        </View>
    )
}