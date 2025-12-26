
const NewPost = () => {
  return (
    <div className="card bg-base-100">
        <div className="card-body">
            <div className="form-control mb-4">
                <input
                    type="text"
                    placeholder="What's happening?"
                    className="input input-bordered"
                    value={post.content}

                />
            </div>
        </div>
    </div>
  )
}

export default NewPost