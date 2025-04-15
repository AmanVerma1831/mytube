import React from 'react'

const ChatMessage = ({ name, message, id }) => {

    const imgId = 20 + id;

    return (
        <div className='flex p-2 border-b-1 border-gray-300 rounded-lg mb-1 bg-white'>
            <div>
                <img className="inline h-6 mr-2 rounded-full" src={"https://picsum.photos/id/" + imgId + "/237/200"} alt="usericon"></img>
                <span className='font-bold text-black text-sm'>{name}</span>
            </div>
            <div>
                <span className='ml-3 text-black text-sm font-normal items-center'>{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage;