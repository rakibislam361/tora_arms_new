<form action="{{ route('admin.member.submit.generated') }}" method="post">
    @csrf
    <div class="form-group">
        {{ html()->label('Select Company')->for('company') }}
        {{ html()->select('company', $companies)->class('form-control company-select') }}
    </div>

    <div class="form-group">
        {{-- <label for="exampleInputEmail1">Email address</label> --}}
        <input type="email" class="form-control" name="email" id="email" placeholder="email" required="required"
            readonly>
    </div>

    <div class="form-group">
        {{-- <label for="exampleInputEmail1">Cc</label> --}}
        <input type="text" class="form-control" name="mailCc" placeholder="cc">
    </div>

    <div class="form-group">
        {{-- <label for="exampleInputEmail1">bcc</label> --}}
        <input type="text" class="form-control" name="mailbcc" placeholder="bcc">
    </div>

    <div class="form-group">
        <label for="subject">Mail Subject</label>
        <input type="text" name="subject" id="subject" class="form-control" value="Employment Application"
            placeholder="Mail Subject">
    </div>

    <div class="form-group">
        <label for="email_body">Email body</label>
        {{ html()->textarea('email_body')->class('form-control')->rows(5)->placeholder('Description') }}
        @error('email_body')
            <p class="text-danger margin-bottom-none">{{ $message }}</p>
        @enderror
    </div>

    <div class="form-group">
        @foreach ($members as $key => $member)
            @if ($member->bio_data_without_email)
                <div class="attached-group attached-group d-inline mb-2 mr-2">
                    <label class="text-muted">
                        <i class="fas fa-5x fa-file-pdf"></i>
                        <p>{{ $member->bio_data_without_email }}</p>
                        <input type="text" name="attachments[]" class="form-control d-none"
                            value="{{ 'uploads/users/' . $member->bio_data_without_email }}">
                    </label>
                </div>
            @endif
        @endforeach
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>
