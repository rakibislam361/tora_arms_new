 <div class="modal fade expenseModal" id="expenseModal" tabindex="-1" role="dialog" aria-labelledby="expenseModalLabel"
     aria-hidden="true">
     <div class="modal-dialog" role="document">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title" id="expenseModalLabel"></h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                 </button>
             </div>
             <div class="expense-modal-body">
                 {{ html()->form('POST')->class('m-3 expanse-modal-form')->attribute('enctype', 'multipart/form-data')->open() }}

                 <div class="form-group">
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     <button type="submit" class="btn btn-primary">Save</button>
                 </div>
                 {{ html()->form()->close() }}

             </div>
         </div>
     </div>
 </div>

 <footer class="main-footer">
     <div class="float-right d-none d-sm-block">
         <b>Version</b> 2.0.0
     </div>
     <strong>Copyright &copy; 2019-{{ date('Y') }} <a href="{{ get_setting('app_url') }}"
             target="_blank">{{ get_setting('app_name') }}</a>.</strong> All rights
     reserved.
 </footer>
