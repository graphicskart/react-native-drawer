import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Ionicons'

export default class MenuItem extends React.Component{
    render(){
        return(
            <View>
                <View style={{marginTop: 30,alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{height: 100, width: 100, borderRadius: 50,backgroundColor: '#eee',marginBottom: 10,overflow: 'hidden'}}>
                        <Image source={require('../img/user1.jpeg')} style={{height: '100%', width: '100%'}}/>
                    </View>
                    <Text style={{fontSize: 13,color: '#5f5c5c',fontWeight: 'bold'}}>Graphicskart@gmail.com</Text>
                </View>
                <View style={{marginTop: 20,borderBottomWidth: 1,borderColor: '#c0b7b7'}}>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <Icon name="inbox" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#d44d66"/>
                        <Text style={{color: '#d44d66',fontSize: 15,fontWeight: 'bold'}}>Inbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <MaterialIcons name="send" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#5f5c5c"/>
                        <Text>Outbox</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <Entypo name="emoji-happy" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#5f5c5c"/>
                        <Text>Peoples</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                        <EvilIcons name="trash" style={{position: 'absolute',left: 20,top: 17}} size={27} color="#5f5c5c"/>
                        <Text>Trash</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 20}}>
                    <Text style={{fontSize: 13,color: '#5f5c5c',fontWeight: 'bold'}}>Sub Items</Text>
                </View>
                <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                    <Icon name="setting" style={{position: 'absolute',left: 20,top: 17}} size={25} color="#5f5c5c"/>
                    <Text>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 60,paddingLeft: 70,justifyContent: 'center'}}>
                    <Feather name="md-help-circle" style={{position: 'absolute',left: 20,top: 17}} size={27} color="#5f5c5c"/>
                    <Text>Help & Feedback</Text>
                </TouchableOpacity>
            </View>
        )
    }
}