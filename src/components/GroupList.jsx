import { useState,useEffect } from 'react'
import Button from '/home/alexeydemin/Рабочий стол/React/my-app/src/components/Button.jsx'
import List from '/home/alexeydemin/Рабочий стол/React/my-app/src/components/List.jsx'
import {nanoid} from 'nanoid'
import '/home/alexeydemin/Рабочий стол/React/my-app/src/List.css'

function GroupList () {
    const ArrList=[
      {
        id: nanoid(),
        name: 'Привет',
        title:'Первое сообщение:'
      }
    ]

    const [item,setItem]=useState(ArrList)
    const addItem=()=>{
      setItem(
        [...item,
          {
            id: nanoid(),
            name: 'User',
            title: 'Вы нажали на кнопку:'
          }
        ]
      );         
    }
    useEffect(()=>{
      if(item.length===23) {
        item.length=0
        return
      }
    },[item])

  return <div>
          <div>
            <Button className='button' text='Нажми' onClick={addItem}/>
          </div>
          <List items={item}/>
        </div>
}
export default GroupList