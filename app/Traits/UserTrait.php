<?php

namespace App\Traits;

use App\Models\AcademicInfo;
use App\Models\Branch;
use App\Models\PersonalInfo;
use App\Models\Role;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, HasMany, HasOne};


trait UserTrait
{
    public function getProfilePhotoUrlAttribute()
    {
        if (!$this->profile_photo) {
            return null;
        }
        return url('storage/' . $this->profile_photo);
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function branch(): HasOne
    {
        return $this->hasOne(Branch::class, 'id', 'branch_id');
    }

    public function personalInfo(): HasOne
    {
        return $this->hasOne(PersonalInfo::class);
    }

    public function academicInfo(): HasMany
    {
        return $this->hasMany(AcademicInfo::class);
    }
}
