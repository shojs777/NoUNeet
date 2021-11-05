import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

export default class Chatbot extends Component {
  render() {
    var msg = "";
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message:
              "ここまで来ていただきありがとうございます！ご質問があればどうぞ！",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },

          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            end: false,
          },
        ]}
      />
    );
  }
}
