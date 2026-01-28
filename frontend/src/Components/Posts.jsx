import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Repeat2, Share, BarChart2 } from 'lucide-react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleFetch = async () => {
        try {
            const response = await fetch('http://localhost:3000/x/post');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLike = async (postId) => {
        try {
            const response = await fetch(`http://localhost:3000/x/post/${postId}/like`, {
                method: 'POST',
            });
            if (!response.ok) throw new Error('Failed to like post');
            const data = await response.json();

            // Update local state with new like count
            setPosts(prev =>
                prev.map(post =>
                    post._id === postId ? { ...post, likes: data.likes } : post
                )
            );
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    useEffect(() => {
        handleFetch();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center p-10">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="p-10 text-center text-gray-500">
                No posts yet. Be the first to post!
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {posts.map((post) => {
                const handleLike = async () => {
                    try {
                        const res = await fetch(`http://localhost:3000/api/posts/like/${post._id}`, {
                            method: "POST"
                        });

                        const data = await res.json();

                        // Update the specific post's likes in the posts array
                        setPosts(prevPosts =>
                            prevPosts.map(p =>
                                p._id === post._id ? { ...p, likes: data.likes } : p
                            )
                        );
                    }
                    catch (err) {
                        console.error("Error liking post:", err);
                    }
                };

                return (
                    <div key={post._id} className="border-b border-gray-800 p-4 hover:bg-white/5 transition-colors cursor-pointer">
                        <div className="flex gap-3">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post._id}`}
                                alt="avatar"
                                className="w-10 h-10 rounded-full bg-gray-700"
                            />
                            <div className="flex flex-col w-full">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold hover:underline text-white">User</span>
                                    <span className="text-gray-500 text-sm">@user · {new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <p className="mt-1 text-[15px] text-white whitespace-pre-wrap leading-normal">
                                    {post.content}
                                </p>

                                {/* Actions */}
                                <div className="flex justify-between mt-3 max-w-md text-gray-500">
                                    <button className="hover:text-sky-500 flex items-center gap-1 group transition-colors">
                                        <div className="p-2 group-hover:bg-sky-500/10 rounded-full">
                                            <MessageCircle size={18} />
                                        </div>
                                        <span className="text-sm">{post.comments?.length || 0}</span>
                                    </button>

                                    <button className="hover:text-green-500 flex items-center gap-1 group transition-colors">
                                        <div className="p-2 group-hover:bg-green-500/10 rounded-full">
                                            <Repeat2 size={18} />
                                        </div>
                                        <span className="text-sm">{post.retweets || 0}</span>
                                    </button>

                                <button
                                    onClick={() => handleLike(post._id)}
                                    className="hover:text-pink-500 flex items-center gap-1 group transition-colors"
                                >
                                    <div className="p-2 group-hover:bg-pink-500/10 rounded-full">
                                        <Heart size={18} />
                                    </div>
                                    <span className="text-sm">{post.likes || 0}</span>
                                </button>

                                    <button className="hover:text-sky-500 flex items-center gap-1 group transition-colors">
                                        <div className="p-2 group-hover:bg-sky-500/10 rounded-full">
                                            <BarChart2 size={18} />
                                        </div>
                                        <span className="text-sm">{Math.floor(Math.random() * 1000)}</span>
                                    </button>

                                    <button className="hover:text-sky-500 flex items-center group transition-colors">
                                        <div className="p-2 group-hover:bg-sky-500/10 rounded-full">
                                            <Share size={18} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Posts;