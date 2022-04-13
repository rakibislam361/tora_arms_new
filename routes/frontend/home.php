<?php

use App\Http\Controllers\Frontend\AgentController;
use App\Http\Controllers\Frontend\MemberController;
use App\Http\Controllers\Frontend\TermsController;

use App\Http\Controllers\Frontend\HomeController;
use App\Domains\Auth\Http\Controllers\Frontend\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use Tabuna\Breadcrumbs\Trail;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */

Route::get('/', [HomeController::class, 'index'])
    ->name('index')
    ->breadcrumbs(function (Trail $trail) {
        $trail->push(__('Home'), route('frontend.index'));
    });

Route::get('terms', [TermsController::class, 'index'])
    ->name('pages.terms')
    ->breadcrumbs(function (Trail $trail) {
        $trail->parent('frontend.index')
            ->push(__('Terms & Conditions'), route('frontend.pages.terms'));
    });


// Route::get('/', [LoginController::class, 'showLoginForm'])->name('login');

Route::get("agent/create", [AgentController::class, "create"])->name("agent.register");
Route::post("agent/store", [AgentController::class, "store"])->name("agent.store");

Route::get("member/create", [MemberController::class, "create"])->name("member.create");
Route::post("/member/store", [MemberController::class, "store"])->name("member.store");
