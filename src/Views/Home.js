import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Drawer,Icon } from 'native-base';
import MenuItem from '../components/MenuItem';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
      }
  constructor(props){
    super(props);
    this.state = {
      isOpened: false,
    }
  }
  closeDrawer = () => {
      this.drawer._root.close()
      this.setState({ isOpened: false })
    };
    openDrawer = () => {
      if(this.state.isOpened){
        this.closeDrawer()
      }else{
        this.drawer._root.open()
        this.setState({ isOpened: true })
      }
    };
  render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity onPress={this.openDrawer} style={{padding: 20, marginTop: 20,paddingBottom: 0}}>
                <Icon name="menu" />
            </TouchableOpacity>
            <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<View style={{backgroundColor: '#fff',height: '100%'}}>
                        <MenuItem />
                    </View>}
            onClose={() => this.closeDrawer()}
            tapToClose={true}
            openDrawerOffset={0.4} >
            </Drawer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    color: '#d6edf8',
    fontSize: 22,
    opacity: 1
  },
  container: {
    flex: 1
  }
});