import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      name
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="text-center text-gray-500">No comments yet</div>
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ comments }) => {
  const commentsArray = comments.map((comment) => {
    return (
      <div className="mt-8" key={comment.id}>
        <Comment comment={comment} />
      </div>
    )
  })

  return <div className="mt-8">{commentsArray}</div>
}
