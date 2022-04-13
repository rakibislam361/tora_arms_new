<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $table = 'accounts';
    public $timestamps = true;
    protected $guarded = [];

    public function accountHistory()
    {
        return $this->hasMany(AccountHistory::class, 'account_id', 'id');
    }

    public function income_expense()
    {
        return $this->hasMany(IncomeExpense::class, 'id', 'account_id');
    }

    public function expense()
    {
        return $this->hasMany(ExpenseList::class, 'expense_id', 'id');
    }
}
