import { View, Text } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      

      <Text className="text-6xl mt-4 text-white text-center font-extralight">Created By:</Text>
      
          <Text className="text-xl tracking-wider leading-10 mt-5 p-8 pt-1 text-white text-center">
            Muhammad Ahmed      SP21-BCS-084
          </Text>
          <Text className="text-xl tracking-wider leading-10 mt-5 p-8 pt-1 text-white text-center">
            Abubakar                     SP21-BCS-058
          </Text>
          <Text className="text-xl tracking-wider leading-10 mt-5 p-8 pt-1 text-white text-center">
          Hassam Aslam           SP21-BCS-087 
          </Text>

    </View>
  )
}

export default About