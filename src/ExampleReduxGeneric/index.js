import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts } from './redux'
import CreatePost from './CreatePost'

const ExampleReduxGeneric = () => {
  const dispatch = useDispatch()
  const { isFetching, data, error } = useSelector(({ posts: { list } }) => ({
    isFetching: list.isFetching,
    data: list.data ? list.data.slice(0, 5) : [],
    error: list.error
  }))

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])


  return (
    <section>
      {error && <p className="err-msg">{error}</p>}
      {isFetching && <p className="loading-msg">Ładuje...</p>}

      <ul>
        {data.map(post => <li key={post.id}><b>{post.title}</b>: {post.body}</li>)}
      </ul>

      <CreatePost />
    </section>
  );
}

export default ExampleReduxGeneric;
