<?php

namespace App\Http\Controllers;

use App\Models\Blog\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        return view('blog', [
            "posts" => Post::query()
                ->select(['*'])
                ->with(['author'])
                ->latest()
                ->paginate(10)
        ]);
    }

    public function show(Post $post, string $slug, Request $request)
    {
        return view('post', [
            'post' => $post,
            'comments' => $post->comments()
                ->with('commenter')
                ->latest()->get()
        ]);
    }
}
