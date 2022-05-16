import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {showMessage} from 'react-native-flash-message'
import PushNotification, { Importance } from "react-native-push-notification";
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './Home.style'
import colors from '../../assets/colors/colors';
import AddTaskModal from '../../components/AddTaskModal/AddTaskModal';
import TodoCard from '../../components/TodoCard/TodoCard';
import Header from '../../components/Header/Header';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import AddTaskTutorial from '../../components/AddTaskTutorial/AddTaskTutorial';

const Home = ({navigation}) => {
    const [date,setDate] = useState('')
    const [isDateTimeVisible,setIsDateTimeVisible] = useState(false)
    const [todoList,setTodoList] = useState([])
    const [todo,setTodo] = useState('')
    const [isModalVisible,setIsModalVisible] = useState(false)

    useEffect(()=>{
        createChannel();
      },[])
      useEffect(() =>{
        getTodosFromUserDevice();
      }, [])
      useEffect(() => {
        saveTodoTouserDevice(todoList);
      }, [todoList]);

    const createChannel = () => {
        PushNotification.createChannel({
          channelId:'test-channel',  
          channelName:'Test-Channel'
        } )
      }
      const saveTodoTouserDevice = async todoList => {
        try {
          const stringifyTodos = JSON.stringify(todoList);
          await AsyncStorage.setItem('@todoList', stringifyTodos);
        } catch (e) {
          console.log(e);
          // saving error
        }
      };
      const getTodosFromUserDevice = async () => {
        try {
          const todoList = await AsyncStorage.getItem('@todoList');
          if(todoList != null){
            setTodoList(JSON.parse(todoList));
          }
        } catch(error) {
          console.log(error);
        }
      };
    

    const addTask = () => {
        setIsModalVisible(true)
    }
    const closeModal = () => {
        setIsModalVisible(!isModalVisible)
    }
     const handleAddTask = () => {
         if (todo=='') {
             showMessage({
                 message:'Task cant be empty',
                 type:'danger'
             })
         } else {
            const newTodo = {
                id : Math.random(),
                task : todo,
                completed:false,
                date : date.toString()
            }
           
            if (date) {
                PushNotification.localNotificationSchedule({
                    largeIcon:'ic_launcher_round',
                    smallIcon:'ic_launcher_round',
                    allowWhileIdle:true,
                    importance:Importance.HIGH,
                    title:'WTodo',
                    channelId:'test-channel',
                    message:`Have you finish ${todo}?`,
                    date: date,
                    channelName:'Test-Channel'
                  })
                  setTodoList([...todoList,newTodo])
                  setTodo('')
                  setIsModalVisible(false)
            } else {
               showMessage({
                   message:'Please select a date',
                   type:'warning'
               })
            }
            
         }
        
     }
     const removeTasks = () => {
         setTodoList([])
     }
     
      const goRemoveSpesificTask  = (todoId) => {
        const newTodos = todoList.filter(item => item.id != todoId)
        setTodoList(newTodos)
      }

     const renderTodo = ({item,index}) => <TodoCard todo={item} index={index} onPressTrash={goRemoveSpesificTask} />

     const openCalendar = () => {
        setIsDateTimeVisible(!isDateTimeVisible)
     }
     const handleConfirm = (selectedDate) => {
         setDate(selectedDate)
     }

    return(
        <View style={styles.container} >
            
            {todoList.length>0?
             <View style={styles.list_container} >
             <FlatList
             data={todoList}
             renderItem={renderTodo}
             />
             </View> : <AddTaskTutorial/>
        }
            <TouchableOpacity 
            onPress={addTask}
            style={styles.addtaskbutton} >
                <Icon name='plus' size={30} color='white' />
            </TouchableOpacity>
            <AddTaskModal 
            onPressCalendar={openCalendar}
            isVisible={isModalVisible} 
            onClose={closeModal}
            onChangeText={(text)=> setTodo(text)}
            onPressAddTask={handleAddTask}
            />
            <DateTimePicker
            handleConfirm={handleConfirm}
            handleCancel={()=>setIsDateTimeVisible(false)}
            isDateTimeVisible={isDateTimeVisible}
            />
        </View> 
    )
}
export default Home