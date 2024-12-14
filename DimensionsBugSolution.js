```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
      setWindowHeight(window.height);
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Window Width: {windowWidth}</Text>
      <Text>Window Height: {windowHeight}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
```