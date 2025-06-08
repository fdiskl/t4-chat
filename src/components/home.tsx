import { ChatInput } from "./chat-input";
import HomeSidebar from "./home-sidebar";

export default function HomePage() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">How can I help you today?</h1>
            </div>
            <div className="flex justify-center items-center w-full">
                <ChatInput />
            </div>
        </div>
    );
}
