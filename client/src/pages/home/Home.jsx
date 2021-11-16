import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import "./home.css";
import api from "../../http/http";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="postsnav">

      </div>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
