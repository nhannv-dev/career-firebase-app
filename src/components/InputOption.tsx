import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./InputOption.css";
import { firebase, db } from "../firebase";

interface PropsType {
  color: string;
  Icon: any;
  title: string;
  post_id?: string;
  message?: string;
  isEdit?: boolean;
  handleDisablePost?: () => void;
}

const InputOption: React.FC<PropsType> = (props: PropsType) => {
  const user = useSelector(selectUser);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (props.isEdit) {
      if (props.handleDisablePost) props.handleDisablePost();

      db.collection("posts")
        .doc(props.post_id)
        .update({
          name: user.displayName,
          description: user.email,
          message: props.message,
          photoUrl: user.photoUrl || "",
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }
  };
  return (
    <div className="inputOption" onClick={onSubmit}>
      <props.Icon style={{ color: props.color }} />
      <h4>{props.title}</h4>
    </div>
  );
};

export default InputOption;
