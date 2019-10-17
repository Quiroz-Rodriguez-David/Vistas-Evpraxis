	Vue.component('registro',{
		template:
		`
<div> 
	<div>
		<div class="row">
				<div class="col-md-12">
					<h1 class="SectionTitle">Registro</h1>
				</div>
		</div>
	<div class="row">
		<div class="col-md-7 col-md-offset-2">
			<div class="alert alert-info" role="alert">
				<p><strong>Importante: </strong> Revisa tus datos y corrigelos en caso de ser necesario, es importante que sean correctos para evitar inconvenientes en el futuro.</p>
			</div>
				<div class="well">
					<?= $this->html->form('index/registrar', 'POST', 'onSubmit="return validate()"'); ?>
					<div class="form-group">
					<label for="first_name">Nombre<sup>*</sup></label>
					<input name="first_name" type="text" class="form-control" id="first_name" value="<?= ucwords( strtolower( $data['name'] ) ) ?>" data-validate='{"required":true}'>
				</div>
				<div class="form-group">
					<label for="last_name">Apellido(s)<sup>*</sup></label>
					<input name="last_name" type="text" class="form-control" id="last_name" data-validate='{"required":true}'>
				</div>
				<div class="form-group">
					<label for="email">Correo electrónico<sup>*</sup></label>
					<input name="email" type="text" class="form-control" id="email" value="<?= $data['email'] ?>" readonly data-validate='{"required":true}'>
				</div>
				<div class="form-group">
					<label for="student_number">Número de cuenta/matrícula/control</label>
					<input name="student_number" type="text" class="form-control" id="student_number">
					<p class="help-block">Sólo en caso de ser alumno.</p>
				</div>
				<?php if( $worker_number_field ): ?>
				<div class="form-group">
					<label for="worker_number">Número de trabajador</label>
					<input name="worker_number" type="text" class="form-control" id="worker_number">
					<p class="help-block">Sólo en caso de ser trabajador universitario.</p>
					</div>
					<?php endif; ?>
					<div class="text-right">
					<button type="submit" class="btn btn-primary">Registrar datos</button>
					</div>
				</form>
				</div>	
			</div>
		</div>
	</div>
</div>

		`
	});