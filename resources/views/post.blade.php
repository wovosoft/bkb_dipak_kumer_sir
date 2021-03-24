<x-blog>
    <div class="container">
        <div class="card my-2">
            <div class="card-body">
                <h3 class="card-title text-center text-decoration-none">
                    <a class="text-decoration-none"
                       href="{{route('Frontend.Post.Show',['post'=>$post->id,'slug'=>$post->slug])}}">
                        {{$post->title}}
                    </a>
                </h3>
                <div class="card-text">{!! $post->content !!}</div>
            </div>
            <div class="card-footer text-sm">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        Posted By {{$post->author->name}}
                    </div>
                    <div style="text-align: right;"
                         class="col-md-6 col-sm-12 text-right text-md-right text-sm-left">
                        <small>Posted on {{$post->created_at->format('d-m-Y h:i A')}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="card mt-3">
            <div class="card-header">
                Comments
            </div>
            <div class="card-body">
                <ul>
                    @foreach($comments as $comment)
                        <li class="mb-3">
                            {{$comment->content}}
                            <br>
                            <small class="text-secondary font-italic">
                                Commented By - {{$comment->commenter->name}}
                                at {{$comment->created_at->format('d-m-Y h:i A')}}
                            </small>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</x-blog>
