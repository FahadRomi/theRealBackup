// import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

// make a registerComponent
const Header = (props) => {
   const { textStyle, viewStyle } = styles;
 return (
   <View style={viewStyle}>
   <Text style={textStyle} >{props.headerText}</Text>
   </View>
 );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // the range from ZERO to ONE (for dark shadow)
    elevation: 2,
    position: 'relative'

  },
   textStyle: {
     fontSize: 30
   }

};
// make the component available to other parts of the app
export { Header };
