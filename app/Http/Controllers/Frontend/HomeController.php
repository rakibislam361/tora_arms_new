<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;

/**
 * Class HomeController.
 */
class HomeController
{
    /**
     * @return Application|Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        session()->forget('member');
        session()->forget('agent');

        if (auth()->check()) {
            $user = auth()->user();
            if ($user->isAdmin()) {
                return redirect()->route('admin.dashboard');
            }
            if ($user->isUser()) {
                return redirect()->route('frontend.user.dashboard');
            }
        }

        return view('frontend.auth.login');
    }
}
