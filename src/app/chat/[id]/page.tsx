import { type FC } from "react";

interface ChatPageProps {
  params: {
    id: string;
  };
}

const ChatPage: FC<ChatPageProps> = async ({ params }) => {
  const { id } = await params;
  
  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center justify-center">
      <div className="text-center"> 
        <h1 className="text-2xl font-bold mb-4">Chat</h1>
        <p>Chat ID: {id}</p>
      </div>
    </div>
  );
};

export default ChatPage; 