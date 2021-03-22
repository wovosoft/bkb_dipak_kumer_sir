<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $appends = ['file_url'];

    public function getFileUrlAttribute(): string
    {
        return asset('storage/' . $this->filepath);
    }
}
