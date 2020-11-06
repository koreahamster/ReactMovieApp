import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tab from "./Tab";

const Stack = createStackNavigator(); //화면 네비게이션 생성

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tab} /> 
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
) 
//Stack.Screen 에서 이름을 꼭 정해주어야 함 컴포넌트는 연결한 위치