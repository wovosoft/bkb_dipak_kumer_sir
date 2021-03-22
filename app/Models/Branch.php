<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Branch extends Model
{
    use HasFactory;

    public function divisionalOffice(): BelongsTo
    {
        return $this->belongsTo(DivisionalOffice::class);
    }

    public function crmRmOffice(): BelongsTo
    {
        return $this->belongsTo(CrmRmOffice::class);
    }
}
