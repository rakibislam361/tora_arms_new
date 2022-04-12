<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountHistory extends Model
{
    use HasFactory;
    protected $table = 'account_history';

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function expense()
    {
        return $this->belongsTo(ExpenseList::class, 'expense_id', 'id');
    }

    public function income_expense()
    {
        return $this->belongsTo(IncomeExpense::class, 'income_expense_id', 'id');
    }
    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }
}
