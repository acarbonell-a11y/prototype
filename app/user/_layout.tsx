import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.select({ ios: 30, android: 25 }),
          left: 16,
          right: 16,
          height: 75,
          borderRadius: 35,
          backgroundColor: Platform.select({
            ios: "rgba(15, 15, 15, 0.85)",
            android: "rgba(15, 15, 15, 0.9)",
          }),
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.1)",
          paddingBottom: 12,
          paddingTop: 12,
          paddingHorizontal: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.25,
          shadowRadius: 20,
          elevation: 20,
          // Enhanced backdrop blur effect
          backdropFilter: "blur(20px)",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.5)",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
          marginTop: 6,
          letterSpacing: 0.3,
        },
        tabBarIconStyle: { 
          marginBottom: -2,
        },
        tabBarItemStyle: {
          borderRadius: 25,
          marginHorizontal: 4,
          paddingVertical: 4,
        },
        tabBarBackground: () => null, // Remove default background for custom styling
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
              size={focused ? size + 4 : size + 2}
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
                shadowColor: focused ? "#ffffff" : "transparent",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
              size={focused ? size + 4 : size + 2}
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
                shadowColor: focused ? "#ffffff" : "transparent",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={focused ? "#ffffff" : "rgba(255, 255, 255, 0.6)"}
              size={focused ? size + 4 : size + 2}
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
                shadowColor: focused ? "#ffffff" : "transparent",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: focused ? 0.3 : 0,
                shadowRadius: 8,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}