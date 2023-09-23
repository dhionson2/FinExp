import React, { useState } from 'react';
import { TouchableWithoutFeedback ,View} from 'react-native';
import {Container, ButtomFilterText,ModalContent,ButtomFilter} from './styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
export default function CalendarModal({setVisible,handleFilter}){
    const [dateNow, setDateNow] = useState(new Date())
    const [markeddates, setMarkedDates] = useState({});
  
    function handleOnDayPress(date){
      //console.log(date.dateString);
      setDateNow(new Date(date.dateString));
  
      let markedDay = {};
  
      markedDay[date.dateString] = {
        selected: true,
        selectedColor: '#3b3dbf',
        textColor: '#FFF'
      }
  
      setMarkedDates(markedDay)
  
  
    }
  
  
    function handleFilterDate(){
      handleFilter(dateNow);
      setVisible();
    }
  
    return(
      <Container>
        <TouchableWithoutFeedback onPress={setVisible}>
          <View style={{ flex:1 }}></View>
        </TouchableWithoutFeedback>
  
        <ModalContent>
          
          <Calendar
           onDayPress={handleOnDayPress}
           markedDates={markeddates}
           enableSwipeMonths={true}
           theme={{
             todayTextColor: '#FF0000',
             selectedDayBackgroundColor: '#00adf5',
             selectedDayTextColor: '#FFF'
           }}
          />
  
          <ButtomFilter onPress={handleFilterDate}>
            <ButtomFilterText>Filtrar</ButtomFilterText>
          </ButtomFilter>
  
        </ModalContent>
      </Container>
    )
}