import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({ id: 1, title: 'hello' });

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    console.log(id);
    const response = await PostService.getById(id);
    console.log(response.data);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div>
      <h1>Post {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}
          {post.title}
        </div>
      )}
    </div>
  );
}
