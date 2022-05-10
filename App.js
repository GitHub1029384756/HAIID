import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import Run from "./screens/Run.js";
import Go from "./screens/Go.js";
import Data from "./screens/Data.js";

const Tabs = AnimatedTabBarNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: "#0263FF",
      inactiveTintColor: "#222222",
      activeBackgroundColor: "#E9E9E9"
    }
  }
  appearance={{
    dotCornerRadius: 200,
    floating: true,
    tabBarBackground: "rgba(255,255,255,0.95)",
    shadow: true
  }}
  >
    <Tabs.Screen
      name="GOALS"
      component={Run}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="zap"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}
    />

  <Tabs.Screen
      name="GO"
      component={Go}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="power"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}
    />


    <Tabs.Screen
      name="GLANCE"
      component={Data}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="info"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}
    />

  <Tabs.Screen
      name="SETTINGS"
      component={Run}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="settings"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
            />
        )
      }}
    />

    
    </Tabs.Navigator>
    </NavigationContainer>
    
  );
}

export default MyTabs