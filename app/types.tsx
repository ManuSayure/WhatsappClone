export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};


export type User = {
  id: String;
  name: String;
  status:String;
  //imageUri: String;
};
export type Message = {
    id: String;
    content: String;
    createdAt: Number;  
    user: User;

};
export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}
