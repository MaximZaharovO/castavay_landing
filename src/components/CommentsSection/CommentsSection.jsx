import Comment from "components/Comment"
import COMMENTS from "shared/comments"

export default function CommentsSection() {
    return (
        <div className="COMMENTS-wrapper">
            {COMMENTS.map(comment => <Comment comment={comment} />)}
        </div>
    )
}