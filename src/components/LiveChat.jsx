import React, { useState, useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/chatSlice';
import { generateMessage, generateName } from '../utils/nameGenerator';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveChat, setLiveChat] = useState("");

    useEffect(() => {
        const chatInterval = setInterval(() => {
            dispatch(addMessage({
                name: generateName(),
                message: generateMessage()
            }))

        }, 2000);

        return () => clearInterval(chatInterval);
    }, [dispatch])

    return (
        <div className='w-full border border-gray-400 mb-6 p-2 bg-slate-100 '>
            <span className='font-semibold text-red-600 mb-2'>Live Chat 🗨️🗨️</span>
            <div className='h-[400px] overflow-y-scroll flex flex-col-reverse'>
                {
                    chatMessages.map((m, i) => <ChatMessage name={m.name} message={m.message} id={i} key={i} />)
                }
            </div>
            <div>
                <form action="post" onSubmit={(e) => e.preventDefault()}>
                    <input type='text' className='py-1 my-2 border border-gray-300 w-[80%] mr-3 px-2 bg-white'
                        placeholder='Write Your Message...'
                        value={liveChat}
                        onChange={(e) => setLiveChat(e.target.value)}
                    />
                    <button
                        className='text-white bg-green-700 hover:bg-white hover:text-green-700 border px-2 py-1 rounded'
                        onClick={() => {
                            dispatch(addMessage({
                                name: 'Aman Verma',
                                message: liveChat
                            }))
                            setLiveChat("");
                        }}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LiveChat;