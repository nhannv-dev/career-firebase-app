import "./ContextMenu.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db } from "../firebase";

interface PropsType {
  post_id: string;
  message: string;
  isHiddenContext: boolean;
  onClickEdit: (e: any) => void;
}

const ContextMenu = (props: PropsType) => {
  /**
   * Handle Delete Post
   */
  const handleDeletePost = (e: any) => {
    e.preventDefault();
    db.collection("posts")
      .doc(props.post_id)
      .delete()
      .catch((err: any) => {
        alert(err.message);
      });
  };

  return (
    <div className="context" hidden={props.isHiddenContext}>
      <div
        className="context_item update"
        onClick={props.onClickEdit}
        data-index=""
      >
        <div className="inner_item">
          <EditIcon fontSize="small" /> Edit post
        </div>
      </div>
      <div className="context_hr"></div>
      <div
        className="context_item delete"
        onClick={handleDeletePost}
        data-index=""
      >
        <div className="inner_item">
          <DeleteForeverIcon /> Delete post
        </div>
      </div>
    </div>
  );
};

export default ContextMenu;
