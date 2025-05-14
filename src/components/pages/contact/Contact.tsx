import { useState, useEffect, useRef } from "react";
import "./Contact.css";
import { prompt } from "./chatbotapi";

type Message = {
  role: string;
  content: string;
};

function Contact() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState<Message[]>([]);
  const chatLogRef = useRef<HTMLDivElement>(null);

  async function handleSubmit() {
    if (!input.trim()) return;

    const newLog = [...chatLog, { role: "user", content: input }];
    setChatLog(newLog);
    setInput("");

    const result = await prompt(input);
    if (result) {
      setChatLog([...newLog, { role: "assistant", content: result }]);
    }
  }

  useEffect(() => {
    // Scroll chat log to bottom whenever a new message is added
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <div className="contact">
      <div className="contactWindow">
        <div className="chatLog" ref={chatLogRef}>
          {chatLog.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
        </div>

        <div className="inputArea">
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
ai;
