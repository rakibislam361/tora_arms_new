<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\File;

class SendMembersToCompany extends Mailable
{
  use Queueable, SerializesModels;


  public $subject, $body, $attachmentsFiles;

  /**
   * Create a new message instance.
   * @param $subject
   * @param $body
   * @param $attachments
   */
  public function __construct($subject, $body, $attachments)
  {
    $this->subject = $subject;
    $this->body = $body;
    $this->attachmentsFiles = $attachments;
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build()
  {
    $attachmentsFiles = $this->attachmentsFiles;
    $subject = $this->subject;
    $body = $this->body;

    $email = $this->markdown('mails.membersProfileToCompany')
      ->with('body', $body)
      ->subject($subject);

    if (!empty($attachmentsFiles)) {
      foreach ($attachmentsFiles as $file) {
        $file = public_path($file);
        if (File::exists($file)) {
          $email = $email->attach($file, ['mime' => 'application/pdf']);
        }
      }
    }

    return $email;
  }
}
