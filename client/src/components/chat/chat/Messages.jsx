import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const { account } = useContext(AccountContext);

  const sendText = (e) => {
    const code = e.keyCode || e.which;
    if (code == 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      console.log(message);
    }
  };

  return (
    <Wrapper>
      <Component></Component>

      <Footer sendText={sendText} setValue={setValue} />
    </Wrapper>
  );
};
export default Messages;
