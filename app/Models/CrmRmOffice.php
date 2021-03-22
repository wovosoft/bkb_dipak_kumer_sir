<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CrmRmOffice extends Model
{
    use HasFactory;

    /**
     * @return BelongsTo
     */
    public function divisionalOffice(): BelongsTo
    {
        return $this->belongsTo(DivisionalOffice::class);
    }
}
