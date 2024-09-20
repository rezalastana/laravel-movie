<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
// hasRole spatie
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    //relasi antara user dengan userSubscription, hasOne karena ambil relasi terakhir yang paid dan 1 data saja
    public function lastActiveUserSubscription(): HasOne
    {
        return $this->hasOne(UserSubcription::class)->wherePaymentStatus('paid')->latest();
    }

    // buat method chek atived user subscription
    public function getIsActiveAttribute()
    {
        // kondisi jika tidak ada lastActiveUserSubscription
        if (!$this->lastActiveUserSubscription) {
            return false;
        }

        $dateNow = Carbon::now();
        // logic dateExpired dengan menggunakan Carbon dan mengambil expired_date dari lastActiveUserSubscription
        $dateExpired = Carbon::create($this->lastActiveUserSubscription->expired_date);

        // jika tanggal sekarang kurang dari atau sama dengan dateExpired berarti user tersebut masih aktif
        return $dateNow->lessThanOrEqualTo($dateExpired);
    }
}
