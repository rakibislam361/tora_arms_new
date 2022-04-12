<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use App\Models\Member;
use Illuminate\Database\Eloquent\Model;

class IncomeExpense extends Model
{
    protected $table = 'income_expenses';

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class, 'payment_method', 'id');
    }

    public function expense()
    {
        return $this->belongsTo(ExpenseList::class, 'expense_id', 'id');
    }

    public function payerGet()
    {
        return $this->belongsTo(Payer::class, 'payer', 'id');
    }

    public function getMember()
    {
        return $this->belongsTo(Member::class, 'payer', 'id');
    }
}
