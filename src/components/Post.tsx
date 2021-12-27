import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React, { useCallback, useState } from "react";
import InputOption from "./InputOption";
import ContextMenu from "./ContextMenu";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Post.css";

interface PropsType {
  post_id: string;
  name: string;
  description: string;
  message: string;
  photoUrl?: string;
}

const Post = (props: PropsType) => {
  const [isHiddenContext, setHiddenContext] = useState(true);
  const handleHiddenContextMenu = (e: any) => {
    e.preventDefault();
    setHiddenContext(!isHiddenContext);
  };
  const [disabled, setDisabled] = useState(true);

  const handleDisablePost = useCallback(() => {
    setDisabled(!disabled);
  }, [disabled]);

  const handleClickEdit = () => {
    setHiddenContext(!isHiddenContext);
    setDisabled(!disabled);
  };

  const [messageInstead, setMessageInstead] = useState(props.message);

  return (
    <div className="post">
      <ContextMenu
        post_id={props.post_id}
        message={props.message}
        isHiddenContext={isHiddenContext}
        onClickEdit={handleClickEdit}
      />
      <div className="post__header">
        <Avatar src={props.photoUrl}>{props.name[0]}</Avatar>
        <div className="post__info">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
        <div className="post__action" onClick={handleHiddenContextMenu}>
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post__body">
        <p hidden={!disabled}>{props.message}</p>
        <TextareaAutosize
          maxRows={10}
          defaultValue={props.message}
          hidden={disabled}
          onChange={(e: any) => setMessageInstead(e.target.value)}
        />
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption
          Icon={SendOutlined}
          title={disabled ? "Send" : "Edit"}
          post_id={props.post_id}
          message={messageInstead}
          isEdit={!disabled}
          handleDisablePost={handleDisablePost}
          color="gray"
        />
      </div>
    </div>
  );
};

export default Post;
