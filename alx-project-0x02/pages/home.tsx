import React from "react";
import Card from "@/components/common/Card";
import Link from "next/link";
import PostModal from "@/components/common/PostModal";
import { PostModalProps } from "@/interfaces";


const HomePage: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-white-50 gap-10.5">
      <h1 className="text-4xl font-bold text-blue-600">Home</h1>
      <div>
        <Card
        title="Welcome to your home-away-from-home"
        content="Enjoy the luxury of your home at your conviniencee"/>
        <Card
        title="What is your expectation?"
        content="We have luxury awaiting you at all times"/>
        <Card
        title="What is the cost?"
        content="We have properties for all budjets"/>
      </div>
    </main>
  );
};
//implement Postmodal for user input
const Post: React.FC <PostModalProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    const newPost = { title, content };
    setPosts((prev) => [newPost, ...prev]);
}};

  return (
    <div className="p-8 space-y-6">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add New Post
      </button>

      {/* Render cards */}
      /*
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts yet. Click the button above to add one.</p>
      ) : (
        posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))
      )}

      {/* Modal */}
      /*
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
   </div>*
    
  );


export default HomePage;
