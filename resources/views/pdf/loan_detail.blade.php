<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <style>
        {{\Illuminate\Support\Facades\File::get(resource_path('views/pdf/bootstrap.css'))}}
    </style>
</head>
<body>
<table style="width: 100%;box-sizing: border-box;">
    <tr>
        <td style="width: 35%"></td>
        <td style="width: 30%">
            <img style="width: 100%;margin: auto;" src="{{storage_path('app/files/logo.png')}}">
        </td>
        <td style="width: 35%"></td>
    </tr>
</table>
<br>
<br>
<br>
<hr>
<h4 class="text-center">Overview</h4>
<table style="width: 100%;" class="table table-bordered table-sm">
    <tbody>
    @foreach(['id','company','proprietor_name','sanction_amount','sanction_date','due_date','loan_account_no',
    'created_at'] as $prop)
        <tr>
            <td>{{str_replace('_',' ',\Illuminate\Support\Str::title($prop))}}</td>
            <td>{{$item->$prop}}</td>
        </tr>
    @endforeach
    </tbody>
</table>
<h4 class="text-center">Description</h4>
{!! $item->description !!}

<h4 class="text-center">Files</h4>
<table style="width: 100%;" class="table table-bordered table-sm">
    <tbody>
    @foreach($item->documents as $doc)
        <tr>
            <td>
                {{($loop->index+1).". ".$doc->description}}
            </td>
            <td>
                <a href="{{$doc->file_url}}" target="_blank">
                    Download
                </a>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
{{--<pre>{{print_r($item->toArray())}}</pre>--}}
</body>
</html>
