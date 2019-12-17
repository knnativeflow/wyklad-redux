import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from './redux'


const CreatePost = () => {
  const [ values, setValues ] = useState({})
  const dispatch = useDispatch()
  const { isFetching, error, data } = useSelector(({ posts }) => posts.create)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    dispatch(createPost(values))
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <p>Dodaj nowy post:</p>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="body" placeholder="Body" onChange={handleChange} />
        <input type="number" name="userId" placeholder="User id" onChange={handleChange} />
        <button disabled={isFetching}>Dodaj post</button>
      </form>
      {data && <p>Tytuł: {data.title}</p>}
      {error && <p className="err-msg">{error}</p>}
      {isFetching && <p className="loading-msg">Wysylam...</p>}
    </section>
  )
}

export default CreatePost
