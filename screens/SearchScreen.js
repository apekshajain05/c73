import React from 'react';
import { Text, View,FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase';

export default class Searchscreen extends React.Component {
  constructor(){
    super();
    this.state={
      allTransactions:[],
    }
  }
  componentDidMount=async()=>{
    const query=await db.collection("transaction").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:[...this.state.allTransactions,doc.data()]
      })
    });
  }
    render() {
      return (
      <ScrollView> 
        {this.state.allTransactions.map((transaction)=>{
          return(
            <View style={{borderBottomWidth:2}}>
              <Text>{"Book ID: "+transaction.bookID }  </Text>
              <Text>{"Student ID: "+transaction.studentID }  </Text>
              <Text>{"Transaction Type: "+transaction.transactionType }  </Text>
              <Text>{"Date: "+transaction.data.toDate() }  </Text>
            </View>
          )
          })}
        </ScrollView>
        
      );
    }
  }