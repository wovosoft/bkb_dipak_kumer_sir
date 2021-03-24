<?php

namespace App\Traits;

use App\Models\AcademicInfo;
use App\Models\ContactInfo;
use App\Models\FamilyMember;
use App\Models\PersonalInfo;
use App\Models\ProfessionalInfo;
use App\Models\Role;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, HasMany, HasOne};


trait UserTrait
{
    public function getProfilePhotoUrlAttribute()
    {
        if (!$this->profile_photo) {
            return null;
        }
        if (filter_var($this->profile_photo, FILTER_VALIDATE_URL)) {
            return $this->profile_photo;
        } else {
            return url('storage/' . $this->profile_photo);
        }
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function personalInfo(): HasOne
    {
        return $this->hasOne(PersonalInfo::class);
    }

    public function academicInfo(): HasMany
    {
        return $this->hasMany(AcademicInfo::class);
    }

    public function contactInfo(): HasMany
    {
        return $this->hasMany(ContactInfo::class);
    }

    public function professionalInfo(): HasMany
    {
        return $this->hasMany(ProfessionalInfo::class);
    }

    public function familyMembers(): HasMany
    {
        return $this->hasMany(FamilyMember::class, 'related_to');
    }
}
