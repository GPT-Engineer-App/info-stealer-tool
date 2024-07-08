import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
      // Placeholder for chatbot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "This is a placeholder response." },
      ]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Placeholder for document analysis
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: `Analyzing document: ${file.name}` },
      ]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Document Analysis Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <input type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload} className="ml-2">
              Upload Document
            </Button>
          </div>
          <div className="chat-window mb-4 p-4 border rounded h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow mr-2"
              placeholder="Type your message..."
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;