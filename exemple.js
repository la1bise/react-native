import { View, Text, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor : "grey",
//       }}
//     >
//       <Text>Hello <Text style={styles.react}>World</Text> </Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   react: {
//     color:'blue',
//   }
// })

export default function App() {
  return (
    <View style= {styles.container}>
      <View style={styles.viewWhite}></View> 
      <View style={styles.viewRed}>
        <Text>Bonjour</Text>
        <Text>Bonsoir</Text>
        </View> 

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  viewWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewRed: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
    gap: 19
    
  },
})