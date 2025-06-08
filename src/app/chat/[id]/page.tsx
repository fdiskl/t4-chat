import { type FC } from "react";
import { ChatInput } from "@/components/chat-input";

interface ChatPageProps {
  params: {
    id: string;
  };
}

const ChatPage: FC<ChatPageProps> = async ({ params }) => {
  const { id } = await params;
  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <div className="container mx-auto p-4">
          <div className="text-center"> 
            <h1 className="text-2xl font-bold mb-4">Chat</h1>
            <p>Chat ID: {id}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatPage; 