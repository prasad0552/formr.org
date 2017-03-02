<?php Template::load('admin/header'); ?>

<div class="content-wrapper">
	<!-- Content Header (Page header) -->
	<section class="content-header">
		<h1><?php echo $run->name; ?> </h1>
	</section>

	<!-- Main content -->
	<section class="content">
		<div class="row">
			<div class="col-md-2">
				<?php Template::load('admin/run/menu'); ?>
			</div>
			<div class="col-md-8">
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title">Delete Run </h3>
					</div>
					<form role="form" action="<?php echo admin_run_url($run->name, 'delete_run'); ?>" method="post">
						<div class="box-body">

							<h4>Type run name to confirm it's deletion</h4>
							<div class="form-group">
								<p class="control-label hastooltip" for="delete_confirm" title="this is required to avoid accidental deletions">Type the run's name to confirm that you want delete all existing <span class="badge badge-success"><?= $users['sessions'] ?></span> users who progressed on average to position <span class="badge"><?= round($users['avg_position'], 2) ?></span></p>
							</div>
							<div class="form-group">
								<div class="controls">
									<div class="input-group">
										<span class="input-group-addon"><i class="fa fa-pencil-square"></i></span>
										<input class="form-control" name="delete_confirm" id="delete_confirm" type="text" placeholder="run name (see up left)" autocomplete="off">
									</div>
								</div>
							</div>
						</div>
						<!-- /.box-body -->

						<div class="box-footer">
							<button name="delete" class="btn btn-default btn-danger hastooltip" type="submit"><i class="fa fa-trash-o fa-fw"></i>  Delete the entire run permanently </button>
						</div>
					</form>
				</div>

			</div>
		</div>

		<div class="clear clearfix"></div>
	</section>
	<!-- /.content -->
</div>

<?php Template::load('admin/footer'); ?>